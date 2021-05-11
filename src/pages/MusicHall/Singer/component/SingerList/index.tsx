/*
 * @Author: KinVen
 * @Date: 2021-05-12 00:45:30
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-12 01:49:50
 * @Description:
 * @Version: 1.0
 */
import "./index.less";

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SingerContext } from "../../context.config";
import { getArtistList } from "@/netWork/request";
import { Artist, SingerResult } from "../../utils/interface";
import SingerCard from "../SingerCard";
import { Button } from "antd";

const SingerList = () => {
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true);
  const [artistList, setArtistList] = useState<Array<Artist>>([]);
  const { state, dispatch } = useContext(SingerContext);
  const { type, area, initial } = state;
  useEffect(() => {
    getArtistList({ type, area, offset: "0", initial }).then(
      (res: SingerResult) => {
        setHasMore(res.more);
        setOffset(1);
        setArtistList(res.artists);
      }
    );
    console.log(123);
  }, [state]);

  const onLoadMore = () => {
    getArtistList({ type, area, offset, initial }).then((res: SingerResult) => {
      setHasMore(res.more);
      setOffset(offset + 1);
      setArtistList(
        res.artists.concat(artistList).filter((item: Artist) => {
          return item;
        })
      );
    });
  };

  return (
    <>
      <div className="singerlist">
        {artistList.map((artist: Artist, index: number) => (
          <SingerCard key={index} data={artist} />
        ))}
      </div>
      {hasMore && (
        <div
          className="singer-hasmore"
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 100,
            lineHeight: "100px",
            marginBottom: 20,
          }}
        >
          <Button onClick={onLoadMore}>loading more</Button>
        </div>
      )}
    </>
  );
};
export default SingerList;
