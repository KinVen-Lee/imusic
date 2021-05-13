/*
 * @Author: KinVen
 * @Date: 2021-04-13 18:45:16
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 01:26:50
 * @Description:
 * @Version: 1.0
 */
import { UserOutlined } from "@ant-design/icons";
import MusicHall from "@pages/MusicHall";
import { Layout, Menu } from "antd";
import React from "react";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.less";
import Header from "./common/compoenents/Header";
import MusicPlay from "./common/compoenents/MusicPlay";
import RankDetail from "./pages/MusicHall/RankDetail";
import SingerDetail from "./pages/MusicHall/SingerDetail";
import SongListDetail from "./pages/MusicHall/SongListDetail";

const { Content, Footer, Sider } = Layout;

const App = () => {
  return (
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
              </Routes>

              {/* <Switch>
                <Route path="/pageOne" render={() => 
                  <MusicHall>
                    <Route exact path="/pageOne" component={PageOneChildOne}/>
                    <Route path="/pageOne/PageOneChildTwo" component={PageOneChildTwo}/>
                  </MusicHall>
                }/>
                <Route path="/pageTwo" render={() => 
                  <PageTwo>
                    <Route exact path="/pageTwo" component={PageTwoChildOne}/>
                    <Route path="/pageTwo/PageOneChildTwo" component={PageTwoChildTwo}/>
                  </PageTwo>
                }/>
                <Redirect exact to="/pageOne" from='/' /> */}
              {/* <Route path="/" component={MusicHall} /> */}
            </Content>
            {/* <Route path="/songlist/detail/:id" component={SongListDetail} /> */}
            <div className="imusic-footer">
              <MusicPlay />
            </div>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
