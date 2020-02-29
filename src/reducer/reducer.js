import films from "../mock/films";
import {copy} from "../utils";

const initialState = {
  films,
  currentFilter: `All genres`,
  currentFilmPlay: films[0],
  isShowPlayer: false,
};

const ActionType = {
  CHANGE_FILTER_NAME: `CHANGE_FILTER_NAME`,
  CHANGE_IS_SHOW_PLAYER: `CHANGE_IS_SHOW_PLAYER`
};

const ActionCreator = {
  changeFilterName: (name) => ({type: ActionType.CHANGE_FILTER_NAME, payload: name}),
  changeIsPlaying: (film) => ({type: ActionType.CHANGE_IS_SHOW_PLAYER, payload: film})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_NAME:
      return copy(state, {currentFilter: action.payload});
    case ActionType.CHANGE_IS_SHOW_PLAYER:
      return copy(state, {
        isShowPlayer: !state.isShowPlayer,
        currentFilmPlay: Object.assign({}, action.payload)
      });
    default: return state;
  }
};


export {ActionCreator};
export default reducer;
