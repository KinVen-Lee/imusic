/*
 * @Author: KinVen
 * @Date: 2021-05-12 00:45:30
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-12 00:58:07
 * @Description:
 * @Version: 1.0
 */
import { Tag } from "antd";
import React, { useContext, useState } from "react";
import { ClassifiedSongListContext } from "../../context.config";
import "./index.less";

const { CheckableTag } = Tag;
interface SingerTargetProps {
  className?: string;
  style?: React.CSSProperties;
  tagsData: Tag[];
  type: string;
}
interface Tag {
  data: string;
  key: string;
}
const SingerTarget = (props: SingerTargetProps) => {
  const { tagsData, type, className } = props;
  const [selectedTag, setSelectedTag] = useState(tagsData[0]);
  const { dispatch } = useContext(ClassifiedSongListContext);
  const handleChange = (tag: Tag) => {
    setSelectedTag(tag);
    switch (type) {
      case "area":
        dispatch({
          type,
          payload: { area: tag.key },
        });
        break;
      case "type":
        dispatch({
          type,
          payload: { type: tag.key },
        });
        break;
      case "initial":
        dispatch({
          type,
          payload: { initial: tag.key },
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className="singer-target">
      {tagsData.map((tag: Tag) => (
        <CheckableTag
          key={tag.key}
          checked={selectedTag.data === tag.data}
          onChange={() => handleChange(tag)}
        >
          {tag.data}
        </CheckableTag>
      ))}
    </div>
  );
};
export default SingerTarget;
