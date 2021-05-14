/*
 * @Author: KinVen
 * @Date: 2021-05-10 19:08:37
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 05:45:02
 * @Description:
 * @Version: 1.0
 */
import { getSearch } from "@/netWork/request";
import { Table, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.less";
function callback(key: any) {
  console.log(key);
}
const { TabPane } = Tabs;
const SearchResult = () => {
  const { keywords } = useParams();
  const [offset, setOffset] = useState(0);
  const [searchResult, setSearchResult] = useState<any>(null);
  useEffect(() => {
    getSearch(keywords, offset).then((res) => {
      console.log(res.result);
      setSearchResult(res.result);
    });
    return () => {};
  }, [keywords]);
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

    if (searchResult) {
      searchResult?.songs?.map((song: any) => {
        console.log(song);
        let playListSong = {
          key: song.id,
          name: song.name,
          singer: song.ar.reduce((total: string, cur: any) => {
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
      <div className="search-result">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="歌曲" key="1">
            <div className="search-result-songs">{renderTable()}</div>
          </TabPane>
          {/* <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane> */}
        </Tabs>
      </div>
    </>
  );
};

export default SearchResult;
