import React from 'react';
import PropTypes from 'prop-types';

import CardFilm from "../card-film/card-film";

const CardFilmList = ({films}) => {
  const onMouseEnter = (info) => {
    // eslint-disable-next-line no-console
    return info;
  };
  return <div className="catalog__movies-list">
    {films.map((filmItem, index) => {
      return <CardFilm key={index} film={filmItem} onMouseEnter={onMouseEnter}/>;
    })}
  </div>;
};

CardFilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

export default CardFilmList;
