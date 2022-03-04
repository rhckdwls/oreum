import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link to="/">오름방 목록 </Link>
      </Menu.Item>
      <Menu.Item key="search">
        <Link to="/searchoreum">오름검색</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
