import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../../pages/main-page';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MoviePage from "../../pages/movie-page";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: props.films[0],
      activeScreen: `main`,
    };

    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(currentFilm) {
    this.setState({
      currentFilm,
      activeScreen: `movie-info`,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev">
            <MoviePage film={this.state.currentFilm} films={this.props.films} onCardClick={this.onCardClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {films} = this.props;
    if (this.state.activeScreen === `movie-info`) {
      return <MoviePage film={this.state.currentFilm} films={films} onCardClick={this.onCardClick}/>;
    } else {
      return <MainPage film={films[0]} films={films} onCardClick={this.onCardClick}/>;
    }
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

const mapStateToProps = ({films}) => ({films});

export default connect(mapStateToProps)(App);
