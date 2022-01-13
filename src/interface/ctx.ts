import { IUser } from "../interface/user";
import { ICourse } from "../interface/course";
import { PubSub } from "graphql-yoga";
import { ContextParameters } from "graphql-yoga/dist/types";
export interface Context {
  db: Idb;
  request: ContextParameters;
  pubsub: PubSub;
}

interface Idb {
  users: Array<IUser>;
  courses: Array<ICourse>;
}
