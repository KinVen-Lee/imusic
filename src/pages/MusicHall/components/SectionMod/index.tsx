import React, { useRef } from "react";
import "./index.less";
import carouselLeft from "@assets/svg/carousel_left.svg";
import carouselRight from "@assets/svg/carousel_right.svg";
import { Carousel } from "antd";

interface SectionModProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  renderNavBar?: any;
  renderCarousel?: any;
  children?: React.ReactNode;
}

const SectionMod = (props: SectionModProps) => {
  const { className, title, renderNavBar, renderCarousel, style } = props;
  const carouselRef = useRef(null);
  const handleNext = () => {
    (carouselRef.current as any).next();
  };

  const handlePre = () => {
    (carouselRef.current as any).prev();
  };
  // console.log(renderCarousel);
  return (
    <div className={`mod-section ${className ?? ""}`} style={style}>
      <div className="section-content">
        {title && <div className="section-title">{title}</div>}
        {renderNavBar && (
          <div className="section-nav-bar">{renderNavBar()}</div>
        )}
        <div className="section-carousel">
          {/* <Carousel ref={carouselRef}>{renderCarousel()}</Carousel> */}
          <div className="carousel-content">
            <Carousel ref={carouselRef}> {props.children}</Carousel>
          </div>
          <div className="section-slide">
            <div className="slide-action slide-action-left">
              <a
                className="slide-action-btn slide-action-btn-left"
                onClick={handlePre}
              >
                <i className="icon-txt">上一页</i>
                <img
                  src={carouselRight}
                  className="slide-action-arrow slide-action-arrow-left"
                />
              </a>
            </div>
            <div className="slide-action slide-action-right">
              <a
                className="slide-action-btn slide-action-btn-right"
                onClick={handleNext}
              >
                <i className="icon-txt">下一页</i>
                <img
                  src={carouselLeft}
                  className="slide-action-arrow slide-action-arrow-right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
SectionMod.defalutProps = {};
export default SectionMod;
