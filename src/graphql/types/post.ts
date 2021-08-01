import { nonNull, objectType } from 'nexus'

export default objectType({
  name: 'Post',
  definition(t) {
    t.field('id', {
      type: nonNull('ID'),
    })
    t.field('title', {
      type: 'String',
    })
    t.field('body', {
      type: 'String',
    })
    t.field('published', {
      type: nonNull('Boolean'),
      description: 'whether or not the post has been published'
    })
  }
})
