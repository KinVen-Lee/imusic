import { getSearchSuggest } from "@/netWork/request";
import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { AutoComplete, Avatar, Input } from "antd";
import React from "react";
import { useState } from "react";
import "./index.less";
import { Album, Artist, Playlist, Result, Song } from "./interface";

export const Header = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const renderTitle = (title: string) => (
    <span>
      {title}
      <a
        style={{ float: "right" }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
  const renderItem = (title: string, des?: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>
          <UserOutlined /> {des}
        </span>
      </div>
    ),
  });
  const onChange = (data: string) => {
    setValue(data);
  };
  const onSearch = (searchText: string) => {
    if (searchText) {
      getSearchSuggest(searchText).then((res: Result) => {
        const { albums, artists, songs, playlists, order } = res.result;
        if (!Array.isArray(order)) {
          setOptions([]);
          return;
        }
        const options = order.map((item: string) => {
          let options: any[] = [];
          switch (item) {
            case "albums":
              options = albums.map((album: Album) =>
                renderItem(album.name, album.artist.name)
              );
              break;
            case "artists":
              options = artists.map((artist: Artist) =>
                renderItem(artist.name)
              );
              break;
            case "songs":
              options = songs.map((song: Song) => {
                return renderItem(song.name, song.artists[0].name);
              });
              break;
            case "playlists":
              options = playlists.map((playlist: Playlist) =>
                renderItem(playlist.name)
              );
              break;
            default:
              options = [];
              break;
          }
          return {
            label: renderTitle(item),
            options,
          };
        });
        setOptions(options);
      });
    }
  };
  return (
    <>
      <div className="header-left">
        <div className="pre">
          <LeftOutlined />
        </div>
        <div className="next">
          <RightOutlined />
        </div>
      </div>
      <div className="header-center">
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          options={options}
          style={{ width: 200 }}
          onSearch={onSearch}
        ></AutoComplete>
      </div>
      <div className="header-right">
        <div className="userinfo">
          <div className="image">
            <Avatar icon={<UserOutlined />} />
          </div>
          <div className="name">点击登录</div>
        </div>
      </div>
    </>
  );
};

export default Header;
