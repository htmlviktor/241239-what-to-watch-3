export const filterForFilms = (films, filterName) => {
  switch (filterName) {
    case `All genres`: return films;
    default: return films.filter((film) => film.genre === filterName);
  }
};

export const copy = (state, ...resources) => {
  return Object.assign({}, state, ...resources);
};
