import { userQuery } from "./user/user.query";
import { userMutations } from "./user/user.mutation";
import { userSubscription } from "./user/user.subscription";

import { CoursesMethods } from "./course/course.query";
import { Course } from "./course/course.root";

import { notification } from "./notification/notification.subcription";

export const resolvers = {
  Query: {
    ...userQuery,
    ...CoursesMethods,
  },
  Course,

  Mutation: {
    ...userMutations,
  },

  Subscription: { ...userSubscription, ...notification },
};
