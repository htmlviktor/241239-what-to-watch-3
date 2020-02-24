import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filterForFilms} from "../../../utils";

import CardFilm from "../card-film/card-film";
import ShowMoreButton from "../show-more-button";

class CardFilmList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 8
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  _incCount() {
    this.setState(({count}) => ({count: count + 8}));
  }

  onButtonClick() {
    this._incCount();
  }

  render() {
    const {filteredFilms, onCardClick} = this.props;
    const cards = filteredFilms.slice(0, this.state.count);
    const button = this.state.count > cards.length ? null : <ShowMoreButton onClick={this.onButtonClick}/>;
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {cards.map((filmItem, index) => {
            return <CardFilm key={index} film={filmItem} onCardClick={onCardClick}/>;
          })}
        </div>
        {button}
      </React.Fragment>
    );
  }
};


CardFilmList.propTypes = {
  filteredFilms: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func
};

const mapStateToProps = ({films, currentFilter}) => ({
  filteredFilms: filterForFilms(films, currentFilter),
});

export default connect(mapStateToProps)(CardFilmList);
