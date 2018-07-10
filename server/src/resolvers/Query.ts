import { getUserId, Context } from "../utils";

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },

  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.tweets(
      {
        orderBy: args.orderBy
      },
      info
    );
  },

  tweet(parent, args, ctx: Context, info) {
    return ctx.db.query.tweet({ where: { id: args.id } }, info);
  }
};
