import React from 'react';
import PropTypes from 'prop-types';

import CardFilmBg from "../../components/card-film-bg";
import Header from "../../components/header";
import MovieCardWrap from "../../components/movie-card-wrap";
import MovieInfo from "../../components/movie-info";
import {MovieMainWrapper, PageContentWrapper} from "../../wappers";
import CardFilmList from "../../components/card-film-list";

const MoviePage = ({film, films, onCardClick}) => {
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
      </PageContentWrapper>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  film: PropTypes.object,
  films: PropTypes.array,
  onCardClick: PropTypes.func,
};

export default MoviePage;
