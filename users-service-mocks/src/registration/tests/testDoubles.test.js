jest.mock("../repositories/userRepository");

const { UserRepository } = require("../repositories/userRepository");
const { UserService } = require("../services/userService");

const { buildUser, buildRegisteredUser } = require("./user.builder");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Test doubles", () => {
  describe("Mocks", () => {
    test("a mock can verify if an interaction has happend", async () => {
      const userRepository = new UserRepository();
      const user = buildUser("12345678A");

      const userService = new UserService(userRepository);
      await userService.completeRegistration(user);

      expect(userRepository.persist).toHaveBeenCalledTimes(1);
      expect(userRepository.persist).toHaveBeenCalledWith({
        dni: expect.any(String),
        registered: true,
      });
    });
  });

  describe("Stubs", () => {
    test("an stub can generate predefined data responses", async () => {
      const userRepository = new UserRepository();
      userRepository.findAll.mockResolvedValue([
        buildRegisteredUser("1"),
        buildUser("2"),
      ]);

      const userService = new UserService(userRepository);
      const users = await userService.retrieveUnregisteredUsers();

      expect(users).toHaveLength(1);
    });
  });
});
