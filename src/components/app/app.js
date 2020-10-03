import React from "react";
import { Provider } from "react-redux";
import MainRoute from "../../routes/main-route";
import store from "../../store/store";
import "./app.css";

const App = () => {
  return (
    <Provider store={store}>
      <MainRoute></MainRoute>
    </Provider>
  );
};

export default App;
