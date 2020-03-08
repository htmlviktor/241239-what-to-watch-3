import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({currentFilter, onClickFilter, name}) => {
  return (
    <li
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
  )
};

FilterItem.propTypes = {
  currentFilter: PropTypes.string,
  onClickFilter: PropTypes.func,
  index: PropTypes.number,
  name: PropTypes.string
};

export default FilterItem;
