import {User} from "@/shared/models/user.model";

export class UserController {
  async getAll(): Promise<User[]> {
    const url = "http://evernote.s1810456025.student.kwmhgb.at/api/users/all";
    return await fetch(url).then((r) => r.json());
  }
}