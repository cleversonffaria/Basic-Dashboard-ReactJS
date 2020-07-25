import { combineReducers } from "redux";

import user from "./user";
import clients from "./clients";

export default combineReducers({
  user,
  clients,
});
