import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';

const film = {
  name: `Great Film`,
  genre: `Comedian`,
  year: 2019
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Main snapshot test`, () => {
  const tree = renderer
    .create(<Main film={film} films={films} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
