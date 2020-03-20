import React from 'react';
import {MovieMainWrapper} from "../../wappers";
import CardFilmBg from "../../containers/card-film-bg";
import Header from "../../containers/header";
import Breadcrumbs from "../../containers/breadcrumbs";
import AddReview from "../../containers/add-review";
import {connect} from "react-redux";
import {getFilmName} from "../../../reducer/data/selectors";

const AddReviewPage = ({id, name}) => {
  return (
    <React.Fragment>
      <section className={`movie-card movie-card--full`}>
        <MovieMainWrapper renderClassName={`movie-card__header`}>
          <CardFilmBg />
          <Header render={<Breadcrumbs id={id} name={name}/>}/>
          <div className="movie-card__poster movie-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327" />
          </div>
        </MovieMainWrapper>
        <AddReview />
      </section>
    </React.Fragment>
  );
};


const mapStateToProps = (state, {id}) => ({
  name: getFilmName(state, id)
});

export default connect(mapStateToProps)(AddReviewPage);
