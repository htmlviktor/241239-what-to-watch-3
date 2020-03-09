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
import {getIsShowPlayer} from "../../../reducer/app/selectors";
import {getFilmForId} from "../../../reducer/data/selectors";

import {compose} from "redux";
import withLoadIndicator from "../../hocs/withLoadIndicator";

const MoviePage = ({item, isShowPlayer}) => {
  return (
    <React.Fragment>
      <MovieMainWrapper>
        <div className="movie-card__hero">
          <CardFilmBg/>
          <Header/>
          <MovieCardWrap film={item} showPoster={false}/>
        </div>
        <MovieInfo film={item}/>
      </MovieMainWrapper>
      <PageContentWrapper>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CardFilmList />
        </section>
        <Footer/>
        {isShowPlayer && <VideoPlayerMain />}
      </PageContentWrapper>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  item: PropTypes.object,
  onCardClick: PropTypes.func,
  isShowPlayer: PropTypes.bool
};

const mapStateToProps = (state, {id}) => {
  return {
    isShowPlayer: getIsShowPlayer(state),
    item: getFilmForId(state, id)
  };
};

export default compose(
    connect(mapStateToProps),
    withLoadIndicator
)(MoviePage);
