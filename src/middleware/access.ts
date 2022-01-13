import { ContextParameters } from "graphql-yoga/dist/types";
import { IUser } from "../interface/user";
import { verify } from "../utils/token";

export const validate = (ctx: ContextParameters): IUser => {
  const header = ctx.request.get("authorization");
  if (header == undefined) {
    throw new Error("El token es obligatorio");
  }

  const user = verify(header);
  return user;
};
