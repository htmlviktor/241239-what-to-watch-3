import React from 'react';
import renderer from 'react-test-renderer';
import CardFilm from "./card-film";

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

const mockFn = () => {};

it(`CardFilm snapshot test`, () => {
  const tree = renderer
    .create(<CardFilm film={film} onMouseEnter={mockFn} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
