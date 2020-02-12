import React from 'react';
import renderer from 'react-test-renderer';
import CardFilmList from "./card-film-list";

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`CardFilmList snapshot test`, () => {
  const tree = renderer
    .create(<CardFilmList films={films} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
