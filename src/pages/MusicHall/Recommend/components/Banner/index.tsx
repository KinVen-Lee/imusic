/*
 * @Author: KinVen
 * @Date: 2021-04-21 21:35:51
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-11 15:54:16
 * @Description:
 * @Version: 1.0
 */
import { useEffect, useState } from "react";

import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { Banner } from "./interface";
import { getBanner } from "../../../../../netWork/request";

/**
 * 首页banner
 */
const BannerArea = () => {
  const [bannerList, setBannerList] = useState<Array<any>>([]);
  useEffect(() => {
    getBanner().then((res) => setBannerList(_.chunk(res.banners, 2)));
  }, []);
  return (
    <SectionMod
      className="banner"
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {bannerList &&
        bannerList.map((items: any, index: number) => {
          return (
            <div key={index}>
              <div
                className={`carousel-item carousel-item${index} banner-carousel`}
              >
                {items.map((bannerListItem: Banner) => (
                  <div className="banner-card" key={bannerListItem.imageUrl}>
                    <a href="#" className="banner-link">
                      <img
                        src={bannerListItem.imageUrl}
                        className="banner-pic"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </SectionMod>
  );
};
export default BannerArea;
