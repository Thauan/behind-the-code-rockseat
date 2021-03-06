"use strict";

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/User", (faker, i, data = {}) => {
  return {
    name: faker.name(),
    email: faker.email(),
    password: faker.string(),
    ...data
  };
});

Factory.blueprint("App/Models/Token", (faker, i, data = {}) => {
  return {
    type: data.type || "refreshtoken",
    token: faker.string({ length: 20 }),
    ...data
  };

});
