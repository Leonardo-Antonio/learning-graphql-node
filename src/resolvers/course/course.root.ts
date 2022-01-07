import { Context } from "../../interface/ctx";
import { IUser } from "../../interface/user";

export const Course = {
  created_at: (
    parent: { created_at: String },
    args: any,
    ctx: Context,
    info: any
  ) => {
    const users: Array<IUser> | null = ctx.users.filter(
      (item) => item.id === parent.created_at
    );
    if (users == null)
      throw new Error("el usuario que creo este curso ya no existe");
    return users[0];
  },
};
