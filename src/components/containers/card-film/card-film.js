import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {pushHistory} from "../../../utils";

import {VideoPlayerPreview} from "../video-player";
import {AppRoute} from "../../../const";

export default class CardFilm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlay: false
    };

    this._handleChangeMoving = this._handleChangeMoving.bind(this);
  }

  _handleChangeMoving() {
    this.setState(({isPlay}) => ({isPlay: !isPlay}));
  }

  render() {
    const {film} = this.props;
    return (
      <article
        onClick={() => {
          pushHistory(AppRoute.FILMS, film.id);
        }}
        onMouseEnter={this._handleChangeMoving}
        onMouseLeave={this._handleChangeMoving}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          {this.state.isPlay ?
            <VideoPlayerPreview preview={film.previewVideoLink}/>
            : <img
              src={film.previewImage}
              alt="Fantastic Beasts: The Crimes of Grindelwald"
              width={280}
              height={175}
            />
          }
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            {film.name}
          </a>
        </h3>
      </article>
    );
  }
}


CardFilm.propTypes = {
  film: PropTypes.object,
  onCardClick: PropTypes.func
};

