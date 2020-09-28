import { useCallback } from 'react'
import { Contract } from 'web3-eth-contract'

import { useWallet } from 'use-wallet'

import { harvest } from '../sushi/utils'

const useReward = (poolContract: Contract) => {
  const { account } = useWallet()

  const handleReward = useCallback(async () => {
    const txHash = await harvest(poolContract, account)
    console.log(txHash)
    return txHash
  }, [account, poolContract])

  return { onReward: handleReward }
}

export default useReward
