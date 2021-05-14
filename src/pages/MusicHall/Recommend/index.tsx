/*
 * @Author: KinVen
 * @Date: 2021-05-10 19:18:54
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 05:45:47
 * @Description:
 * @Version: 1.0
 */
import React from "react";
import BannerArea from "./components/Banner";
import DjprogramArea from "./components/Djprogram";
import MVArea from "./components/MV";
import NewSongArea from "./components/NewSong";
import SongListArea from "./components/SongList";
import "./index.less";

const Recommend = () => {
  return (
    <>
      <div className="recommend">
        <BannerArea />
        <SongListArea />
        <NewSongArea />
        <MVArea />
        {/* <DjprogramArea /> */}
      </div>
    </>
  );
};
export default Recommend;
