import React from 'react';
import renderer from 'react-test-renderer';
import CardFilm from "./card-film";

const film = {
  title: `Great Film`,
  genre: `Comedian`,
  year: 2019
};

const mockFn = () => {};

it(`CardFilm snapshot test`, () => {
  const tree = renderer
    .create(<CardFilm film={film} onMouseEnter={mockFn} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
