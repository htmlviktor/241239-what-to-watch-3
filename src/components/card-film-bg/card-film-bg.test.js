import React from 'react';
import renderer from 'react-test-renderer';
import CardFilmBg from "./card-film-bg";


it(`CardFilmBg snapshot test`, () => {
  const tree = renderer
    .create(<CardFilmBg />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
