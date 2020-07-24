import React from "react";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";

import Routes from "../routes.js";
import GlobalStyle from "./styles";

import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
