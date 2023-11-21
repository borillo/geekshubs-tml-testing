class UserRepository {
  constructor() {}

  async persist(user) {
    throw new Error("Bomb!!");
    return Promise.resolve(user);
  }

  async findAll() {
    return Promise.resolve([]);
  }
}

module.exports.UserRepository = UserRepository;
