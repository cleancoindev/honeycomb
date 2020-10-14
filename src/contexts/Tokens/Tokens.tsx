import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import Context from './context'
import { Token, TokenList } from './types'

const Tokens: React.FC = ({ children }) => {
  const [tokens, setTokens] = useState<Array<Token>>([])

  useEffect(() => {
    async function fetchTokens () {
      const response = await fetch('https://tokens.honeyswap.org')
      const tokenList: TokenList = await response.json()

      setTokens(tokenList.tokens)
    }

    fetchTokens()
  }, [])

  return (
    <Context.Provider value={{
      tokens
    }}>
      {children}
    </Context.Provider>
  )
}

export default Tokens
