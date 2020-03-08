import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../../pages/main-page';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MoviePage from "../../pages/movie-page";

class App extends React.PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

const mapStateToProps = ({films}) => ({films});

export default connect(mapStateToProps)(App);
