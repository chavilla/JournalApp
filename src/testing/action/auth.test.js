import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from "../../actions/auth";
import { types } from "../../types/types";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { initState } from "../../fixtures/";
import "@testing-library/jest-dom";

// settings
const midlewares = [thunk];
const mockStore = configureStore(midlewares);
let store = mockStore(initState);

describe("auth actions tests", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("login action", () => {
    const { type, payload } = login("AR632504", "Jesús");

    expect(type).toBe(types.login);
    expect(payload).toEqual({
      uid: expect.any(String),
      name: expect.any(String),
    });
  });

  test("logout action", () => {
    const { type } = logout();

    expect(type).toBe(types.logout);
  });

  test("should to make the logout", async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.logout });
  });

  test("should to dispatch startLoginEmailPassword", async () => {
    await store.dispatch(
      startLoginEmailPassword("testing@testing.com", "chavilla")
    );

    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.uiStartLoading });
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: "EqKN2K0RSGWCpie4M9ixrbVOlPC3",
        name: null,
      },
    });
    expect(actions[2]).toEqual({ type: types.uiFinishLoading });
  });
});
