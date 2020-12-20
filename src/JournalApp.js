import React, { useState } from "react";
import { Provider } from "react-redux";
import { ShowContext } from "./components/context/showContext";
import AppRouter from "./components/routers/AppRouter";
import { store } from "./store/store";

const JournalApp = () => {
  const [show, setShow] = useState(false);

  return (
    <Provider store={store}>
      <ShowContext.Provider
        value={{
          show,
          setShow,
        }}
      >
        <AppRouter />
      </ShowContext.Provider>
    </Provider>
  );
};

export default JournalApp;
