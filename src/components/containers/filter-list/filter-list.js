import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from "../../../reducer/data/reducer";
import {connect} from 'react-redux';
import {getActiveFilter, getFilterList} from "../../../reducer/data/selectors";

import FilterItem from "../filter-item/filter-item";

const FilterList = ({currentFilter, onClickFilter, filterList}) => {
  return <ul className="catalog__genres-list">
    {filterList.map((name, index) => {
      return (
        <FilterItem
          key={index}
          name={name}
          currentFilter={currentFilter}
          onClickFilter={onClickFilter}/>
      );
    })}
  </ul>;

};

const mapStateToProps = (state) => ({
  currentFilter: getActiveFilter(state),
  filterList: getFilterList(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClickFilter: (filterName) => dispatch(ActionCreator.changeFilterName(filterName))
});

FilterList.propTypes = {
  currentFilter: PropTypes.string,
  onClickFilter: PropTypes.func,
  filterList: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
