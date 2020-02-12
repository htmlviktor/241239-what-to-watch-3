import React from 'react';
import PropTypes from 'prop-types';

const CardFilm = ({film, onMouseEnter}) => {
  return <article
    onMouseEnter={() => onMouseEnter(film)}
    className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img
        src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
        alt="Fantastic Beasts: The Crimes of Grindelwald"
        width={280}
        height={175}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">
        {film.title}
      </a>
    </h3>
  </article>;
};


CardFilm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  onMouseEnter: PropTypes.func.isRequired
};

export default CardFilm;
