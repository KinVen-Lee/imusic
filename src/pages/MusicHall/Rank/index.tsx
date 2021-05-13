/*
 * @Author: KinVen
 * @Date: 2021-05-10 19:08:37
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 21:05:42
 * @Description:
 * @Version: 1.0
 */
import "./index.less";

import React, { createContext, useEffect, useState } from "react";
import { Song, TopListItem, TopListResult, Track } from "./utils/interface";
import { getTopListDetail } from "@/netWork/request";
import { Link } from "react-router-dom";

const Rank = () => {
  const [toplist, setTopList] = useState<TopListItem[]>([]);
  useEffect(() => {
    getTopListDetail().then((res: TopListResult) => {
      console.log(res);
      setTopList(res.list);
    });
  }, []);

  const renderItem = () => {
    let characteristic: TopListItem[] = []; //特色榜
    let media: TopListItem[] = []; //全球媒体榜
    toplist.length > 0 &&
      toplist.forEach((item: TopListItem) => {
        item?.ToplistType ? characteristic.push(item) : media.push(item);
      });
    console.log(characteristic, media);
    return (
      <>
        <div className="characteristic-toplist">
          <div className="characteristic-toplist-title">云音乐特色榜</div>
          <div className="characteristic-toplist-content">
            {characteristic.length > 0 &&
              characteristic.map((item: TopListItem) => {
                return (
                  <Link
                    to={`/rank/detail/${item.id}`}
                    className="characteristic-toplist-item"
                    key={item.id}
                  >
                    <div className="toplist-item-cover">
                      <img src={item.coverImgUrl} alt="" />
                    </div>
                    <div className="toplist-item-des">
                      <div className="toplist-item-title">{item.name}</div>
                      <div className="toplist-item-songs">
                        {item.tracks.length > 0 &&
                          item.tracks.map((songItem: Track, index: number) => {
                            return (
                              <div className="toplist-song-item" key={index}>
                                {`${index + 1}  ${songItem.first}-${
                                  songItem.second
                                }`}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="media-toplist">
          <div className="media-toplist-title">全球媒体榜</div>
          <div className="media-toplist-content">
            {media.length > 0 &&
              media.map((item: TopListItem) => {
                return (
                  <Link
                    to={`/rank/detail/${item.id}`}
                    className="media-toplist-item"
                    key={item.id}
                  >
                    <div className="media-toplist-item" key={item.id}>
                      <div className="media-toplist-item-cover">
                        <img src={item.coverImgUrl} alt="" />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </>
    );
  };

  return <div className="toplist">{renderItem()}</div>;
};

export default Rank;
