import { IUser } from "../interface/user";
import { ICourse } from "../interface/course";

export interface Context {
  users: Array<IUser>;
  courses: Array<ICourse>;
}
