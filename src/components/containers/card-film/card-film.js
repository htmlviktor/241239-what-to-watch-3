import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player";


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
    const {film, onCardClick} = this.props;
    return (
      <article
        onClick={() => onCardClick(film)}
        onMouseEnter={this._handleChangeMoving}
        onMouseLeave={this._handleChangeMoving}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          {this.state.isPlay ?
            <VideoPlayer film={film} isPlay={this.state.isPlay}/>
            : <img
              src={film.img}
              alt="Fantastic Beasts: The Crimes of Grindelwald"
              width={280}
              height={175}
            />
          }
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            {film.title}
          </a>
        </h3>
      </article>
    );
  }
}


CardFilm.propTypes = {
  film: PropTypes.object,
  onMouseEnter: PropTypes.func.isRequired,
  onCardClick: PropTypes.func
};

