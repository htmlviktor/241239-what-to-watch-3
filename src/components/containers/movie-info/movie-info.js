import React from 'react';
import PropTypes from 'prop-types';
import MovieInfoTabs from "../movie-info-tabs";
import {MovieInfoTab} from "../movie-info-tabs/movie-info-tabs";


const MovieInfo = ({film}) => {
  return <div className="movie-card__wrap movie-card__translate-top">
    <div className="movie-card__info">
      <div className="movie-card__poster movie-card__poster--big">
        <img src={`img/${film.img}`} alt="The Grand Budapest Hotel poster" width="218"
          height="327"/>
      </div>
      <MovieInfoTabs film={film} activeTab="overview">
        <MovieInfoTab>Overview</MovieInfoTab>
        <MovieInfoTab>Details</MovieInfoTab>
        <MovieInfoTab>Reviews</MovieInfoTab>
      </MovieInfoTabs>
    </div>
  </div>;
};

MovieInfo.propTypes = {
  film: PropTypes.object
};

export default MovieInfo;
