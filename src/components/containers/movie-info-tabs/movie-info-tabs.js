import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class MovieInfoTabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: `Overview`
    };
  }

  _handleTabClick(activeTab) {
    this.setState({activeTab});
  }

  _renderTab() {
    const {film, children} = this.props;
    const {activeTab} = this.state;
    return React.cloneElement(
        children.find((tab) => tab.type.name === activeTab),
        {film});
  }

  render() {
    const {children} = this.props;
    const {activeTab} = this.state;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {React.Children.map(children, ({type: {name}}) => {
              return (
                <li
                  className={`movie-nav__item movie-nav__item${activeTab === name && `--active`}`}>
                  <a href="#"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this._handleTabClick(name);
                    }}
                    className="movie-nav__link">{name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        {this._renderTab()}
      </div>
    );
  }
}

MovieInfoTabs.propTypes = {
  children: PropTypes.array,
  film: PropTypes.object.isRequired,

};

export default MovieInfoTabs;
