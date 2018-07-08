/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
