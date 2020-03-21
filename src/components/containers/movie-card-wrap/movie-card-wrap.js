import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from "../../../reducer/app/reducer";
import {connect} from 'react-redux';
import {getAuthStatus} from "../../../reducer/user/selectors";
import {AUTH_STATUS} from "../../../const";
import {Link} from "react-router-dom";
import {Operation} from "../../../reducer/data/reducer";

const MovieCardWrap = ({film, showPoster, onPlayClick, status, changeFavoriteStatus}) => {
  const {posterImage, name, isFavorite, genre, released, id} = film;
  return <div className="movie-card__wrap">
    <div className="movie-card__info">
      {showPoster && <div className="movie-card__poster">
        <img
          src={posterImage}
          alt="The Grand Budapest Hotel poster"
          width={218}
          height={327}
        />
      </div>}
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{released}</span>
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
          <button
            onClick={() => {
              changeFavoriteStatus(film.id, isFavorite ? 0 : 1);
            }}
            className="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width={19} height={20}>
              <use xlinkHref={isFavorite ? `#in-list` : `#add`} />
            </svg>
            <span>My list</span>
          </button>
          {status === AUTH_STATUS.AUTH && <Link to={`/add-review/${film.id}`} className="btn movie-card__button">Add review</Link>}
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
  status: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick: (film) => dispatch(ActionCreator.changeIsPlaying(film)),
  changeFavoriteStatus: (id, status) => dispatch(Operation.changeFavoriteStatus(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardWrap);
