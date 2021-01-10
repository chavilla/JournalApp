import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe("auth actions tests", () => {
  test("login action", () => {
    const { type, payload } = login("AR632504", "Jesús");

    expect(type).toBe(types.login);
    expect(payload).toEqual({
      uid: expect.any(String),
      name: expect.any(String),
    });
  });

  test("logout action test", () => {
    const { type } = logout();

    expect(type).toBe(types.logout);
  });

  test('should to make the logout', () => {
      
  })
  

});
