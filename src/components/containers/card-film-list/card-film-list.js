import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filterForFilms} from "../../../utils";

import CardFilm from "../card-film/card-film";

const CardFilmList = ({filteredFilms, onCardClick}) => {

  return <div className="catalog__movies-list">
    {filteredFilms.map((filmItem, index) => {
      return <CardFilm key={index} film={filmItem} onCardClick={onCardClick}/>;
    })}
  </div>;
};

CardFilmList.propTypes = {
  filteredFilms: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func
};

const mapStateToProps = ({films, currentFilter}) => ({
  filteredFilms: filterForFilms(films, currentFilter),
});

export default connect(mapStateToProps)(CardFilmList);
