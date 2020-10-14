import { useContext } from 'react'
import { Context as TokensContext } from '../contexts/Tokens'

const useTokens = () => {
  const { tokens } = useContext(TokensContext)
  return tokens
}

export default useTokens
