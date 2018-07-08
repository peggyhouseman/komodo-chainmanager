import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from "./store/index";
import App from "./components/App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);