import { Context } from "../../interface/ctx";

export const notification = {
  user: {
    subscribe: (parent: any, args: any, ctx: Context, info: any) => {
      return ctx.pubsub.asyncIterator("user");
    },
  },
};
