import { useEffect, useState } from "react";
import { getPersonalizedDjprogram } from "@netWork/request";

import "./index.less";

/**
 * 推荐电台
 */
const AlbumRecom = () => {
  const [songList, setSongList] = useState<any>(null);
  useEffect(() => {
    getPersonalizedDjprogram().then((res) =>
      setSongList(res.result)
    );
  }, []);

  return (
    <>
      <div className="album-Recom">
        <div className="title">
          <h2>推荐电台</h2>
        </div>
      </div>
    </>
  );
};

export default AlbumRecom;
