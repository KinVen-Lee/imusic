/*
 * @Author: KinVen
 * @Date: 2021-05-13 02:19:13
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 19:29:44
 * @Description:
 * @Version: 1.0
 */
/*
 * @Author: KinVen
 * @Date: 2021-05-10 19:08:37
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 16:53:12
 * @Description:
 * @Version: 1.0
 */
import { getPlayListDetail } from "@/netWork/request";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.less";
import { Ar, PlayListDetailResult, Track } from "./utils/interface";

const SongListDetail = () => {
  let { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    console.log(id);
    getPlayListDetail(id).then((res: PlayListDetailResult) => {
      console.log(res);
      setData(res);
    });
    return () => {};
  }, []);

  const renderTable = () => {
    const columns = [
      {
        title: "歌曲",
        dataIndex: "name",
        key: "name",
        render: (text: string) => <span className="song-name">{text}</span>,
      },
      {
        title: "歌手",
        dataIndex: "singer",
        key: "singer",
      },
      {
        title: "专辑",
        dataIndex: "album",
        key: "album",
      },
      {
        title: "时长",
        key: "time",
        dataIndex: "time",
      },
    ];

    let tracks: any = [];

    if (data) {
      data.playlist.tracks.map((song: Track) => {
        console.log(song);
        let playListSong = {
          key: song.id,
          name: song.name,
          singer: song.ar.reduce((total: string, cur: Ar) => {
            if (total === "") {
              return `${cur.name}`;
            }
            return `${total}  /  ${cur.name} `;
          }, ""),
          album: song.al.name,
        };
        tracks.push(playListSong);
      });
    }

    return <Table columns={columns} dataSource={tracks} />;
  };

  return (
    <>
      <div className="playList-detail">
        <div className="playList-detail-header">
          <div className="playList-detail-header playList-cover">
            <img
              className="playList-pic"
              src={data?.playlist?.coverImgUrl}
              alt=""
            />
          </div>
          <div className="playList-detail-header playList-des">
            <div className="playList-name">{data?.playlist?.name}</div>
            <div className="playList-tags">
              {data?.playlist?.tags.map((tag: string) => {
                return (
                  <div className="playList-tag" key={tag}>{`#${tag}`}</div>
                );
              })}
            </div>
            <div className="playList-description">
              {data?.playlist?.description}
            </div>
            <div className="playList-other">
              <div className="playList-play-all"></div>
            </div>
          </div>
        </div>
        <div className="playList-detail-content">{renderTable()}</div>
      </div>
    </>
  );
};

export default SongListDetail;
