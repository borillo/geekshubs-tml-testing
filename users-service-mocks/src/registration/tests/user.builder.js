const { User } = require("../model/user");

function buildUser(dni) {
  const user = new User(dni);
  return user;
}

function buildRegisteredUser(dni) {
  const user = buildUser(dni);
  user.register();

  return user;
}

module.exports = {
  buildUser,
  buildRegisteredUser,
};
