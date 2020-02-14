import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = ({film}) => {
  return <div className="movie-card__wrap movie-card__translate-top">
    <div className="movie-card__info">
      <div className="movie-card__poster movie-card__poster--big">
        <img src={`img/${film.img}`} alt="The Grand Budapest Hotel poster" width="218"
          height="327"/>
      </div>

      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        <div className="movie-rating">
          <div className="movie-rating__score">{film.rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">Very good</span>
            <span className="movie-rating__count">240 ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{film.description}</p>
          <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {film.starring}</strong></p>
        </div>
      </div>
    </div>
  </div>;
};

MovieInfo.propTypes = {
  film: PropTypes.object
};

export default MovieInfo;
