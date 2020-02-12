import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main';

const App = ({film, films}) => {
  return <Main film={film} films={films} onClick={() => {}}/>;
};

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

export default App;
