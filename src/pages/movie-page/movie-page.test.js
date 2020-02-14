import React from 'react';
import MoviePage from "./movie-page";
import renderer from 'react-test-renderer';

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
];

const film = {
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
};

it(`MoviePage test snapshot`, () => {
  const tree = renderer
    .create(<MoviePage
      films={films}
      film={film}
      onCardClick={() => {
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
