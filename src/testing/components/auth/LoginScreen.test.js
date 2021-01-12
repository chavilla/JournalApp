import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import LoginScreen from "../../../components/auth/LoginScreen";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { initState2 } from "../../../fixtures/";
import { MemoryRouter } from "react-router-dom";

// settings
const midlewares = [thunk];
const mockStore = configureStore(midlewares);
let store = mockStore(initState2);

const history = {
    listen: jest.fn(),
}

describe("Testing in LoginScreen", () => {
  beforeEach(() => {
    store = mockStore(initState2);
  });

  test("should to create a snapshot", () => {
    const wrapper = mount(
      <Provider store={store}>
          <MemoryRouter history={ history}>
            <LoginScreen />
          </MemoryRouter>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();

  });
});
