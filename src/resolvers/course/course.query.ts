import { Context } from "../../interface/ctx";
import { validate } from "../../middleware/access";

export const CoursesMethods = {
  getCourses: (parent: any, args: any, ctx: Context, info: any) => {
    const user = validate(ctx.request)
    return ctx.db.courses;
  },
};
