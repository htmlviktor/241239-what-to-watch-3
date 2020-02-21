import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardFilm from "./card-film";

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  title: `Title One`
};

it(`CardFilm film e2e test`, () => {
  const onMouseEnter = jest.fn();

  const cardFilmComponent = shallow(
      <CardFilm film={film} onMouseEnter={onMouseEnter}/>
  );

  cardFilmComponent.simulate(`mouseenter`);
  expect(onMouseEnter).toHaveBeenCalledTimes(1);
  expect(onMouseEnter.mock.calls[0][0]).toMatchObject(film);
});
