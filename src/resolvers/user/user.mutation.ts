import { IUser } from "../../interface/user";
import { Context } from "../../interface/ctx";
import { v4 as uuid } from "uuid";

export const userMutations = {
  createUser: (
    parent: any,
    args: { data: IUser },
    ctx: Context,
    info: any
  ): IUser => {
    args.data.id = uuid();
    ctx.users.push(args.data);
    return args.data;
  },
};
