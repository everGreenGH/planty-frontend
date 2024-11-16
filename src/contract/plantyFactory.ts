export const plantyFactoryABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialSpotPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delta",
        type: "uint256",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "assetToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "assetInitialSupply",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "usdcToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "usdcInitialSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialSpotPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delta",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "protocolFeeMultiplier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradeFeeMultiplier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "publicSaleDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "publicSalePrice",
            type: "uint256",
          },
        ],
        internalType: "struct IPlantyPool.CreatePoolInput",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPools",
    outputs: [
      {
        internalType: "contract PlantyPool[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPoolsInfo",
    outputs: [
      {
        internalType: "address[]",
        name: "poolAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "spotPrices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "deltas",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "protocolFeeMultipliers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "tradeFeeMultipliers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "reserveAssets",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "reserveUSDCs",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
    ],
    name: "getPoolInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "spotPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "delta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFeeMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tradeFeeMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveAsset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveUSDC",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "contract PlantyPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
