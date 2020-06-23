import { combineReducers } from "redux"; //Root Reducers

import music from "./music";
import auth from "./auth";
import payment from "./payment";

export default combineReducers({ music, auth, payment });
