import React from 'react';
import {MovieMainWrapper} from "../../wappers";
import CardFilmBg from "../../containers/card-film-bg";
import Header from "../../containers/header";

const AddReviewPage = () => {
  return (
    <React.Fragment>
      <MovieMainWrapper>
        <CardFilmBg />
        <Header />
      </MovieMainWrapper>
    </React.Fragment>
  );
};

export default AddReviewPage;
