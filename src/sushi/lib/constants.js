import React from 'react';
import BigNumber from 'bignumber.js/bignumber'
import roseFlower from '../../assets/img/rose_flower.svg'
import blueFlower from '../../assets/img/blue_flower.svg'
import greenFlower from '../../assets/img/green_flower.svg'
import blueGreenFlower from '../../assets/img/blue_green_flower.svg'
import creamFlower from '../../assets/img/cream_flower.svg'
import redYellowFlower from '../../assets/img/red_yellow_flower.svg'
import tealFlower from '../../assets/img/teal_flower.svg'
import yellowFlower from '../../assets/img/yellow_flower.svg'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

/*
UNI-V2 LP Address on xdai for reference
==========================================
HNY/WXDAI  0x4505b262dc053998c10685dc5f9098af8ae5c8ad
HNY/STAKE  0x298c7326a6e4a6108b88520f285c7dc89403347d
HNY/WETH   0x89e2f342b411032a580fefa17f96da6a5bef4112

*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x4505b262dc053998c10685dc5f9098af8ae5c8ad',
    },
    tokenAddresses: {
      1: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    },
    name: 'XDAI Daisies',
    symbol: 'XDAI-HNY UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: <img src={creamFlower} />,
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x89e2f342b411032a580fefa17f96da6a5bef4112',
    },
    tokenAddresses: {
      1: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
    },
    name: 'Ether Eucalyptus',
    symbol: 'HNY-WETH UNI-V2 LP',
    tokenSymbol: 'WETH',
    icon: <img src={greenFlower} />,
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x298c7326a6e4a6108b88520f285c7dc89403347d',
    },
    tokenAddresses: {
      1: '0xb7d311e2eb55f2f68a9440da38e7989210b9a05e',
    },
    name: 'STAKE Sunflower',
    symbol: 'STAKE-HNY UNI-V2 LP',
    tokenSymbol: 'STAKE',
    icon: <img src={yellowFlower} />,
  },
  // {
  //   pid: 3,
  //   lpAddresses: {
  //     1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
  //   },
  //   tokenAddresses: {
  //     1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  //   },
  //   name: 'Maker Marigold',
  //   symbol: 'MKR-HNY UNI-V2 LP',
  //   tokenSymbol: 'MKR',
  //   icon: <img src={redYellowFlower} />,
  // },
  // {
  //   pid: 4,
  //   lpAddresses: {
  //     1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
  //   },
  //   tokenAddresses: {
  //     1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  //   },
  //   name: 'Circle Snapdragon',
  //   symbol: 'USDC-HNY UNI-V2 LP',
  //   tokenSymbol: 'USDC',
  //   icon: <img src={blueFlower} />,
  // },
  // {
  //   pid: 5,
  //   lpAddresses: {
  //     1: '0x88d97d199b9ed37c29d846d00d443de980832a22',
  //   },
  //   tokenAddresses: {
  //     1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
  //   },
  //   name: 'UNI Ursinia',
  //   symbol: 'UNI-HNY UNI-V2 LP',
  //   tokenSymbol: 'UNI',
  //   icon: <img src={blueGreenFlower} />,
  // },
  // {
  //   pid: 6,
  //   lpAddresses: {
  //     1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
  //   },
  //   tokenAddresses: {
  //     1: '0x514910771af9ca656af840dff83e8264ecf986ca',
  //   },
  //   name: 'Aragon Alium',
  //   symbol: 'ANT-HNY UNI-V2 LP',
  //   tokenSymbol: 'ANT',
  //   icon: <img src={roseFlower} />,
  // },
  // {
  //   pid: 7,
  //   lpAddresses: {
  //     1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  //   },
  //   tokenAddresses: {
  //     1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
  //   },
  //   name: 'Sub Snowflake',
  //   symbol: 'SUB-HNY UNI-V2 LP',
  //   tokenSymbol: 'SUB',
  //   icon: <img src={tealFlower} />,
  // },
  // {
  //   pid: 8,
  //   lpAddresses: {
  //     1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  //   },
  //   tokenAddresses: {
  //     1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
  //   },
  //   name: 'Gold Gazania',
  //   symbol: 'PAXG-HNY UNI-V2 LP',
  //   tokenSymbol: 'PAXG',
  //   icon: <img src={yellowFlower} />,
  // },
]
