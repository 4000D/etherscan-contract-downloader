# Etherscan Contract Downloader

> Inspired by [amimaro/smart-contract-downloader](https://github.com/amimaro/smart-contract-downloader)

Download source codes of verified contracts from Etherscan.

## Installation

```bash
npm i -g etherscan-contract-downloader
```

## Usage

```bash
Usage: etherscan-contract-downloader [options] <networkName> <contractAddresses...>

Arguments:
  networkName             The name of networks: (ethmain, rinkeby, ropsten, kovan, goerli, polygon, polygonTest, bsc, bscTest, arbitrumOne, arbitrumNova, arbitrumGoerli, fantom, fantomTest)
  contractAddresses       Verified contract address to download source code

Options:
  -d, --dir <dir>         Directory to save source code
  -k, --api-key <apiKey>  Etherscan API Key
  -h, --help              display help for command
```

## Example

```bash
# uniswap v3 factory
etherscan-contract-downloader ethmain 0x1F98431c8aD98523631AE4a59f267346ea31F984 --dir ~/uniswap-v3

# uniswap v3 universal router
etherscan-contract-downloader ethmain 0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD --dir ~/uniswap-v3

# gains network contracts
etherscan-contract-downloader arbitrumOne 0x7edDE7e5900633F698EaB0Dbc97DE640fC5dC015 0x30d8C505516Ab7693e2DE491bdceB028d8ae7EbF 0xa3c13A8FBf49679df032d5cE8eFf2e46b3b8f560 0x4899FEfbf0a5C9881F1DffE6D13f758257298121 0x298a695906e16aea0a184a2815a76ead1a0b7522 0xde5750071CacA8db173FC6543D23d0BCACACFEC3 0xA03e32a42C75FDdDc9a39973ddd082F147393154 0x2e44a81701a8355e59b3204b4a9fe8fc43cbe0c3 0xd85E038593d7A098614721EaE955EC2022B9B91B  0x990BA9Edd8a9615A23E4c452E63A80e519A4a23D  0x673cf5AB7b44Caac43C80dE5b99A37Ed5B3E4Cc6  0x1759eD3BB9ecd661ebEcF4264f7677E09206ACE2  0xAA379DD7Ec0bae467490e89bB2055A7e01231b8f  0x04a5e3cf21B0080B72fAcDca634349A56982D497 0xf67Df2a4339eC1591615d94599081Dd037960d4b 0xcFa6ebD475d89dB04cAd5A756fff1cb2BC5bE33c --dir ~/gains-network

```
