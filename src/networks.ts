import { config } from "dotenv";
config();

// https://github.com/amimaro/smart-contract-downloader/blob/main/networks.ts
export const NETWORKS = {
  ethmain: {
    label: "Ethereum Mainnet",
    url: "https://etherscan.io",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ETHERSCAN ?? apiKey
      }`,
  },
  rinkeby: {
    label: "Rinkeby Testnet",
    url: "https://rinkeby.etherscan.io",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-rinkeby.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ETHERSCAN ?? apiKey
      }`,
  },
  ropsten: {
    label: "Ropsten Testnet",
    url: "https://ropsten.etherscan.io",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-ropsten.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ETHERSCAN ?? apiKey
      }`,
  },
  kovan: {
    label: "Kovan Testnet",
    url: "https://kovan.etherscan.io",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-kovan.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ETHERSCAN ?? apiKey
      }`,
  },
  goerli: {
    label: "Goerli Testnet",
    url: "https://goerli.etherscan.io",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-goerli.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ETHERSCAN ?? apiKey
      }`,
  },
  polygon: {
    label: "Polygon Mainnet",
    url: "https://polygonscan.com",
    apiKey: process.env.APIKEY_POLYGONSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_POLYGONSCAN ?? apiKey
      }`,
  },
  polygonTest: {
    label: "Polygon Mumbai Testnet",
    url: "https://mumbai.polygonscan.com",
    apiKey: process.env.APIKEY_POLYGONSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-testnet.polygonscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_POLYGONSCAN ?? apiKey
      }`,
  },
  bsc: {
    label: "Binance Smart Chain Mainnet",
    url: "https://bscscan.com",
    apiKey: process.env.APIKEY_BSCSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api.bscscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_BSCSCAN ?? apiKey
      }`,
  },
  bscTest: {
    label: "Binance Smart Chain Testnet",
    url: "https://testnet.bscscan.com",
    apiKey: process.env.APIKEY_BSCSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-testnet.bscscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_BSCSCAN ?? apiKey
      }`,
  },
  arbitrumOne: {
    label: "Arbitrum One Mainnet",
    url: "https://arbiscan.io",
    apiKey: process.env.APIKEY_BSCSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ARBITRUMSCAN ?? apiKey
      }`,
  },
  arbitrumNova: {
    label: "Arbitrum Nova Mainnet",
    url: "https://nova.arbiscan.io",
    apiKey: process.env.APIKEY_ARBITRUMSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-nova.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ARBITRUMSCAN ?? apiKey
      }`,
  },
  arbitrumGoerli: {
    label: "Arbitrum Goerli Testnet",
    url: "https://goerli.arbiscan.io",
    apiKey: process.env.APIKEY_ARBITRUMSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-goerli.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_ARBITRUMSCAN ?? apiKey
      }`,
  },
  fantom: {
    label: "Fantom Mainnet",
    url: "https://ftmscan.com",
    apiKey: process.env.APIKEY_FTMSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api.ftmscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_FTMSCAN ?? apiKey
      }`,
  },
  fantomTest: {
    label: "Fantom Testnet",
    url: "https://testnet.ftmscan.com",
    apiKey: process.env.APIKEY_FTMSCAN as string,
    endpoint: (contractAddress: string, apiKey?: string) =>
      `https://api-testnet.ftmscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${
        process.env.APIKEY_FTMSCAN ?? apiKey
      }`,
  },
};
