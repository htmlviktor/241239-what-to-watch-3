import React from 'react';
import {MovieMainWrapper} from "../../wappers";
import CardFilmBg from "../../containers/card-film-bg";
import Header from "../../containers/header";
import Breadcrumbs from "../../containers/breadcrumbs";
import AddReview from "../../containers/add-review";
import {connect} from "react-redux";
import {getFilmForId} from "../../../reducer/data/selectors";

const AddReviewPage = ({id, film}) => {
  const {posterImage, name, backgroundColor, backgroundImage} = film;
  return (
    <React.Fragment>
      <section
        style={{backgroundColor}}
        className={`movie-card movie-card--full`}>
        <MovieMainWrapper
          backgroundImage={backgroundImage}
          renderClassName={`movie-card__header`}>
          <CardFilmBg />
          <Header render={<Breadcrumbs id={id} name={name}/>}/>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218"
              height="327" />
          </div>
        </MovieMainWrapper>
        <AddReview id={id} backgroundColor={backgroundColor}/>
      </section>
    </React.Fragment>
  );
};


const mapStateToProps = (state, {id}) => ({
  film: getFilmForId(state, id)
});

export default connect(mapStateToProps)(AddReviewPage);
