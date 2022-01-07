import { Context } from "../../interface/ctx";

export const CoursesMethods = {
  getCourses: (parent: any, args: any, ctx: Context, info: any) => {
    return ctx.courses;
  },
};
