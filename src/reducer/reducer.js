import {combineReducers} from "redux";
import NameSpace from "./name-space";

import {reducer as data} from "./data/reducer";
import {reducer as app} from "./app/reducer";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app
});
