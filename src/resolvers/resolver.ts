import { userQuery } from "./user/user.query";
import { userMutations } from "./user/user.mutation";

import { CoursesMethods } from "./course/course.query";
import { Course } from "./course/course.root";

export const resolvers = {
  Query: {
    ...userQuery,
    ...CoursesMethods,
  },
  Course,

  Mutation: {
    ...userMutations,
  },
};
