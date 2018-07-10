import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context } from '../../utils'

export const createTweet = {
    async createTweet(parent, args, ctx: Context, info) {
        const tweet = await ctx.db.mutation.createTweet({
            data: {
              text: args.text,
              author: {
                connect: {
                  email: args.author // make sure you use your created user's email!
                }
              }
            }
        }, info);
        return tweet;
    }
}