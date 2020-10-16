import { useContext } from 'react'
import { Context as TokensContext } from '../contexts/Tokens'

const useTokens = () => {
  return useContext(TokensContext)
}

export default useTokens
