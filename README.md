# Etherscan Contract Downloader

Download source code of verified contracts from Etherscan.

## Installation

```bash
npm i -g etherscan-contract-downloader
```

## Usage

```bash
Usage: etherscan-contract-downloader [options] <networkName> <contractAddress>

Arguments:
  networkName      The name of networks: (ethmain, rinkeby, ropsten, kovan, goerli, polygon, polygonTest, bsc, bscTest, arbitrumOne, arbitrumNova, arbitrumGoerli, fantom, fantomTest)
  contractAddress  Verified contract address to download source code

Options:
  -d, --dir <dir>  Directory to save source code
```

## Example

```bash
# uniswap v3 factory
etherscan-contract-downloader ethmain 0x1F98431c8aD98523631AE4a59f267346ea31F984 --dir ~/uniswap-v3

# uniswap v3 universal router
etherscan-contract-downloader ethmain 0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD --dir ~/uniswap-v3
```
