import React from 'react';
import PropTypes from 'prop-types';

import CardFilmList from "../../containers/card-film-list";
import FilterList from "../../containers/filter-list";
import Header from "../../containers/header";
import CardFilmBg from "../../containers/card-film-bg";
import MovieCardWrap from "../../containers/movie-card-wrap";
import ShowMoreButton from "../../containers/show-more-button";
import Footer from "../../containers/footer";
import {MovieMainWrapper, PageContentWrapper} from "../../wappers";

const MainPage = ({film, films, onCardClick}) => {
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
      </PageContentWrapper>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  film: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func
};

export default MainPage;
