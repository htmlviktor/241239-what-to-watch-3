import React from 'react';
import PropTypes from 'prop-types';

import CardFilmList from "../../containers/card-film-list";
import FilterList from "../../containers/filter-list";
import Header from "../../containers/header";
import CardFilmBg from "../../containers/card-film-bg";
import MovieCardWrap from "../../containers/movie-card-wrap";
import Footer from "../../containers/footer";
import {MovieMainWrapper, PageContentWrapper} from "../../wappers";
import {VideoPlayerMain} from "../../containers/video-player";
import {connect} from 'react-redux';


const MainPage = ({film, films, onCardClick, isShowPlayer}) => {
  return (
    <React.Fragment>
      <MovieMainWrapper>
        <CardFilmBg />
        <Header />
        <MovieCardWrap film={film} showPoster={true}/>
      </MovieMainWrapper>
      <PageContentWrapper>
        <section className="catalog">
          <FilterList />
          <CardFilmList films={films} onCardClick={onCardClick}/>
        </section>
        <Footer />
        {isShowPlayer && <VideoPlayerMain />}
      </PageContentWrapper>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  film: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func,
  isShowPlayer: PropTypes.bool
};

const mapStateToProps = ({isShowPlayer}) => ({isShowPlayer});

export default connect(mapStateToProps)(MainPage);
