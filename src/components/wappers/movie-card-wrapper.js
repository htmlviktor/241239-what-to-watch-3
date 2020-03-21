import React from 'react';
import PropTypes from 'prop-types';

const MovieMainWrapper = (props) => {
  const {renderClassName, backgroundImage} = props;
  return (
    <section
      style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: `cover`}}
      className={renderClassName ? renderClassName : `movie-card`}>
      {props.children}
    </section>
  );
};


MovieMainWrapper.propTypes = {
  children: PropTypes.array
};

export default MovieMainWrapper;
