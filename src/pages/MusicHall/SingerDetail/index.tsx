/*
 * @Author: KinVen
 * @Date: 2021-05-10 19:08:37
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 04:09:45
 * @Description:
 * @Version: 1.0
 */
import {
  getSimilarSinger,
  getSingerAlbum,
  getSingerDesc,
  getSingerDetail,
  getSingerMV,
  getSingerSong,
} from "@/netWork/request";
import { Table, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingerCard from "../Singer/component/SingerCard";
import "./index.less";
import { SingerDetailResult } from "./utils/interface";

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}
const SingerDetail = () => {
  const { id } = useParams();
  const [singerDate, setSingerData] = useState<any>(null);
  const [singerAlbum, setSingerAlbum] = useState<any>(null);
  const [singerMV, setSingerMV] = useState<any>(null);
  const [similarSinger, setSimilarSinger] = useState<any>(null);
  const [singerSong, setSingerSong] = useState<any>(null);
  const [singerDesc, setSingerDesc] = useState<any>(null);

  useEffect(() => {
    console.log(id);

    getSingerDetail(id).then((res: SingerDetailResult) => {
      console.log(res);
      setSingerData(res.data);
    });
    getSingerSong(id).then((res) => {
      console.log(res);
      setSingerSong(res.hotSongs.slice(0, 10));
    });
    getSingerMV(id).then((res) => {
      setSingerMV(res.mvs.slice(0, 5));
    });
    getSingerAlbum(id).then((res) => {
      console.log(res);
      setSingerAlbum(res.hotAlbums.slice(0, 6));
    });
    getSingerDesc(id).then((res) => {
      console.log(res);
      setSingerDesc(res);
    });
    getSimilarSinger(id).then((res) => {
      if (res?.artists?.length > 5) {
        setSimilarSinger(res.artists.slice(0, 5));
      } else {
        setSimilarSinger(res?.artists);
      }

      console.log(res.artists.slice(0, 5));
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

    if (singerSong) {
      singerSong?.map((song: any) => {
        console.log(song);
        let playListSong = {
          key: song.id,
          name: song.name,

          album: song.al.name,
        };
        tracks.push(playListSong);
      });
    }

    return <Table columns={columns} dataSource={tracks} pagination={false} />;
  };
  return (
    <>
      <div className="singer-detail">
        <div className="singer-detail-cover">
          <img src={singerDate?.artist?.cover} alt="" />
          {/* <div className="singer-name">{singerDate?.artist?.name}</div> */}
        </div>

        <div className="singer-detail-content">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="精选" key="1">
              <div className="hot-song">
                <div className="hot-song-header">热门歌曲</div>
                <div className="hot-song-content">{renderTable()}</div>
              </div>
              <div className="hot-ablum">
                <div className="hot-ablum-header">热门专辑</div>
                <div className="hot-ablum-content">
                  <div className="hot-albums">
                    {singerAlbum &&
                      singerAlbum.map((album: any) => {
                        return (
                          <div className="hot-album-card" key={album.id}>
                            <img src={album.picUrl} className="album-cover" />
                            <h4 className="album-title">
                              <span className="album-title-txt">
                                {album.name}
                              </span>
                            </h4>
                            <div className="album-publishTime">
                              {album.publishTime}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="recommend-mv">
                <div className="recommend-mv-header">推荐视频</div>
                <div className="recommend-mv-content">
                  {singerMV?.map((mv: any) => {
                    return (
                      <div className="recomend-mv-card" key={mv.id}>
                        <img
                          className="recomend-mv-cover"
                          src={mv.imgurl}
                        ></img>
                        <div className="recomend-mv-name">{mv.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="similar-singer">
                <div className="similar-singer-header">相似歌手</div>
                <div className="similar-singer-content">
                  {similarSinger?.map((singer: any) => (
                    <div className="similar-singer-card" key={singer.id}>
                      <img
                        className="similar-singer-pic"
                        src={singer.picUrl}
                      ></img>
                      <div className="similar-singer-name">{singer.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPane>
            <TabPane tab={`歌曲 ${singerDate?.artist?.musicSize}`} key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab={`专辑 ${singerDate?.artist?.albumSize}`} key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab={`视频 ${singerDate?.artist?.mvSize}`} key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="详情" key="5">
              <div className="singer-briefDesc">{singerDesc?.briefDesc}</div>
              {singerDesc?.introduction.map((item: any, index: number) => {
                return (
                  <div
                    className={`singer-introduction-${index + 1}`}
                    key={index}
                  >
                    <div className="singer-introduction-title">{item.ti}</div>
                    <div className="singer-introduction-txt">{item.txt}</div>
                  </div>
                );
              })}
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SingerDetail;
