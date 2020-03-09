import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../../pages/main-page';
import {Router, Switch, Route} from "react-router-dom";
import MoviePage from "../../pages/movie-page";

import history from "../../../history";
import {AppRoute} from "../../../const";

class App extends React.PureComponent {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={MainPage} />
          <Route path={`${AppRoute.FILMS}/:id`} render={({match}) => {
            return <MoviePage id={match.params.id}/>;
          }}/>
        </Switch>
      </Router>
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
