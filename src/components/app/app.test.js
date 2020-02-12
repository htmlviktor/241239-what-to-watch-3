import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

const film = {
  name: `Great Film`,
  genre: `Comedian`,
  year: 2019
};

const films = [
  {
    title: `Fantastic Beasts`,
  },
  {
    title: `Bohemian Rhapsody`,
  },
  {
    title: `Macbeth`,
  },
  {
    title: `Bad Guys`,
  },
  {
    title: `Venom. New Part`,
  }
];

it(`App snapshot test`, () => {
  const tree = renderer
    .create(<App film={film} films={films}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
