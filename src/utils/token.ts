import jsonwebtoken from "jsonwebtoken";
import { IUser } from "../interface/user";

export const generate = (data: IUser): String => {
  return jsonwebtoken.sign(data, "cmcx100pre");
};

export const verify = (token: string): IUser => {
  const payload = jsonwebtoken.verify(token, "cmcx100pre");
  const user: IUser = {
    age: payload.age,
    id: payload.id,
    name: payload.name,
  };
  return user;
};
