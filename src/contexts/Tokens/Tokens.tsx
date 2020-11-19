import React, { useState, useMemo, useEffect } from 'react'

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
  const tokenAddresses = useMemo(() => {
    return tokens.map(({ address }) => address.toLowerCase())
  }, [tokens])

  return (
    <Context.Provider value={{
      tokens,
      tokenAddresses
    }}>
      {children}
    </Context.Provider>
  )
}

export default Tokens
