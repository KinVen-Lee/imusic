/*
 * @Author: KinVen
 * @Date: 2021-04-21 21:35:51
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-11 16:33:56
 * @Description:
 * @Version: 1.0
 */
import { useEffect, useState } from "react";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { Djprogram, DjprogramResult } from "./interface";
import { getPersonalizedDjprogram } from "@/netWork/request";
/**
 * 推荐新音乐
 */
const DjprogramArea = () => {
  const [jprogramList, setDjprogramList] = useState<Array<Djprogram>>([]);
  useEffect(() => {
    getPersonalizedDjprogram().then((res: DjprogramResult) => {
      setDjprogramList(res.result);
    });
  }, []);
  return (
    <SectionMod
      className="djprogram"
      title="推荐电台"
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
    ></SectionMod>
  );
};
export default DjprogramArea;
