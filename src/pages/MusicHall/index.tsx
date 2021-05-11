/*
 * @Author: KinVen
 * @Date: 2021-04-21 21:35:51
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-10 19:19:43
 * @Description:
 * @Version: 1.0
 */
import React from "react";
import { NavBarData } from "./interface";
// import { Outlet, useParams } from "react-router";
import NavBar from "./components/NavBar";
import { Menu } from "antd";
import { Link, Route } from "react-router-dom";
import ClassifiedSongList from "./ClassifiedSongList";
import Rank from "./Rank";
import Singer from "./Singer";
import Recommend from "./Recommend";
const MusicHall = () => {
  const NavBarData: NavBarData[] = [
    {
      data: "精选",
      key: "/",
      path: "/",
    },
    {
      data: "歌手",
      key: "singer",
      path: "singer",
    },

    {
      data: "排行榜",
      key: "rank",
      path: "rank",
    },
    {
      data: "分类歌单",
      key: "classifiedSongList",
      path: "classifiedSongList",
    },
  ];

  return (
    <>
      <Menu mode="horizontal">
        {NavBarData &&
          NavBarData.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={`${item.key}`}>{item.data}</Link>
            </Menu.Item>
          ))}
      </Menu>
      <Route exact path="/" component={Recommend} />
      <Route path="/rank" component={Rank} />
      <Route path="/singer" component={Singer} />
      <Route path="/ClassifiedSongList" component={ClassifiedSongList} />
    </>
  );
};
export default MusicHall;
