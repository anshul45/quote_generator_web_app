import React from "react";

import store from "./utils/store";
import { Provider } from "react-redux";
import HomePage from "./Page/HomePage";

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
