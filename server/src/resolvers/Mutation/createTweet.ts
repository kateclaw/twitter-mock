import { Context, getUserId } from "../../utils";

// export const createTweet = {
//   async createTweet(parent, args, ctx: Context, info) {
//     const tweet = await ctx.db.mutation.createTweet(
//       {
//         data: {
//           text: args.text,
//           author: {
//             connect: {
//               email: args.author // make sure you use your created user's email!
//             }
//           }
//         }
//       },
//       info
//     );
//     return tweet;
//   }
// };

export default {
  createTweet: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx);
    return await ctx.db.mutation.createTweet(
      {
        data: {
          text: args.text,
          author: {
            connect: {
              id: id
            }
          }
        }
      },
      info
    );
  }
};
