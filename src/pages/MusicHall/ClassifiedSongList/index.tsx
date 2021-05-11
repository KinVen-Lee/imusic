/*
 * @Author: KinVen
 * @Date: 2021-05-10 19:08:37
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-12 02:07:39
 * @Description:
 * @Version: 1.0
 */
import "./index.less";

import "./index.less";
import React, { createContext, useEffect, useState } from "react";
import { getPlayListCatList } from "@/netWork/request";
import { ClassifiedSongListResult } from "./utils/interface";

const ClassifiedSongList = () => {
  const [sub, setSub] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    getPlayListCatList().then((res: ClassifiedSongListResult) => {
      console.log(res);
      setCategories(res.categories);
      setSub(res.sub);
    });
  }, []);
  return (
    <>
      <div>
        <h1>分类歌单</h1>
      </div>
    </>
  );
};

export default ClassifiedSongList;
