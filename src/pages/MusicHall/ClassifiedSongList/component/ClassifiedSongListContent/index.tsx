/*
 * @Author: KinVen
 * @Date: 2021-05-12 00:45:30
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 19:57:59
 * @Description:
 * @Version: 1.0
 */

import { getTopPlayList } from "@/netWork/request";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClassifiedSongListContext } from "../../context.config";
import { Playlist, TopListResult } from "../../utils/interface";
import "./index.less";

interface ClassifiedSongListContentProps {
  className?: string;
  style?: React.CSSProperties;
}

const ClassifiedSongListContent = (props: ClassifiedSongListContentProps) => {
  const { className } = props;
  const { state, dispatch } = useContext(ClassifiedSongListContext);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const { cat, offset, order } = state;
    getTopPlayList(cat, offset, order).then((res: TopListResult) => {
      // console.log(res.playlists);
      setPlaylists(res.playlists);
      setHasMore(res.more);
    });
    return () => {};
  }, [state]);

  const renderItem = () => {
    return (
      <>
        {playlists.map((playlist: Playlist) => {
          return (
            <Link to={`/songlist/detail/${playlist.id}`} key={playlist.id}>
              <div className="songlist-card">
                <div className="songlist-card-cover">
                  <img
                    src={playlist.coverImgUrl}
                    alt=""
                    className="songlist-pic"
                  />
                </div>
                <h4 className="songlist-title">
                  <span className="songlist-title-des">
                    {playlist.description}
                  </span>
                  <span className="songlist-title-txt">{playlist.name}</span>
                </h4>
              </div>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="classifiedSongList-list-content">{renderItem()}</div>
      {hasMore ? (
        <div className="hasMore">加载更多</div>
      ) : (
        <span className="hasMore">已经到底了</span>
      )}
    </>
  );
};
export default ClassifiedSongListContent;
