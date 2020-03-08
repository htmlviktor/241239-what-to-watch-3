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
import {getIsShowPlayer} from "../../../reducer/app/selectors";


const MainPage = ({isShowPlayer}) => {
  return (
    <React.Fragment>
      <MovieMainWrapper>
        <CardFilmBg />
        <Header />
        <MovieCardWrap showPoster={true}/>
      </MovieMainWrapper>
      <PageContentWrapper>
        <section className="catalog">
          <FilterList />
          <CardFilmList />
        </section>
        <Footer />
        {isShowPlayer && <VideoPlayerMain />}
      </PageContentWrapper>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func,
  isShowPlayer: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isShowPlayer: getIsShowPlayer(state)
});

export default connect(mapStateToProps)(MainPage);
