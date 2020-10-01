import { useCallback } from 'react'
import { Contract } from 'web3-eth-contract'

import { useWallet } from 'use-wallet'

import useSushi from './useSushi'
import { createPool, getFactoryContract } from '../sushi/utils'

const useCreatePool = () => {
  const { account } = useWallet()
  const sushi = useSushi()
  const factoryContract = getFactoryContract(sushi)

  const onCreate = useCallback(async (pairAddress: string) => {
    const txHash = await createPool(factoryContract, account, pairAddress)
    console.log(txHash)
    return txHash
  }, [account, factoryContract])

  return { onCreate }
}

export default useCreatePool
