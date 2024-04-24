import { User } from "../model/user";

export class UserRepository {
  constructor() {}

  async persist(user: User) {
    throw new Error("Bomb!!");
    return Promise.resolve(user);
  }

  async findAll(): Promise<User[]> {
    return Promise.resolve([]);
  }
}
