/*
 * @Author: KinVen
 * @Date: 2021-05-12 00:45:30
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 02:04:33
 * @Description:
 * @Version: 1.0
 */
import { Tag } from "antd";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { ClassifiedSongListContext } from "../../context.config";
import { All } from "../../utils/interface";
import "./index.less";

const { CheckableTag } = Tag;
interface ClassifiedSongListTargetProps {
  className?: string;
  style?: React.CSSProperties;
  tagsData?: any[];
  cat?: any;
}

const ClassifiedSongListTarget = (props: ClassifiedSongListTargetProps) => {
  const { tagsData, cat, className } = props;
  // console.log(tagsData, cat);

  const [selectedTag, setSelectedTag] = useState("");
  const { state, dispatch } = useContext(ClassifiedSongListContext);
  const handleChange = (tag: All) => {
    setSelectedTag(tag.name);
    dispatch({ type: "cat", payload: { cat: tag.name } });
  };

  return (
    <>
      <div className="classifiedSongList-targetItem">
        <div className="classifiedSongList-targetItem-title">{cat.name}</div>
        <div className="classifiedSongList-targetItem-content">
          <div className="class-target">
            {tagsData &&
              tagsData.map((tag: All) => (
                <CheckableTag
                  key={tag.name}
                  checked={state.cat === tag.name}
                  onChange={() => handleChange(tag)}
                >
                  {tag.name}
                </CheckableTag>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ClassifiedSongListTarget;
