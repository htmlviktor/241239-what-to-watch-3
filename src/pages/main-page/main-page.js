import React from 'react';
import PropTypes from 'prop-types';

import CardFilmList from "../../components/card-film-list";
import FilterList from "../../components/filter-list";
import Header from "../../components/header";
import CardFilmBg from "../../components/card-film-bg";
import MovieCardWrap from "../../components/movie-card-wrap";
import ShowMoreButton from "../../components/show-more-button";
import Footer from "../../components/footer";
import {MovieMainWrapper, PageContentWrapper} from "../../wappers/";

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
          <ShowMoreButton />
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
