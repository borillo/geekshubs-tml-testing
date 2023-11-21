import { faker } from "@faker-js/faker";

export default {
  generateTitle() {
    return faker.lorem.sentence();
  },

  generateAuthor() {
    return `${faker.person.firstName()} ${faker.person.lastName()}`;
  },
};
