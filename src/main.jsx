import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import newStore from "./redux/newStore.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Provider store={newStore}>
        <App />
      </Provider>
    </BrowserRouter>
  );