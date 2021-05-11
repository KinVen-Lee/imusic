import { useEffect, useState } from "react";
import { getFirstMV } from "@netWork/request";
import "./index.less";
import SectionMod from "../SectionMod";
import NavBar from "@/component/NavBar";
import { NavBarData } from "@component/interface";
import _ from "lodash";
import { FristMVCard } from "./FirstMVCard";

/**
 * 首页最新MV
 */
const FristMV = () => {
  const [MVList, setMVList] = useState<any>(null);
  const [area, setArea] = useState("");
  useEffect(() => {
    getFirstMV({ area, limit: "30" }).then((res) =>
      setMVList(_.chunk(res.data, 10))
    );
  }, [area]);
  const NavBarData: NavBarData[] = [
    {
      data: "全部",
      key: "全部",
    },
    {
      data: "内地",
      key: "内地",
    },
    {
      data: "港台",
      key: "港台",
    },
    {
      data: "欧美",
      key: "欧美",
    },
    {
      data: "日本",
      key: "日本",
    },
    {
      data: "韩国",
      key: "韩国",
    },
  ];
  const changeCurrentActive = (active: string) => {
    switch (active) {
      case "全部":
        setArea("");
        break;
      case "内地":
        setArea("内地");
        break;
      case "港台":
        setArea("港台");
        break;
      case "欧美":
        setArea("欧美");
        break;
      case "日本":
        setArea("日本");
        break;
      case "韩国":
        setArea("韩国");
        break;
      default:
        setArea("全部");
        break;
    }
  };
  const renderNavBar = () => (
    <NavBar
      dataSource={NavBarData}
      className="top-song-nav-bar"
      customFunction={changeCurrentActive}
    ></NavBar>
  );
  return (
    <>
      <SectionMod
        title="最新MV"
        className="FirstMV-box"
        renderNavBar={renderNavBar}
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {MVList &&
          MVList.map((items: any, index: number) => {
            return (
              <div key={index} className="div">
                <div
                  className={`carousel-item carousel-item${index} fristmv-carousel`}
                >
                  {items.map((FirstMVListItem: any) => (
                    <FristMVCard
                      key={FirstMVListItem.id}
                      data={FirstMVListItem}
                    />
                  ))}
                </div>
              </div>
            );
          })}
      </SectionMod>
    </>
  );
};

export default FristMV;
