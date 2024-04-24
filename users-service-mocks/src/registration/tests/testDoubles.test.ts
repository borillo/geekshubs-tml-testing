import { vi, describe, test, expect, beforeEach } from "vitest";

import { User } from "../model/user";
import { UserRepository } from "../repositories/userRepository";
import { UserService } from "../services/userService";

import { withRegisteredUser, withRegularUser } from "./user.mother";

vi.mock("../repositories/userRepository", () => {
  const UserRepository = vi.fn();
  UserRepository.prototype.persist = vi
    .fn()
    .mockImplementationOnce((user: User) => Promise.resolve(user));
  UserRepository.prototype.findAll = vi
    .fn()
    .mockImplementationOnce(
      (): Promise<User[]> =>
        Promise.resolve([withRegisteredUser(ANY_DNI), withRegularUser(ANY_DNI)])
    );

  return { UserRepository };
});

beforeEach(() => {
  vi.clearAllMocks();
});

const ANY_DNI = "ANY_DNI";

describe("Test doubles", () => {
  describe("Mocks", () => {
    test("a mock can verify if an interaction has happend", async () => {
      const userRepositoryMock = new UserRepository();
      const user = withRegularUser(ANY_DNI);

      const userService = new UserService(userRepositoryMock);
      await userService.completeRegistration(user);

      expect(userRepositoryMock.persist).toHaveBeenCalledTimes(1);
      expect(userRepositoryMock.persist).toHaveBeenCalledWith({
        dni: expect.any(String),
        registered: true,
      });
    });
  });

  describe("Stubs", () => {
    test("an stub can generate predefined data responses", async () => {
      const userRepositoryStub = new UserRepository();

      const userService = new UserService(userRepositoryStub);
      const users = await userService.retrieveUnregisteredUsers();

      expect(users).toHaveLength(1);
    });
  });
});
