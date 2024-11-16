import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  { payable: true, type: 'fallback', stateMutability: 'payable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PlantyFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const plantyFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'initialSpotPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'delta',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPlantyPool.CreatePoolInput',
        type: 'tuple',
        components: [
          { name: 'assetToken', internalType: 'address', type: 'address' },
          {
            name: 'assetInitialSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'usdcToken', internalType: 'address', type: 'address' },
          {
            name: 'usdcInitialSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'initialSpotPrice',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'delta', internalType: 'uint256', type: 'uint256' },
          {
            name: 'protocolFeeMultiplier',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'tradeFeeMultiplier',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'publicSaleDuration',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'publicSalePrice', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'createPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPools',
    outputs: [
      { name: '', internalType: 'contract PlantyPool[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPoolsInfo',
    outputs: [
      { name: 'poolAddresses', internalType: 'address[]', type: 'address[]' },
      { name: 'spotPrices', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'deltas', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: 'protocolFeeMultipliers',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: 'tradeFeeMultipliers',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: 'reserveAssets', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'reserveUSDCs', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'poolAddress', internalType: 'address', type: 'address' }],
    name: 'getPoolInfo',
    outputs: [
      { name: 'spotPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'delta', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolFeeMultiplier',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'tradeFeeMultiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveAsset', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveUSDC', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'pools',
    outputs: [
      { name: '', internalType: 'contract PlantyPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const

export const plantyFactoryAddress =
  '0xB4507601BbEaEA019Db64f31028329F24844F921' as const

export const plantyFactoryConfig = {
  address: plantyFactoryAddress,
  abi: plantyFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PlantyPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const plantyPoolAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'params',
        internalType: 'struct IPlantyPool.CreatePoolInput',
        type: 'tuple',
        components: [
          { name: 'assetToken', internalType: 'address', type: 'address' },
          {
            name: 'assetInitialSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'usdcToken', internalType: 'address', type: 'address' },
          {
            name: 'usdcInitialSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'initialSpotPrice',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'delta', internalType: 'uint256', type: 'uint256' },
          {
            name: 'protocolFeeMultiplier',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'tradeFeeMultiplier',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'publicSaleDuration',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'publicSalePrice', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'assetAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'usdcAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LiquidityAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'endTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'price',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PublicSaleConfigured',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'assetAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'usdcAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PublicSalePurchase',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'assetAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'usdcAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PublicSaleSell',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'assetAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'usdcAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'isBuying', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'Swapped',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assetAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'usdcAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'assetToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plantyTokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'buyAsset',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'numItems', internalType: 'uint256', type: 'uint256' }],
    name: 'buyAssetDuringPublicSale',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'configurePublicSale',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plantyTokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getBuyInfo',
    outputs: [
      { name: 'inputValue', internalType: 'uint256', type: 'uint256' },
      { name: 'newSpotPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'tradeFee', internalType: 'uint256', type: 'uint256' },
      { name: 'protocolFee', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'usdcAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'getSellInfo',
    outputs: [
      { name: 'outputValue', internalType: 'uint256', type: 'uint256' },
      { name: 'newSpotPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'tradeFee', internalType: 'uint256', type: 'uint256' },
      { name: 'protocolFee', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isPublicSaleActive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeMultiplier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'publicSaleEndTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'publicSalePrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserveAsset',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserveUSDC',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plantyTokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'sellAsset',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'numItems', internalType: 'uint256', type: 'uint256' }],
    name: 'sellAssetDuringPublicSale',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'spotPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tradeFeeMultiplier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'usdcToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
] as const

export const plantyPoolAddress =
  '0x8a17fe5FEdDD013A542E6C1364278fe277347Fbd' as const

export const plantyPoolConfig = {
  address: plantyPoolAddress,
  abi: plantyPoolAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PlantyToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const plantyTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'plantManager', internalType: 'address', type: 'address' },
      { name: 'plantManagerSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'adminSupply', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

export const plantyTokenAddress =
  '0x5B7188dCE6c8f41B2712D37003B9Fd7E658180F7' as const

export const plantyTokenConfig = {
  address: plantyTokenAddress,
  abi: plantyTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const readPlantyFactory = /*#__PURE__*/ createReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"admin"`
 */
export const readPlantyFactoryAdmin = /*#__PURE__*/ createReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"getAllPools"`
 */
export const readPlantyFactoryGetAllPools = /*#__PURE__*/ createReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
  functionName: 'getAllPools',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"getAllPoolsInfo"`
 */
export const readPlantyFactoryGetAllPoolsInfo =
  /*#__PURE__*/ createReadContract({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    functionName: 'getAllPoolsInfo',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"getPoolInfo"`
 */
export const readPlantyFactoryGetPoolInfo = /*#__PURE__*/ createReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
  functionName: 'getPoolInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"pools"`
 */
export const readPlantyFactoryPools = /*#__PURE__*/ createReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
  functionName: 'pools',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const writePlantyFactory = /*#__PURE__*/ createWriteContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const writePlantyFactoryCreatePool = /*#__PURE__*/ createWriteContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
  functionName: 'createPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const simulatePlantyFactory = /*#__PURE__*/ createSimulateContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const simulatePlantyFactoryCreatePool =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const watchPlantyFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyFactoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const watchPlantyFactoryPoolCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const readPlantyPool = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"assetToken"`
 */
export const readPlantyPoolAssetToken = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'assetToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"delta"`
 */
export const readPlantyPoolDelta = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'delta',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"getBuyInfo"`
 */
export const readPlantyPoolGetBuyInfo = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'getBuyInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"getSellInfo"`
 */
export const readPlantyPoolGetSellInfo = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'getSellInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"isPublicSaleActive"`
 */
export const readPlantyPoolIsPublicSaleActive =
  /*#__PURE__*/ createReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'isPublicSaleActive',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"owner"`
 */
export const readPlantyPoolOwner = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"protocolFeeMultiplier"`
 */
export const readPlantyPoolProtocolFeeMultiplier =
  /*#__PURE__*/ createReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'protocolFeeMultiplier',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"publicSaleEndTime"`
 */
export const readPlantyPoolPublicSaleEndTime = /*#__PURE__*/ createReadContract(
  {
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'publicSaleEndTime',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"publicSalePrice"`
 */
export const readPlantyPoolPublicSalePrice = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'publicSalePrice',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"reserveAsset"`
 */
export const readPlantyPoolReserveAsset = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'reserveAsset',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"reserveUSDC"`
 */
export const readPlantyPoolReserveUsdc = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'reserveUSDC',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"spotPrice"`
 */
export const readPlantyPoolSpotPrice = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'spotPrice',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"tradeFeeMultiplier"`
 */
export const readPlantyPoolTradeFeeMultiplier =
  /*#__PURE__*/ createReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'tradeFeeMultiplier',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"usdcToken"`
 */
export const readPlantyPoolUsdcToken = /*#__PURE__*/ createReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'usdcToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const writePlantyPool = /*#__PURE__*/ createWriteContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const writePlantyPoolAddLiquidity = /*#__PURE__*/ createWriteContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'addLiquidity',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAsset"`
 */
export const writePlantyPoolBuyAsset = /*#__PURE__*/ createWriteContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'buyAsset',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAssetDuringPublicSale"`
 */
export const writePlantyPoolBuyAssetDuringPublicSale =
  /*#__PURE__*/ createWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'buyAssetDuringPublicSale',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"configurePublicSale"`
 */
export const writePlantyPoolConfigurePublicSale =
  /*#__PURE__*/ createWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'configurePublicSale',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writePlantyPoolRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAsset"`
 */
export const writePlantyPoolSellAsset = /*#__PURE__*/ createWriteContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'sellAsset',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAssetDuringPublicSale"`
 */
export const writePlantyPoolSellAssetDuringPublicSale =
  /*#__PURE__*/ createWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'sellAssetDuringPublicSale',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writePlantyPoolTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const simulatePlantyPool = /*#__PURE__*/ createSimulateContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const simulatePlantyPoolAddLiquidity =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAsset"`
 */
export const simulatePlantyPoolBuyAsset = /*#__PURE__*/ createSimulateContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'buyAsset',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAssetDuringPublicSale"`
 */
export const simulatePlantyPoolBuyAssetDuringPublicSale =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'buyAssetDuringPublicSale',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"configurePublicSale"`
 */
export const simulatePlantyPoolConfigurePublicSale =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'configurePublicSale',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulatePlantyPoolRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAsset"`
 */
export const simulatePlantyPoolSellAsset = /*#__PURE__*/ createSimulateContract(
  { abi: plantyPoolAbi, address: plantyPoolAddress, functionName: 'sellAsset' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAssetDuringPublicSale"`
 */
export const simulatePlantyPoolSellAssetDuringPublicSale =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'sellAssetDuringPublicSale',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulatePlantyPoolTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const watchPlantyPoolEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"LiquidityAdded"`
 */
export const watchPlantyPoolLiquidityAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'LiquidityAdded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchPlantyPoolOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"PublicSaleConfigured"`
 */
export const watchPlantyPoolPublicSaleConfiguredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'PublicSaleConfigured',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"PublicSalePurchase"`
 */
export const watchPlantyPoolPublicSalePurchaseEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'PublicSalePurchase',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"PublicSaleSell"`
 */
export const watchPlantyPoolPublicSaleSellEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'PublicSaleSell',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"Swapped"`
 */
export const watchPlantyPoolSwappedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'Swapped',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const readPlantyToken = /*#__PURE__*/ createReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const readPlantyTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readPlantyTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const readPlantyTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"name"`
 */
export const readPlantyTokenName = /*#__PURE__*/ createReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const readPlantyTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readPlantyTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const writePlantyToken = /*#__PURE__*/ createWriteContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"approve"`
 */
export const writePlantyTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const writePlantyTokenDecreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const writePlantyTokenIncreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const writePlantyTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writePlantyTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const simulatePlantyToken = /*#__PURE__*/ createSimulateContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"approve"`
 */
export const simulatePlantyTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const simulatePlantyTokenDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const simulatePlantyTokenIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const simulatePlantyTokenTransfer = /*#__PURE__*/ createSimulateContract(
  {
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'transfer',
  },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulatePlantyTokenTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const watchPlantyTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const watchPlantyTokenApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link plantyTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchPlantyTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    eventName: 'Transfer',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const useReadPlantyFactory = /*#__PURE__*/ createUseReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"admin"`
 */
export const useReadPlantyFactoryAdmin = /*#__PURE__*/ createUseReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"getAllPools"`
 */
export const useReadPlantyFactoryGetAllPools =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    functionName: 'getAllPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"getAllPoolsInfo"`
 */
export const useReadPlantyFactoryGetAllPoolsInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    functionName: 'getAllPoolsInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"getPoolInfo"`
 */
export const useReadPlantyFactoryGetPoolInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    functionName: 'getPoolInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"pools"`
 */
export const useReadPlantyFactoryPools = /*#__PURE__*/ createUseReadContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
  functionName: 'pools',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const useWritePlantyFactory = /*#__PURE__*/ createUseWriteContract({
  abi: plantyFactoryAbi,
  address: plantyFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useWritePlantyFactoryCreatePool =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const useSimulatePlantyFactory = /*#__PURE__*/ createUseSimulateContract(
  { abi: plantyFactoryAbi, address: plantyFactoryAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulatePlantyFactoryCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyFactoryAbi}__
 */
export const useWatchPlantyFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyFactoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchPlantyFactoryPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyFactoryAbi,
    address: plantyFactoryAddress,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const useReadPlantyPool = /*#__PURE__*/ createUseReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"assetToken"`
 */
export const useReadPlantyPoolAssetToken = /*#__PURE__*/ createUseReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'assetToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"delta"`
 */
export const useReadPlantyPoolDelta = /*#__PURE__*/ createUseReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'delta',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"getBuyInfo"`
 */
export const useReadPlantyPoolGetBuyInfo = /*#__PURE__*/ createUseReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'getBuyInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"getSellInfo"`
 */
export const useReadPlantyPoolGetSellInfo = /*#__PURE__*/ createUseReadContract(
  {
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'getSellInfo',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"isPublicSaleActive"`
 */
export const useReadPlantyPoolIsPublicSaleActive =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'isPublicSaleActive',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPlantyPoolOwner = /*#__PURE__*/ createUseReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"protocolFeeMultiplier"`
 */
export const useReadPlantyPoolProtocolFeeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'protocolFeeMultiplier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"publicSaleEndTime"`
 */
export const useReadPlantyPoolPublicSaleEndTime =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'publicSaleEndTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"publicSalePrice"`
 */
export const useReadPlantyPoolPublicSalePrice =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'publicSalePrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"reserveAsset"`
 */
export const useReadPlantyPoolReserveAsset =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'reserveAsset',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"reserveUSDC"`
 */
export const useReadPlantyPoolReserveUsdc = /*#__PURE__*/ createUseReadContract(
  {
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'reserveUSDC',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"spotPrice"`
 */
export const useReadPlantyPoolSpotPrice = /*#__PURE__*/ createUseReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'spotPrice',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"tradeFeeMultiplier"`
 */
export const useReadPlantyPoolTradeFeeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'tradeFeeMultiplier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"usdcToken"`
 */
export const useReadPlantyPoolUsdcToken = /*#__PURE__*/ createUseReadContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'usdcToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const useWritePlantyPool = /*#__PURE__*/ createUseWriteContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useWritePlantyPoolAddLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAsset"`
 */
export const useWritePlantyPoolBuyAsset = /*#__PURE__*/ createUseWriteContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
  functionName: 'buyAsset',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAssetDuringPublicSale"`
 */
export const useWritePlantyPoolBuyAssetDuringPublicSale =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'buyAssetDuringPublicSale',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"configurePublicSale"`
 */
export const useWritePlantyPoolConfigurePublicSale =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'configurePublicSale',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePlantyPoolRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAsset"`
 */
export const useWritePlantyPoolSellAsset = /*#__PURE__*/ createUseWriteContract(
  { abi: plantyPoolAbi, address: plantyPoolAddress, functionName: 'sellAsset' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAssetDuringPublicSale"`
 */
export const useWritePlantyPoolSellAssetDuringPublicSale =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'sellAssetDuringPublicSale',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePlantyPoolTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const useSimulatePlantyPool = /*#__PURE__*/ createUseSimulateContract({
  abi: plantyPoolAbi,
  address: plantyPoolAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useSimulatePlantyPoolAddLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAsset"`
 */
export const useSimulatePlantyPoolBuyAsset =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'buyAsset',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"buyAssetDuringPublicSale"`
 */
export const useSimulatePlantyPoolBuyAssetDuringPublicSale =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'buyAssetDuringPublicSale',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"configurePublicSale"`
 */
export const useSimulatePlantyPoolConfigurePublicSale =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'configurePublicSale',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePlantyPoolRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAsset"`
 */
export const useSimulatePlantyPoolSellAsset =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'sellAsset',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"sellAssetDuringPublicSale"`
 */
export const useSimulatePlantyPoolSellAssetDuringPublicSale =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'sellAssetDuringPublicSale',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyPoolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePlantyPoolTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__
 */
export const useWatchPlantyPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"LiquidityAdded"`
 */
export const useWatchPlantyPoolLiquidityAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'LiquidityAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPlantyPoolOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"PublicSaleConfigured"`
 */
export const useWatchPlantyPoolPublicSaleConfiguredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'PublicSaleConfigured',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"PublicSalePurchase"`
 */
export const useWatchPlantyPoolPublicSalePurchaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'PublicSalePurchase',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"PublicSaleSell"`
 */
export const useWatchPlantyPoolPublicSaleSellEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'PublicSaleSell',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyPoolAbi}__ and `eventName` set to `"Swapped"`
 */
export const useWatchPlantyPoolSwappedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyPoolAbi,
    address: plantyPoolAddress,
    eventName: 'Swapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const useReadPlantyToken = /*#__PURE__*/ createUseReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadPlantyTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPlantyTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadPlantyTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadPlantyTokenName = /*#__PURE__*/ createUseReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPlantyTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadPlantyTokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const useWritePlantyToken = /*#__PURE__*/ createUseWriteContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePlantyTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWritePlantyTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWritePlantyTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWritePlantyTokenTransfer = /*#__PURE__*/ createUseWriteContract(
  {
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'transfer',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePlantyTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const useSimulatePlantyToken = /*#__PURE__*/ createUseSimulateContract({
  abi: plantyTokenAbi,
  address: plantyTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePlantyTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulatePlantyTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulatePlantyTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulatePlantyTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plantyTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePlantyTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyTokenAbi}__
 */
export const useWatchPlantyTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPlantyTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plantyTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPlantyTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plantyTokenAbi,
    address: plantyTokenAddress,
    eventName: 'Transfer',
  })
