import { Context } from "../../interface/ctx";
import { IUser } from "../../interface/user";

export const userQuery = {
  getUsers: (parent: any, args: any, ctx: Context, info: any) => {
    return ctx.db.users;
  },

  getUserById: (parent: any, args: { id: String }, ctx: Context, info: any) => {
    const users: Array<IUser> = ctx.db.users.filter((item) => item.id === args.id);

    const user: IUser | null = users.length != 0 ? users[0] : null;

    if (user == null) throw new Error("el id no existe");

    return user;
  },
};
