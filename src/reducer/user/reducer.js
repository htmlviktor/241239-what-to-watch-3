import {AUTH_STATUS} from "../../const";
import {copy} from "../../utils";

const initialState = {
  authorizationStatus: AUTH_STATUS.NO_AUTH,
};


const ActionType = {
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`,
};

const ActionCreator = {
  changeAuthStatus: (payload) => ({type: ActionType.CHANGE_AUTH_STATUS, payload}),
};

const Operation = {
  loginUser: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then((res) => {
        if (res.status === 200) {
          dispatch(ActionCreator.changeAuthStatus(AUTH_STATUS.AUTH));
        }
      });
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return copy(state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};


export {reducer, Operation, ActionCreator};
