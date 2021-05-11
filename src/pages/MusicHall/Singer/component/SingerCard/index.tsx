/*
 * @Author: KinVen
 * @Date: 2021-04-21 21:35:51
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-12 01:33:13
 * @Description:
 * @Version: 1.0
 */
import "./index.less";
import { Card, Avatar } from "antd";
import { Artist } from "../../utils/interface";
import React from "react";
// import { useNavigate } from "react-router-dom";

interface SingerCardProps {
  data: Artist;
}

const SingerCard = (props: SingerCardProps) => {
  const { data } = props;
  // const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/artist/${data.id}`);
  };
  return (
    <div className="singercard" onClick={handleClick}>
      <div className="singer-pic">
        <img src={data.picUrl} />
      </div>
      <div className="singer-name">{data.name}</div>

      {/* <Card>
        <Card.Meta avatar={<Avatar src={data.picUrl} />} title={data.name} />
      </Card> */}
    </div>
  );
};

export default SingerCard;
