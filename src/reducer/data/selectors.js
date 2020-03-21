import {createSelector} from 'reselect';
import NameSpace from "../name-space";
import {filterForFilms} from '../../utils';

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getActiveFilter = (state) => {
  return state[NameSpace.DATA].currentFilter;
};

export const getCurrentFilm = (state) => {
  return state[NameSpace.DATA].currentFilmPlay;
};

export const getFilmId = (state, ownProps) => {
  return ownProps;
};

export const getFilterList = createSelector(
    getFilms,
    (resultOne) => {
      return [`All genres`, ...new Set(resultOne.map((it) => it.genre))];
    }
);

export const getFilteredFilms = createSelector(
    getFilms,
    getActiveFilter,
    (resultOne, resultTwo) => {
      return filterForFilms(resultOne, resultTwo);
    }
);


export const getFilmForId = createSelector(
    getFilms,
    getFilmId,
    (one, two) => {
      if (one.length) {
        return one.find((it) => it.id === Number(two));
      } else {
        return ``;
      }
    }
);

export const getFilmName = createSelector(
    getFilms,
    getFilmId,
    (one, two) => {
      if (one.length) {
        return one.find((it) => it.id === Number(two)).name;
      } else {
        return ``;
      }
    }
);
