class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async completeRegistration(user) {
    user.register();
    await this.userRepository.persist(user);

    return user;
  }

  async retrieveUnregisteredUsers() {
    const users = await this.userRepository.findAll();

    return users.filter((user) => user.isRegistered());
  }
}

module.exports.UserService = UserService;
