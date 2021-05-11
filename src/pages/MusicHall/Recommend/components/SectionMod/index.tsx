/*
 * @Author: KinVen
 * @Date: 2021-04-21 21:35:51
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-11 16:10:35
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
  const carouselRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleNext = () => {
    (carouselRef.current as any).next();
  };

  const handlePre = () => {
    (carouselRef.current as any).prev();
  };

  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };
  return (
    <div className={`mod-section ${className ?? ""}`} style={style}>
      <div className="section-content">
        {title && <div className="section-title">{title}</div>}
        <div
          className="section-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-content">
            <Carousel ref={carouselRef}>{props.children}</Carousel>
          </div>
          {show && (
            <div className="section-slide">
              <div
                className="slide-action slide-action-left"
                onClick={handlePre}
              >
                <img
                  src={carouselRight}
                  className="slide-action-arrow slide-action-arrow-left"
                />
              </div>
              <div
                className="slide-action slide-action-right"
                onClick={handleNext}
              >
                <img
                  src={carouselLeft}
                  className="slide-action-arrow slide-action-arrow-right"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SectionMod;
