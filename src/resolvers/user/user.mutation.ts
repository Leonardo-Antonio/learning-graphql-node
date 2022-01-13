import { IUser } from "../../interface/user";
import { Context } from "../../interface/ctx";
import { v4 as uuid } from "uuid";
import { generate } from "../../utils/token";

export const userMutations = {
  createUser: (
    parent: any,
    args: { data: IUser },
    ctx: Context,
    info: any
  ): IUser => {
    args.data.id = uuid();
    ctx.db.users.push(args.data);

    ctx.pubsub.publish("user", {
      user: { mutation: "CREATED", data: args.data },
    });
    return args.data;
  },

  singUp: (parent: any, args: { data: IUser }, ctx: Context, _: any) => {
    args.data.id = uuid();
    ctx.db.users.push(args.data);
    return {
      user: args.data,
      token: generate(args.data),
    };
  },
};
