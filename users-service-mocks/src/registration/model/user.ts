export class User {
  private dni: string;
  private registered: boolean;

  constructor(dni: string) {
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
