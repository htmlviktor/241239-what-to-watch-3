import React from 'react';
import renderer from 'react-test-renderer';
import FilterList from "./filter-list";


it(`FilterList snapshot test`, () => {
  const tree = renderer
    .create(<FilterList />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
