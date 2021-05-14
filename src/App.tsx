/*
 * @Author: KinVen
 * @Date: 2021-04-13 18:45:16
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 17:19:11
 * @Description:
 * @Version: 1.0
 */
import { UserOutlined } from "@ant-design/icons";
import MusicHall from "@pages/MusicHall";
import { Layout, Menu } from "antd";
import React, { useReducer } from "react";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.less";
import Header from "./common/compoenents/Header";
import MusicPlay from "./common/compoenents/MusicPlay";
import { GlobalContext } from "./globalConfig";
import RankDetail from "./pages/MusicHall/RankDetail";
import SearchResult from "./pages/MusicHall/SearchResult";
import SingerDetail from "./pages/MusicHall/SingerDetail";
import SongListDetail from "./pages/MusicHall/SongListDetail";

const { Content, Footer, Sider } = Layout;
interface IInitState {
  currentMusic: any;
  musicList: any[];
  volume: number;
}
const initState: IInitState = {
  currentMusic: {
    url: "",
    name: "未知",
    artist: "未知",
    cover: "",
    lrc: "无",
  },
  musicList: [],
  volume: 1,
};

const App = () => {
  const [state, dispatch] = useReducer(
    (state: any, action: { type: string; payload: any }) => {
      switch (action.type) {
        case "updataPlayMusic":
          return {
            ...state,
            currentMusic: { ...action.payload.currentMusic },
          };

        case "addMusic":
          return {
            ...state,
            musicList: state.musicList.push(action.payload.music),
          };
        case "updata":
          return {
            ...state,
            volume: action.payload.volume,
          };
        default:
          return state;
      }
    },
    initState
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="imusic-main">
          <Layout className="imusic-layout">
            <Sider className="imusic-sider">
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.ItemGroup key="g1" title="在线音乐">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/">音乐馆</Link>
                  </Menu.Item>
                  {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/mv">视频</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  电台
                </Menu.Item> */}
                </Menu.ItemGroup>
                {/* <Menu.ItemGroup key="g2" title="我的音乐">
                <Menu.Item key="4" icon={<BarChartOutlined />}>
                  我喜欢
                </Menu.Item>
                <Menu.Item key="5" icon={<CloudOutlined />}>
                  播放历史
                </Menu.Item>
                <Menu.Item key="6" icon={<AppstoreOutlined />}>
                  试听列表
                </Menu.Item>
                <Menu.Item key="7" icon={<TeamOutlined />}>
                  创建歌单
                </Menu.Item>
                <Menu.Item key="8" icon={<ShopOutlined />}>
                  收藏歌单
                </Menu.Item>
              </Menu.ItemGroup> */}
              </Menu>
            </Sider>
            <Layout className="imusic-main-container">
              <Layout.Header className="imusic-header">
                <Header></Header>
              </Layout.Header>
              <Content className="imusic-content" style={{ overflow: "auto" }}>
                <Routes>
                  <Route path="/*" element={<MusicHall />} />
                  <Route
                    path="/songlist/detail/:id"
                    element={<SongListDetail />}
                  />
                  <Route path="/singer/detail/:id" element={<SingerDetail />} />
                  <Route path="/rank/detail/:id" element={<RankDetail />} />
                  <Route path="/search/:keywords" element={<SearchResult />} />
                </Routes>
              </Content>
              <div className="imusic-footer">
                <MusicPlay />
              </div>
            </Layout>
          </Layout>
        </div>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
