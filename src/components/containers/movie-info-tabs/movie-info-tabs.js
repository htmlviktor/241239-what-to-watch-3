import React from 'react';

export const MovieInfoTab = ({tab, children}) => {
  return children;
};

const MovieInfoTabs = ({children, activeTab, film}) => {

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {React.Children.map(children, (child) => {
            const active = activeTab === child.props.children.toLowerCase() ? `active` : ``;
            return (
              <li className={`movie-nav__item movie-nav__item--${active}`}>
                <a href="#" className="movie-nav__link">{child}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {activeTab}
    </div>
  );

};


export default MovieInfoTabs;
