import {creactStore } from "redux";
import redusers from './redux/redusers/index'
const store = creactStore(
  redusers,
  {},

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;