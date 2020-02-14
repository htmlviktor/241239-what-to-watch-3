import React from 'react';
import MainPage from './main-page';
import renderer from 'react-test-renderer';

const film = {
  name: `Great Film`,
  genre: `Comedian`,
  year: 2019
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Main snapshot test`, () => {
  const tree = renderer
    .create(<MainPage film={film} films={films} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
