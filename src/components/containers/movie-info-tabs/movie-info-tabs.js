import React from 'react';

export const MovieInfoTab = ({children}) => {
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

      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring}</strong></p>
      </div>
    </div>
  );

};


export default MovieInfoTabs;
