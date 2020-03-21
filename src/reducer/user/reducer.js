import {AUTH_STATUS} from "../../const";
import {copy, userAdapter} from "../../utils";

const initialState = {
  authorizationStatus: AUTH_STATUS.NO_AUTH,
  user: null
};


const ActionType = {
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`,
  LOAD_USER_INFO: `LOAD_USER_INFO`
};

const ActionCreator = {
  changeAuthStatus: (payload) => ({type: ActionType.CHANGE_AUTH_STATUS, payload}),
  loadUserInfo: (payload) => ({type: ActionType.LOAD_USER_INFO, payload})
};

const Operation = {
  loginUser: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then((res) => {
        if (res.status === 200) {
          dispatch(ActionCreator.changeAuthStatus(AUTH_STATUS.AUTH));
          dispatch(ActionCreator.loadUserInfo(userAdapter(res.data)));
        }
      });
  },
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(ActionCreator.changeAuthStatus(AUTH_STATUS.AUTH));
          dispatch(ActionCreator.loadUserInfo(userAdapter(res.data)));
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
    case ActionType.LOAD_USER_INFO:
      return copy(state, {
        user: action.payload
      });
    default:
      return state;
  }
};


export {reducer, Operation, ActionCreator};
