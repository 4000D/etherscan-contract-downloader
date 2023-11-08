#!/usr/bin/env node
import { program } from "commander";
import { isAddress } from "ethers";
import path from "path";
import axios from "axios";

import { NETWORKS } from "./networks";
import pkg from "../package.json";
import { getContractContentList, getNpmPackageNameFromContractPath } from "./helpers";
import { mkdirSync, writeFileSync } from "fs";
import { exec } from "child_process";
import { readFile, writeFile } from "fs/promises";

program
  .name(pkg.name)
  .version(pkg.version)
  .argument("<networkName>", `The name of networks: (${Object.keys(NETWORKS).join(", ")})`)
  .argument("<contractAddresses...>", "Verified contract address to download source code")
  .option("-d, --dir <dir>", "Directory to save source code")
  .option("-k, --api-key <apiKey>", "Etherscan API Key")
  .action(async (networkName: string, contractAddresses: string[], options: { dir?: string; apiKey?: string }) => {
    const network = NETWORKS[networkName as keyof typeof NETWORKS];
    if (!network) {
      throw new Error(`Network ${networkName} is not supported`);
    }

    if (contractAddresses.some((c) => !isAddress(c))) {
      throw new Error(`Invalid address detected: ${contractAddresses.join(", ")}`);
    }

    for (const contractAddress of contractAddresses) {
      console.log('Downloading source code for contract "%s" on network "%s"', contractAddress, networkName);

      const res: any = await axios.get(network.endpoint(contractAddress, options.apiKey), {}).then((res) => res.data);

      const sourceCodes = res.result;

      if (typeof sourceCodes === "string") {
        throw new Error(sourceCodes);
      }

      if (sourceCodes[0].SourceCode === "") {
        throw new Error(`Invalid API Key`);
      }

      const contractContents = getContractContentList(sourceCodes, networkName);
      console.log(`Detected ${contractContents.length} contracts`);
      console.log(" \n > %s", contractContents.map((s) => s.path).join(" \n > "));
      const dependencies = new Set<string>();

      if (options.dir) {
        for (const content of contractContents) {
          const dependency = await getNpmPackageNameFromContractPath(content.path);
          const filePath = path.join(options.dir, content.path);
          mkdirSync(path.dirname(filePath), { recursive: true });
          writeFileSync(filePath, content.content);

          if (dependency) {
            dependencies.add(dependency);
          }
        }

        await new Promise((resolve) => {
          exec(`npm init -y`, { cwd: options.dir }, resolve);
        });

        const pkgPath = path.join(options.dir, "package.json");
        const pkg = await readFile(pkgPath, "utf8").then((b) => JSON.parse(b));
        pkg.dependencies = {
          ...pkg.dependencies,
          ...Object.fromEntries([...dependencies].map((d) => [d, "*"])),
        };
        await writeFile(pkgPath, JSON.stringify(pkg, null, 2), "utf8");

        console.log("Save source code to directory: %s", options.dir);
        if (dependencies.size > 0) {
          console.log("WARN: Detected dependencies: %s", [...dependencies].join(", "));
        }
      }

      // sleep 1 second to avoid rate limit
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  });

program.parse();
