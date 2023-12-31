import { execSync } from "child_process";

// https://github.com/amimaro/smart-contract-downloader/blob/main/utils/helpers.ts
const isSingleFileContract = (sourceCode: string) => {
  return (
    sourceCode.indexOf("pragma") === 0 ||
    sourceCode.indexOf("//") === 0 ||
    sourceCode.indexOf("\r\n") === 0 ||
    sourceCode.indexOf("/*") === 0
  );
};

const isSymbolObject = (network: string) => {
  return network.indexOf("bsc") >= 0;
};

const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const parseSourceCodeObject = (sourceCode: any, network: string) => {
  if (isSymbolObject(network)) {
    const doubleCurlyBracesPattern = /^[{]{2}(.|\r\n)*[}]{2}$/gm;
    if (doubleCurlyBracesPattern.test(sourceCode)) {
      sourceCode = sourceCode.substring(1, sourceCode.length - 1);
      return JSON.parse(sourceCode).sources;
    }
    return JSON.parse(sourceCode);
  } else if (isJsonString(sourceCode)) {
    return JSON.parse(sourceCode);
  }
  return JSON.parse(sourceCode.substr(1, sourceCode.length - 2));
};

const getSourcesObject = (parsedSourceCode: any, network: string) => {
  if (isSymbolObject(network)) return Object.entries(parsedSourceCode);
  if (parsedSourceCode.hasOwnProperty("sources")) {
    return Object.entries(parsedSourceCode.sources);
  }
  return Object.entries(parsedSourceCode);
};

export const getContractContentList = (sourceCodes: any, network: string) => {
  const contractContent = [];
  for (const sourceCode of sourceCodes) {
    if (isSingleFileContract(sourceCode.SourceCode)) {
      contractContent.push({
        path: "contract.sol",
        content: sourceCode.SourceCode,
      });
    } else {
      const parsedSourceCode = parseSourceCodeObject(sourceCode.SourceCode, network);
      const sourceObjects = getSourcesObject(parsedSourceCode, network).map((sourceObject: any) => {
        return {
          path: sourceObject[0],
          content: sourceObject[1].content,
        };
      });
      contractContent.push(...sourceObjects);
    }
  }
  return contractContent;
};

export const copyToClipboard = (data: string) => {
  navigator.clipboard.writeText(data);
};

export const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

export const isNpmPackage = async (packageName: string) => {
  if (!packageName) return false;
  const res = JSON.parse(execSync(`npm search ${packageName} --json`).toString());
  return res.filter((p: any) => p.name === packageName).length > 0;
};

export const getNpmPackageNameFromContractPath = async (contractPath: string) => {
  if (!contractPath.startsWith("node_modules")) return undefined;

  for (let i = 0; i < 3; i++) {
    const packageName = contractPath
      .split("/")
      .slice(1, 1 + i)
      .join("/");

    if (await isNpmPackage(packageName)) {
      return packageName;
    }
  }

  return undefined;
};
