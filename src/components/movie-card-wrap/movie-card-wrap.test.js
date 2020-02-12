import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardWrap from "./movie-card-wrap";

const film = {
  name: `Great Film`,
  genre: `Comedian`,
  year: 2019
};

it(`MovieCardWrap snapshot test`, () => {
  const tree = renderer
    .create(<MovieCardWrap film={film} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
