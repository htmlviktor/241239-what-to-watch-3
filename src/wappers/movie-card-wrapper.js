import React from 'react';
import PropTypes from 'prop-types';

const MovieMainWrapper = (props) => {
  return (
    <section className="movie-card">
      {props.children}
    </section>
  );
};


MovieMainWrapper.propTypes = {
  children: PropTypes.array
};

export default MovieMainWrapper;
