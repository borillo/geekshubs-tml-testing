class UserRepository {
  constructor() {}
  async persist(user) {
    return Promise.resolved(user);
  }
  async findAll() {
    return Promise.resolved([]);
  }
}

module.exports.UserRepository = UserRepository;
