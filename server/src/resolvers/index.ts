import { Query } from './Query'
import { auth } from './Mutation/auth'
import { createTweet } from './Mutation/createTweet'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...createTweet,
  },
  AuthPayload,
}
