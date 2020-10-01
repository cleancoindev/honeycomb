import { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useQuery } from '@apollo/client'
import { honeyswapClient } from '../apollo/clients'
import { GET_TOKEN_PRICE } from '../apollo/queries'

const useTokenPrice = (tokenAddress: string = '') => {
  const [price, setPrice] = useState(new BigNumber(0))
  const { data, loading } = useQuery(GET_TOKEN_PRICE, {
    client: honeyswapClient,
    variables: {
      tokenAddress: tokenAddress.toLowerCase()
    }
  })
  useEffect(() => {
    if (!loading) {
      setPrice(new BigNumber(
        data?.token?.derivedETH || 0
      ))
    }
  }, [data, loading])

  return price
}

export default useTokenPrice
