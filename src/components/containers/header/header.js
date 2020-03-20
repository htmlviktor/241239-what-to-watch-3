import React from 'react';
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";
import Avatar from '../avatar';

const Header = () => {
  return <header className="page-header movie-card__head">
    <div className="logo">
      <Link to={AppRoute.ROOT} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
    <div className="user-block">
      <Avatar/>
    </div>
  </header>;

};


export default Header;
