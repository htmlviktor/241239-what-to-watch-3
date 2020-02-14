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
    img: `bohemian-rhapsody.jpg`,
    genre: `Comedian`,
    rating: 8.2,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, 
    presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's 
    friend and protege.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    year: 2019,
  },
  {
    title: `Bohemian Rhapsody`,
    img: `aviator.jpg`,
    genre: `Comedian`,
    rating: 8.2,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, 
    presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's 
    friend and protege.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    year: 2019,
  },
  {
    title: `Macbeth`,
    img: `revenant.jpg`,
    genre: `Comedian`,
    rating: 8.2,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, 
    presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's 
    friend and protege.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    year: 2019,
  },
];

it(`App snapshot test`, () => {
  const tree = renderer
    .create(<App film={film} films={films}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
