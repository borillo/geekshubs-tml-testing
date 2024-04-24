jest.mock("../repositories/userRepository");

const { User } = require("../model/user");
const { UserRepository } = require("../repositories/userRepository");
const { UserService } = require("../services/userService");

const { withRegisteredUser, withRegularUser } = require("./user.mother");

beforeEach(() => {
  jest.clearAllMocks();
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
      userRepositoryStub.findAll.mockResolvedValue([
        withRegisteredUser(ANY_DNI),
        withRegularUser(ANY_DNI),
      ]);

      const userService = new UserService(userRepositoryStub);
      const users = await userService.retrieveUnregisteredUsers();

      expect(users).toHaveLength(1);
    });
  });
});
