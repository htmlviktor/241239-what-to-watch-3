import {adapter, copy} from "../../utils";

const initialState = {
  films: [],
  currentFilter: `All genres`,
  currentFilmPlay: {},
};

const ActionType = {
  CHANGE_FILTER_NAME: `CHANGE_FILTER_NAME`,
  LOAD_FILMS: `LOAD_FILMS`,
  ADD_PROMO_FILM: `ADD_PROMO_FILM`,
  ADD_COMMENT_TO_FILM: `ADD_COMMENT_TO_FILM`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`
};

const ActionCreator = {
  changeFilterName: (name) => ({type: ActionType.CHANGE_FILTER_NAME, payload: name}),
  addFilms: (data) => ({type: ActionType.LOAD_FILMS, payload: data}),
  addPromoFilm: (data) => ({type: ActionType.ADD_PROMO_FILM, payload: data}),
  addComment: (payload) => ({type: ActionType.ADD_COMMENT_TO_FILM, payload}),
  changeFavoriteStatus: (payload) => ({type: ActionType.CHANGE_FAVORITE_STATUS, payload})
};


const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((res) => {
        const data = res.data.map(adapter);
        dispatch(ActionCreator.addFilms(data));
        dispatch(ActionCreator.addPromoFilm(adapter(res.data[0])));
      });
  },
  addComment: (id, comment, rating) => (dispatch, _getState, api) => {
    return api.post(`/comments/${id}`, {rating, comment});
  },
  changeFavoriteStatus: (id, status) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then((res) => {
        dispatch(ActionCreator.changeFavoriteStatus(adapter(res.data)))
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
        currentFilmPlay: action.payload
      });
    case ActionType.CHANGE_FAVORITE_STATUS:
      const idx = state.films.findIndex((it) => it.id === action.payload.id);
      return copy(state, {
        films: [
          ...state.films.slice(0, idx),
          action.payload,
          ...state.films.slice(idx + 1)
        ]
      });
    default: return state;
  }
};


export {reducer, ActionCreator, ActionType, Operation};
