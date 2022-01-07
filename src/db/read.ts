import fs from "fs";
import { IUser } from "../interface/user";
import { ICourse } from "../interface/course";

export class Database {
  public static User(): Array<IUser> {
    const data: Array<IUser> = JSON.parse(
      fs.readFileSync("./src/db/user.json", {
        encoding: "utf8",
        flag: "r",
      })
    );

    return data;
  }

  public static Courses(): Array<ICourse> {
    const data: Array<ICourse> = JSON.parse(
      fs.readFileSync("./src/db/courses.json", {
        encoding: "utf8",
        flag: "r",
      })
    );

    return data;
  }
}
