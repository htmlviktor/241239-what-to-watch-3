import React from 'react';
import PropTypes from 'prop-types';
import MovieInfoTabs, {Details, Overview, Review} from "../movie-info-tabs";


const MovieInfo = ({film}) => {
  return <div className="movie-card__wrap movie-card__translate-top">
    <div className="movie-card__info">
      <div className="movie-card__poster movie-card__poster--big">
        <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218"
          height="327"/>
      </div>
      <MovieInfoTabs film={film}>
        <Overview />
        <Details />
        <Review />
      </MovieInfoTabs>
    </div>
  </div>;
};

MovieInfo.propTypes = {
  film: PropTypes.object
};

export default MovieInfo;
