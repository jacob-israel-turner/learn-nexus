import { makeSchema } from 'nexus'
import { resolve } from 'path'
import * as Query from './queries/index.js'
import * as types from './types/index.js'

export const schema = makeSchema({
  types: {
    Query,
    ...types
  },
  outputs: {
    typegen: resolve('../nexus-typegen.ts'),
    schema: resolve('../schema.graphql'),
  }
})
