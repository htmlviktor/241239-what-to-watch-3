import React from 'react';
import MovieInfo from "./movie-info";
import renderer from 'react-test-renderer';

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

it(`MovieInfo test snapshoot`, () => {
  const tree = renderer
    .create(<MovieInfo film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
