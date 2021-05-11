import React, { useEffect, useState } from "react";
import { getPersonalizedNewSong, getSongListRecom } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import SectionMod from "../SectionMod";
import { SongListCard } from "./RecommendCard";
import "./index.less";
import { NavBarData } from "@component/interface";
import NavBar from "@/component/NavBar";
import { Carousel } from "antd";
// SwiperCore.use([Navigation, Pagination, Autoplay]);
const Recommend = () => {
  const [dataList, setDataList] = useState<any>(null);
  const [currentActive, setCurrentActive] = useState<string>("推荐歌单");
  const NavBarData: NavBarData[] = [
    {
      data: "推荐歌单",
      key: "推荐歌单",
    },
    {
      data: "推荐音乐",
      key: "推荐音乐",
    },
    {
      data: "推荐电台",
      key: "推荐电台",
    },
    {
      data: "推荐MV",
      key: "推荐MV",
    },
    {
      data: "推荐节目",
      key: "推荐节目",
    },
  ];
  const handleChangeCurrentActive = (active: string) => {
    setCurrentActive(active);
  };

  const renderNavBar = () => (
    <NavBar
      dataSource={NavBarData}
      className="top-song-nav-bar"
      customFunction={handleChangeCurrentActive}
    ></NavBar>
  );

  useEffect(() => {
    switch (currentActive) {
      case "推荐歌单":
        getSongListRecom().then((res) => setDataList(_.chunk(res, 5)));
        break;
      case "推荐音乐":
        getPersonalizedNewSong().then((res) =>
          setDataList(_.chunk(res.result, 5))
        );
        break;
      case "推荐电台":
        console.log(3);

        break;
      case "推荐MV":
        console.log(4);

        break;
      case "推荐节目":
        console.log(5);

        break;
      default:
        break;
    }
  }, [currentActive]);
  const style = {
    width: "100%",
    display: "flex",
  };
  return (
    <SectionMod
      title="为你推荐"
      className="Recommend"
      renderNavBar={renderNavBar}
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      {dataList &&
        dataList.map((items: any, index: number) => {
          return (
            <div key={index} className="div">
              <div
                className={`carousel-item carousel-item${index} Recommend-carousel`}
                style={style}
              >
                {items.map(
                  (songListItem: any) =>
                    currentActive === "推荐歌单" && (
                      <SongListCard key={songListItem.id} data={songListItem} />
                    )
                )}
              </div>
            </div>
          );
        })}
    </SectionMod>
  );
};

export default Recommend;
