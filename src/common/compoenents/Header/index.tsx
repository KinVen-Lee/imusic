import { getSearchSuggest } from "@/netWork/request";
import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import {
  AutoComplete,
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Radio,
} from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.less";
import { Album, Artist, Playlist, Result, Song } from "./interface";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export const Header = () => {
  const [value, setValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  let navigate = useNavigate();

  const renderTitle = (title: string) => <span>{title}</span>;
  const renderItem = (title: string, key: number, des?: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        key={key}
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
        const options = order.map((item: string, index: number) => {
          console.log(index);

          let options: any[] = [];
          switch (item) {
            case "albums":
              options = albums.map((album: Album) =>
                renderItem(album.name, index, album.artist.name)
              );
              break;
            case "artists":
              options = artists.map((artist: Artist) =>
                renderItem(artist.name, index)
              );
              break;
            case "songs":
              options = songs.map((song: Song) => {
                return renderItem(song.name, index, song.artists[0].name);
              });
              break;
            case "playlists":
              options = playlists.map((playlist: Playlist) =>
                renderItem(playlist.name, index)
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {/* <div className="header-left"> */}
      {/* <div className="pre">
          <LeftOutlined />
        </div>
        <div className="next">
          <RightOutlined />
        </div>
      </div> */}
      <div className="header-center">
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          options={options}
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={(value: string) => {
            navigate(`/search/${value}`);
          }}
        ></AutoComplete>
      </div>
      {/* <div className="header-right">
        <div className="userinfo" onClick={showModal}>
          <div className="image">
            <Avatar icon={<UserOutlined />} />
          </div>
          <div className="name">点击登录</div>
        </div>
      </div>
      <Modal
        // title="Basic Modal"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Radio.Group
          defaultValue="a"
          size="large"
          className="login-select"
          buttonStyle="solid"
        >
          <Radio.Button value="a">手机登录</Radio.Button>
          <Radio.Button value="b">二维码登录</Radio.Button>
        </Radio.Group>

        <div className="login-content">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal> */}
    </>
  );
};

export default Header;
