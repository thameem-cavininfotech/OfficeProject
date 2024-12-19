import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/_index.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./services/axiosConfig.ts";
import store from "./redux/store/index.ts";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      draggable
      hideProgressBar
      className="toast-container"
      style={{ padding: "0px", margin: "0" }}
    />
  </React.StrictMode>
);
