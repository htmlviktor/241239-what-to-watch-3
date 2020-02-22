import films from "../mock/films";
import {copy} from "../utils";

const initialState = {
  films,
  currentFilter: `All genres`,
};

const ActionType = {
  CHANGE_FILTER_NAME: `CHANGE_FILTER_NAME`,
};

const ActionCreator = {
  changeFilterName: (name) => ({type: ActionType.CHANGE_FILTER_NAME, payload: name}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_NAME:
      return copy(state, {currentFilter: action.payload});
    default: return state;
  }
};


export {ActionCreator};
export default reducer;
