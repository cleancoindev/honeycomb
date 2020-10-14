import { createContext } from 'react'
import { TokensContext } from './types'

const context = createContext<TokensContext>({
  tokens: []
})

export default context
