/*
 * @Author: KinVen
 * @Date: 2021-04-13 18:49:48
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 17:52:34
 * @Description:
 * @Version: 1.0
 */
import { useEffect, useState } from "react";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { SongList } from "./interface";
import { getPersonalizedSongList } from "../../../../../netWork/request";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import SongListDetail from "@/pages/MusicHall/SongListDetail";

/**
 * 推荐歌单
 */
const SongListArea = () => {
  const [songlist, setSongList] = useState<Array<SongList>>([]);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    getPersonalizedSongList().then((res) => {
      setSongList(res.result);
    });
    console.log(path, url);
  }, []);
  return (
    <SectionMod
      className="recommend-songlist"
      title="推荐歌单"
      style={{
        transform: "translate3d(0, 0, 0)",
        width: "100%",
        position: "relative",
      }}
    >
      {songlist &&
        _.chunk(songlist, 5).map((items: any, index: number) => {
          return (
            <div className="songlist-warpper" key={index}>
              {items.map((songlistItem: SongList) => (
                <Link
                  to={`/songlist/detail/${songlistItem.id}`}
                  key={songlistItem.id}
                  onClick={() => {
                    console.log(`/songlist/detail/${songlistItem.id}`);
                  }}
                >
                  <div
                    className="songlist-card"
                    onClick={() => {
                      console.log(11);
                    }}
                  >
                    <div className="songlist-card-cover">
                      <img
                        src={songlistItem.picUrl}
                        alt={songlistItem.copywriter}
                        className="songlist-pic"
                      />
                    </div>
                    <h4 className="songlist-title">
                      <span className="songlist-title-txt">
                        {songlistItem.name}
                      </span>
                    </h4>
                    <div className="songlist-palycount">
                      播放量：{songlistItem.playCount}
                    </div>
                  </div>
                </Link>
              ))}
              <Switch>
                <Route path={`${path}/:id`}>
                  <SongListDetail />
                </Route>
              </Switch>
            </div>
            // </div>
          );
        })}
    </SectionMod>
  );
};
export default SongListArea;
