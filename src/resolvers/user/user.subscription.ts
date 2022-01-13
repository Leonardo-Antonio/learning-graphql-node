import { Context } from "../../interface/ctx";

export const userSubscription = {
  message: {
    subscribe: (parent: any, args: any, ctx: Context, info: any) => {
      const msj = "hola";

      setInterval(() => {
        ctx.pubsub.publish("message", {
          'message': msj,
        });
      }, 2000);

      return ctx.pubsub.asyncIterator("message");
    },
  },
};
