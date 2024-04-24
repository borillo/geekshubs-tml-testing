const { User } = require("../model/user");

function withRegularUser(dni) {
  const user = new User(dni);
  return user;
}

function withRegisteredUser(dni) {
  const user = withRegularUser(dni);
  user.register();

  return user;
}

module.exports = {
  withRegularUser,
  withRegisteredUser,
};
