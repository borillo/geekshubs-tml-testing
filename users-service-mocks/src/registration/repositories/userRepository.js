class UserRepository {
  constructor() {}

  async persist(user) {
    throw new Error("Bomb!!");
    return Promise.resolved(user);
  }

  async findAll() {
    return Promise.resolved([]);
  }
}

module.exports.UserRepository = UserRepository;
