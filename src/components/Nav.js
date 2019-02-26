import React from "react";
import { Icon } from "antd";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to="/"
        exact
      >
        <Icon type="home" />
        Home
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to="/search"
      >
        <Icon type="search" />
        Search
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to="/favourited"
      >
        <Icon type="star" />
        Favourited
      </NavLink>
    </div>
  );
};

export default Nav;
