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
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
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
    100: '0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9',
  },
  weth: {
    100: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  },
}

/*
 * UNI-V2 LP Address on xDai
 * ==========================================
 * HNY/WXDAI  0x4505b262dc053998c10685dc5f9098af8ae5c8ad
 * HNY/STAKE  0x298c7326a6e4a6108b88520f285c7dc89403347d
 * HNY/WETH   0x89e2f342b411032a580fefa17f96da6a5bef4112
*/

export const supportedPools = [
  {
    lpAddresses: {
      100: '0x4505b262dc053998c10685dc5f9098af8ae5c8ad',
    },
    tokenAddresses: {
      100: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    },
    poolAddresses: {
      100: '0xC97E1C3755e20406EE3d5790377665B83e4e613d'//'0x8520Fc4C282342f8e746b881b9B60c14F96A0fAB'
    },
    name: 'Dai Daisies',
    symbol: 'HNY-WXDAI UNI-V2 LP',
    tokenSymbol: 'WXDAI',
    icon: <img src={creamFlower} />,
  },
  {
    lpAddresses: {
      100: '0x298c7326a6e4a6108b88520f285c7dc89403347d',
    },
    tokenAddresses: {
      100: '0xb7d311e2eb55f2f68a9440da38e7989210b9a05e',
    },
    poolAddresses: {
      100: '0xA6c55971F21cc1C35Ea617f47980D669a0C09cf3'
    },
    name: 'STAKE Sunflower',
    symbol: 'HNY-STAKE UNI-V2 LP',
    tokenSymbol: 'STAKE',
    icon: <img src={yellowFlower} />,
  },
  {
    lpAddresses: {
      100: '0x89e2f342b411032a580fefa17f96da6a5bef4112',
    },
    tokenAddresses: {
      100: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
    },
    poolAddresses: {
      100: '0x0de3239086dbf7edf17805107cae89b0c1a2db37'
    },
    name: 'Ether Eucalyptus',
    symbol: 'HNY-WETH UNI-V2 LP',
    tokenSymbol: 'WETH',
    icon: <img src={greenFlower} />,
  }
]
