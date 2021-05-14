/*
 * @Author: KinVen
 * @Date: 2021-04-21 21:35:51
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 17:31:00
 * @Description:
 * @Version: 1.0
 */
import React, { useRef } from "react";
import "./index.less";
import carouselLeft from "@/assets/svg/carousel_left.svg";
import carouselRight from "@/assets/svg/carousel_right.svg";
import { Carousel } from "antd";
import { useState } from "react";

interface SectionModProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  children?: React.ReactNode;
}

const SectionMod = (props: SectionModProps) => {
  const { className, title, style } = props;
  const render1 = () => (
    <img
      src={carouselRight}
      className="slide-action-arrow slide-action-arrow-left"
    />
  );
  const render2 = () => (
    <img
      src={carouselLeft}
      className="slide-action-arrow slide-action-arrow-right"
    />
  );
  return (
    <div className={`mod-section ${className ?? ""}`} style={style}>
      <div className="section-content">
        {title && <div className="section-title">{title}</div>}
        <div className="section-carousel">
          <div className="carousel-content">
            <Carousel
              arrows={true}
              prevArrow={render1()}
              nextArrow={render2()}
              //   <img
              //     src={carouselRight}
              //     className="slide-action-arrow slide-action-arrow-left"
              //   />
              // }
              // nextArrow={
              //   <img
              //     src={carouselLeft}
              //     className="slide-action-arrow slide-action-arrow-right"
              //   />
              // }
            >
              {props.children}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionMod;
