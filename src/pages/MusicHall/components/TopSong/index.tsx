import NavBar from "@/component/NavBar";
import { NavBarData } from "@component/interface";
import { getTopSong } from "@netWork/request";
import React, { useEffect, useState } from "react";
import SectionMod from "../SectionMod";
import "./index.less";
import _ from "lodash";
import { TopSongCard } from "./topSongCard";
// SwiperCore.use([Navigation, Pagination, Autoplay]);
const TopSong = () => {
  const [topSongList, setTopSongList] = useState<any>(null);
  const [type, setType] = useState(0);
  useEffect(() => {
    getTopSong({ type }).then((res) => setTopSongList(_.chunk(res.data, 9)));
  }, [type]);

  const NavBarData: NavBarData[] = [
    {
      data: "全部",
      key: "All",
    },
    {
      data: "华语",
      key: "Chinese",
    },
    {
      data: "欧美",
      key: "EuropeAndAmerica",
    },
    {
      data: "日本",
      key: "Japan",
    },
    {
      data: "韩国",
      key: "Korea",
    },
  ];
  const changeCurrentActive = (active: string) => {
    switch (active) {
      case "All":
        setType(0);
        break;
      case "Chinese":
        setType(7);
        break;
      case "EuropeAndAmerica":
        setType(96);
        break;
      case "Japan":
        setType(8);
        break;
      case "Korea":
        setType(16);
        break;
      default:
        setType(0);
        break;
    }
  };
  const renderNavBar = () => (
    <NavBar
      dataSource={NavBarData}
      className="top-song-nav-bar"
      customFunction={changeCurrentActive}
    ></NavBar>
  );

  return (
    <SectionMod
      renderNavBar={renderNavBar}
      title="新歌速递"
      className="topsong-box"
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      {topSongList &&
        topSongList.map((items: any, index: number) => {
          return (
            <div key={index} className="div">
              <div
                className={`carousel-item carousel-item${index} topsong-carousel`}
              >
                {items.map((topSongItem: any) => (
                  <TopSongCard key={topSongItem.id} data={topSongItem} />
                ))}
              </div>
            </div>
          );
        })}
    </SectionMod>
  );
};
export default TopSong;
