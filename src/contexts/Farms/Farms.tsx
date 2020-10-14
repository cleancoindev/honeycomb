import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { useQuery } from '@apollo/client'
import { honeycombClient } from '../../apollo/clients'
import { GET_POOLS } from '../../apollo/queries'

import useSushi from '../../hooks/useSushi'
import useTokens from '../../hooks/useTokens'

import { getFarms } from '../../sushi/utils'

import Context from './context'

const Farms: React.FC = ({ children }) => {
  const [unharvested, _] = useState(0)
  const [farms, setFarms] = useState([])
  const { data, loading } = useQuery(GET_POOLS, {
    client: honeycombClient
  })
  const tokens = useTokens()

  const { status } = useWallet()
  const sushi = useSushi()

  useEffect(() => {
    async function fetchFarms () {
      for (const pool of data.pools) {
        const token0Exists = !!tokens
          .find(({ address }) => address.toLowerCase() === pool.pair.token0.id.toLowerCase())
        const token1Exists = !!tokens
          .find(({ address }) => address.toLowerCase() === pool.pair.token1.id.toLowerCase())
        await sushi.contracts.addPool({
          poolAddress: pool.id,
          lpAddress: pool.pair.id,
          token0Symbol: pool.pair.token0.symbol,
          token1Symbol: pool.pair.token1.symbol,
          earnTokenAddress: pool.rewardToken.id,
          earnToken: pool.rewardToken.symbol,
          rewards: new BigNumber(pool.rewards),
          staked: new BigNumber(pool.staked),
          verified: token0Exists && token1Exists
        })
      }

      setFarms(getFarms(sushi))
    }

    if (status === 'connected' && !loading && tokens.length) {
      fetchFarms()
    }
  }, [status, sushi, loading, data, tokens])

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
