import React from 'react';
import PropTypes from 'prop-types';

import {ActionCreator} from "../../../reducer/reducer";
import {connect} from 'react-redux';

import {GENRES_FILTER} from "../../../const";

const FilterList = ({currentFilter, onClickFilter}) => {
  return <ul className="catalog__genres-list">
    {GENRES_FILTER.map((name, i) => {
      return (
        <li
          key={i}
          className={`catalog__genres-item ${currentFilter === name && `catalog__genres-item--active`}`}>
          <a
            onClick={(evt) => {
              evt.preventDefault();
              onClickFilter(name);
            }}
            href="#"
            className="catalog__genres-link">
            {name}
          </a>
        </li>
      );
    })}
  </ul>;

};

const mapStateToProps = ({currentFilter}) => ({currentFilter});

const mapDispatchToProps = (dispatch) => ({
  onClickFilter: (filterName) => dispatch(ActionCreator.changeFilterName(filterName))
});

FilterList.propTypes = {
  currentFilter: PropTypes.string,
  onClickFilter: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
