import {adapter, copy} from "../../utils";

const initialState = {
  films: [],
  currentFilter: `All genres`,
  currentFilmPlay: {},
};

const ActionType = {
  CHANGE_FILTER_NAME: `CHANGE_FILTER_NAME`,
  LOAD_FILMS: `LOAD_FILMS`,
  ADD_PROMO_FILM: `ADD_PROMO_FILM`
};

const ActionCreator = {
  changeFilterName: (name) => ({type: ActionType.CHANGE_FILTER_NAME, payload: name}),
  addFilms: (data) => ({type: ActionType.LOAD_FILMS, payload: data}),
  addPromoFilm: (data) => ({type: ActionType.ADD_PROMO_FILM, payload: data})
};


const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((res) => {
        const data = res.data.map(adapter);
        dispatch(ActionCreator.addFilms(data));
        dispatch(ActionCreator.addPromoFilm(res.data[0]));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_NAME:
      return copy(state, {currentFilter: action.payload});
    case ActionType.LOAD_FILMS:
      return copy(state, {
        films: action.payload,
      });
    case ActionType.ADD_PROMO_FILM:
      return copy(state, {
        currentFilmPlay: adapter(action.payload)
      });
    default: return state;
  }
};


export {reducer, ActionCreator, ActionType, Operation};
