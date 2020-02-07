import React from 'react';
import Main from '../main';
// eslint-disable-next-line react/prop-types
const App = ({film, films}) => {
  return <Main film={film} films={films}/>;
};

export default App;
