import { extendType, nonNull, list } from 'nexus'

export default extendType({
  type: 'Query',
  definition(t) {
    t.field('drafts', {
      type: nonNull(list('Post')),
      resolve() {
        return [{ id: '1', title: 'Nexus', body: '...', published: false }]
      }
    })
  }
})
