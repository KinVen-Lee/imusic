import { useEffect, useState } from "react";
import { getTopListDetail } from "@netWork/request";
import "./index.less";
import { TopListCard } from "./TopListDetailCard";

/**
 * 首页排行榜摘要
 */
const TopListDetail = () => {
  const [topListDetail, setTopListDetail] = useState<any>(null);
  useEffect(() => {
    getTopListDetail("/api/toplist/detail").then((res) =>
      setTopListDetail(res.list.slice(0, 4))
    );
  }, []);

  return (
    <>
      <div className="toplist-detail">
        <div className="title">
          <h2>排行榜</h2>
        </div>
        <div className="toplist-container">
          {topListDetail &&
            topListDetail.map((item: any, index: number) => {
              return <TopListCard key={item.id} data={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default TopListDetail;
