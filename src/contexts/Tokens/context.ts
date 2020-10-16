import { createContext } from 'react'
import { TokensContext } from './types'

const context = createContext<TokensContext>({
  tokens: [],
  tokenAddresses: []
})

export default context
