class User {
  constructor(dni) {
    this.dni = dni;
    this.registered = false;
  }

  isRegistered() {
    return this.registered;
  }

  register() {
    this.registered = true;
  }
}

module.exports.User = User;
