import { ApolloServer } from 'apollo-server'
import { schema } from './graphql/schema.js'
export const server = new ApolloServer({ schema })
