const request = require("supertest");

const app = require("../app");

describe("API", () => {
  let api;

  beforeAll(() => {
    api = app.listen(3030);
  });

  afterAll(() => {
    api = app.close();
  });

  it("Responds to a GET request at / with a 200 status", () => {});
});
