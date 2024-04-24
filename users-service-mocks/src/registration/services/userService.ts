import { User } from "../model/user";
import { UserRepository } from "../repositories/userRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async completeRegistration(user: User) {
    user.register();
    await this.userRepository.persist(user);

    return user;
  }

  async retrieveUnregisteredUsers() {
    const users = await this.userRepository.findAll();

    return users.filter((user) => user.isRegistered());
  }
}
