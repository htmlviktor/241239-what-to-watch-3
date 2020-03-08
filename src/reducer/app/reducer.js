import {copy} from "../../utils";

const initialState = {
  isShowPlayer: false,
};


const ActionType = {
  CHANGE_IS_SHOW_PLAYER: `CHANGE_IS_SHOW_PLAYER`,
};


const ActionCreator = {
  changeIsPlaying: (film) => ({type: ActionType.CHANGE_IS_SHOW_PLAYER, payload: film}),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_IS_SHOW_PLAYER:
      return copy(state, {
        isShowPlayer: !state.isShowPlayer
      });
    default:
      return state;
  }
};

export {reducer, ActionCreator};
