import React from 'react';
import PropTypes from 'prop-types';

import CardFilm from "../card-film/card-film";

const CardFilmList = ({films, onCardClick}) => {
  const onMouseEnter = (info) => {
    // eslint-disable-next-line no-console
    console.log(info);
  };
  return <div className="catalog__movies-list">
    {films.map((filmItem, index) => {
      return <CardFilm key={index} film={filmItem} onMouseEnter={onMouseEnter} onCardClick={onCardClick}/>;
    })}
  </div>;
};

CardFilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func
};

export default CardFilmList;
