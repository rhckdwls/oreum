import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">오름방 목록 </a>
      </Menu.Item>
      <Menu.Item key="search">
        <a href="/searchoreum">오름검색</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
