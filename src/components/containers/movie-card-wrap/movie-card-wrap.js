import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from "../../../reducer/app/reducer";
import {connect} from 'react-redux';
import {getCurrentFilm} from "../../../reducer/data/selectors";

const MovieCardWrap = ({film, showPoster, onPlayClick}) => {

  return <div className="movie-card__wrap">
    <div className="movie-card__info">
      {showPoster && <div className="movie-card__poster">
        <img
          src={film.posterImage}
          alt="The Grand Budapest Hotel poster"
          width={218}
          height={327}
        />
      </div>}
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{film.name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{film.genre}</span>
          <span className="movie-card__year">{film.released}</span>
        </p>
        <div className="movie-card__buttons">
          <button
            onClick={() => {
              onPlayClick(film);
            }}
            className="btn btn--play movie-card__button"
            type="button">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <button className="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width={19} height={20}>
              <use xlinkHref="#add" />
            </svg>
            <span>My list</span>
          </button>
          {!showPoster && <a href="add-review.html" className="btn movie-card__button">Add review</a>}
        </div>
      </div>
    </div>
  </div>;
};

MovieCardWrap.propTypes = {
  film: PropTypes.object,
  showPoster: PropTypes.bool,
  onPlayClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  film: getCurrentFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick: (film) => dispatch(ActionCreator.changeIsPlaying(film))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardWrap);
