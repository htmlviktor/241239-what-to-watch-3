import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../../pages/main-page';
import {Router, Switch, Route, Redirect} from "react-router-dom";
import MoviePage from "../../pages/movie-page";

import history from "../../../history";
import {AppRoute} from "../../../const";
import SignInPage from "../../pages/sign-in";
import {getAuthStatus} from "../../../reducer/user/selectors";
import withRouteStatus from "../../hocs/withRouteStatus";

const SignInPageWrapped = withRouteStatus(SignInPage, AppRoute.ROOT);

class App extends React.PureComponent {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={MainPage} />
          <Route path={`${AppRoute.FILMS}/:id`} render={({match}) => {
            return <MoviePage id={match.params.id}/>;
          }}/>
          <Route exact path={AppRoute.LOGIN} component={SignInPageWrapped}/>

          <Redirect to={AppRoute.ROOT}/>
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

export default connect(mapStateToProps)(App);
