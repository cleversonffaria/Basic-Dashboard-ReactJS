import React from "react";

import { Provider } from "react-redux";
import store from "../store";

import Routes from "../routes.js";
import GlobalStyle from "./styles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
