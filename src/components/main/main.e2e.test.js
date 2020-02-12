import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

const film = {
  name: `Great Film`,
  genre: `Comedian`,
  year: 2019
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


Enzyme.configure({
  adapter: new Adapter()
});

it(`Should cb after click on h2`, () => {
  const onTitleClick = jest.fn();

  const mainComponent = shallow(
      <Main
        film={film}
        films={films}
        onClick={onTitleClick}/>
  );

  const mainComponentTitle = mainComponent.find(`.catalog__title`);

  mainComponentTitle.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
