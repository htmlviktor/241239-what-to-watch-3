import React from 'react';
import PropTypes from 'prop-types';

import CardFilmBg from "../../containers/card-film-bg";
import Header from "../../containers/header";
import MovieCardWrap from "../../containers/movie-card-wrap";
import MovieInfo from "../../containers/movie-info";
import {MovieMainWrapper, PageContentWrapper} from "../../wappers";
import CardFilmList from "../../containers/card-film-list";
import Footer from "../../containers/footer";
import VideoPlayerMain from "../../containers/video-player/video-player-main";
import {connect} from 'react-redux';

const MoviePage = ({film, films, onCardClick, isShowPlayer}) => {
  return (
    <React.Fragment>
      <MovieMainWrapper>
        <div className="movie-card__hero">
          <CardFilmBg/>
          <Header/>
          <MovieCardWrap film={film} showPoster={false}/>
        </div>
        <MovieInfo film={film}/>
      </MovieMainWrapper>
      <PageContentWrapper>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CardFilmList films={films} onCardClick={onCardClick}/>
        </section>
        <Footer/>
        {isShowPlayer && <VideoPlayerMain />}
      </PageContentWrapper>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  film: PropTypes.object,
  films: PropTypes.array,
  onCardClick: PropTypes.func,
  isShowPlayer: PropTypes.bool
};

const mapStateToProps = ({isShowPlayer}) => ({isShowPlayer});

export default connect(mapStateToProps)(MoviePage);
