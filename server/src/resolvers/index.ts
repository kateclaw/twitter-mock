// import { Query } from './Query'
import { extractFragmentReplacements } from "prisma-binding";
import Query from "./Query";
import { auth } from "./Mutation/auth";
import createTweet from "./Mutation/createTweet";
// import { createTweet } from "./Mutation/createTweet";
import { AuthPayload } from "./AuthPayload";

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...createTweet
  },
  AuthPayload
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
