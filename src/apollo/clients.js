import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client'
import {
  HONEYCOMB_GQL_URI,
  HONEYSWAP_GQL_URI
} from '../constants'

export const honeycombClient = new ApolloClient({
  uri: HONEYCOMB_GQL_URI,
  cache: new InMemoryCache()
})

export const honeyswapClient = new ApolloClient({
  uri: HONEYSWAP_GQL_URI,
  cache: new InMemoryCache()
})
