import BigNumber from 'bignumber.js'
import { Contract } from 'web3-eth-contract'

export interface Farm {
  name: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  poolContract: Contract
  earnToken: string
  earnTokenAddress: string
  icon: React.ReactNode
  id: string
  staked: BigNumber
  rewards: BigNumber
  rewardRate: BigNumber
}

export interface FarmsContext {
  farms: Farm[]
  unharvested: number
}
