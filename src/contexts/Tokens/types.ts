export interface Token {
  name: string
  address: string
  symbol: string
  decimals: string
  chainId: number
  logoURI: string
}

export interface TokenList {
  tokens: Array<Token>
}

export interface TokensContext {
  tokens: Array<Token>
}
