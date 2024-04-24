import { User } from "../model/user";

export function withRegularUser(dni: string) {
  const user = new User(dni);
  return user;
}

export function withRegisteredUser(dni: string) {
  const user = withRegularUser(dni);
  user.register();

  return user;
}
