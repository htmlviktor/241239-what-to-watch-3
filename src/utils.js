import history from "./history";
import {AppRoute} from "./const";

export const filterForFilms = (films, filterName) => {
  switch (filterName) {
    case `All genres`: return films;
    default: return films.filter((film) => film.genre === filterName);
  }
};

export const copy = (state, ...resources) => {
  return Object.assign({}, state, ...resources);
};

export const adapter = (data) => ({
  name: data[`name`],
  posterImage: data[`poster_image`],
  previewImage: data[`preview_image`],
  backgroundImage: data[`background_image`],
  backgroundColor: data[`background_color`],
  description: data[`description`],
  rating: data[`rating`],
  scoresCount: data[`scores_count`],
  director: data[`director`],
  starring: data[`starring`],
  runTime: data[`run_time`],
  genre: data[`genre`],
  released: data[`released`],
  id: data[`id`],
  isFavorite: data[`is_favorite`],
  videoLink: data[`video_link`],
  previewVideoLink: data[`preview_video_link`]
});

export const userAdapter = (data) => ({
  id: data.id,
  email: data.email,
  name: data.name,
  avatar: data[`avatar_url`]
});

export const pushHistory = (route, param) => {
  if (param) {
    history.push(`${route}/${param}`);
  } else {
    history.push(`${route}`);
  }
};

export const checkFailRoute = (cb, error) => {
  if (error.response.status === 401) {
    switch (location.pathname) {
      case AppRoute.ROOT: return {data: null};
      default: cb();
    }
  }
  return error;
};

