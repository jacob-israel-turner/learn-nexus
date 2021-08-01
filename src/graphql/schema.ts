import { makeSchema } from 'nexus'
import { join } from 'path'
import * as Query from './queries'
import * as types from './types'

export const schema = makeSchema({
  types: {
    Query,
    ...types
  },
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', 'schema.graphql'),
  }
})
