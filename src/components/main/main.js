import React from 'react';
import PropTypes from 'prop-types';

import CardFilmList from "../card-film-list";
import FilterList from "../filter-list";
import Header from "../header";
import CardFilmBg from "../card-film-bg";
import MovieCardWrap from "../movie-card-wrap";
import ShowMoreButton from "../show-more-button";
import Footer from "../footer";

const Main = ({film, films, onClick}) => {

  return <div>
    <section className="movie-card">
      <CardFilmBg />
      <Header />
      <MovieCardWrap film={film}/>
    </section>
    <div className="page-content">
      <section className="catalog">
        <FilterList />
        <CardFilmList films={films}/>
        <ShowMoreButton />
      </section>
      <Footer />
    </div>
  </div>;

};

Main.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

export default Main;
