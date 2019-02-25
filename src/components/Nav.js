import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="search">
          <Link to='/search'>
            <Icon type="search"/>
            Search
          </Link>
        </Menu.Item>
        <Menu.Item key="favourited">
          <Link to='/favourited'>
            <Icon type="star" />
            Favourited
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
