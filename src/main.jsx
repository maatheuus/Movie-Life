import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import store from "./store/store.js";

import "./index.css";

const VITE_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${VITE_ACCESS_TOKEN}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
