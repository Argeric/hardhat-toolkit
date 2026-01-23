import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import hardhatVerify from "@nomicfoundation/hardhat-verify";
import { configVariable, defineConfig } from "hardhat/config";

// npm config set proxy http://127.0.0.1:789
// npm config set https-proxy http://127.0.0.1:7890

import dotenv from "dotenv";
dotenv.config();
const { DEPLOYER_KEY, ETHERSCAN_API_KEY } = process.env;

// 0x12cAef034a8D1548a81fd7d677640d1070a1Ec17
const DEFAULT_DEPLOYER = "36b9e861b63d3509c88b7817275a30d22d62c8cd8fa6486ddee35ef0d8e0495f";
const accounts = [DEPLOYER_KEY ? DEPLOYER_KEY : DEFAULT_DEPLOYER];

export default defineConfig({
  plugins: [
    hardhatToolboxMochaEthersPlugin,
    hardhatVerify,
  ],
  solidity: {
    profiles: {
      default: {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      production: {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts,
    },
    hoodi: {
      type: "http",
      chainType: "l1",
      url: "https://0xrpc.io/hoodi",
      accounts,
    },
    zgTestnet: {
      type: "http",
      chainType: "l1",
      url: "https://evmrpc-testnet.0g.ai",
      accounts,
      verify: {
        etherscan: {
          apiUrl: 'https://chainscan-test.0g.ai/open'
        },
      },
    },
  },
  chainDescriptors: {
    16602: {
      name: "zgTestnet",
      blockExplorers: {
        etherscan: {
          name: "zg Testnet Explorer",
          url: "https://chainscan-test.0g.ai/",
          apiUrl: "https://chainscan-test.0g.ai/open/api",
        },
      },
    }
  },
  verify: {
    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
    },
  },
});
