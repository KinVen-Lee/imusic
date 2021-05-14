/*
 * @Author: KinVen
 * @Date: 2021-04-21 21:35:51
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 17:20:22
 * @Description:
 * @Version: 1.0
 */
import { useContext, useEffect, useState } from "react";

import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { Artist, NewSong, NewSongResult } from "./interface";
import {
  getPersonalizedNewSong,
  getSongLyric,
  getSongUrl,
} from "@/netWork/request";
import { GlobalContext } from "@/globalConfig";
/**
 * 推荐新音乐
 */
const NewSongArea = () => {
  const [newSongList, setNewSongList] = useState<Array<NewSong>>([]);
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    getPersonalizedNewSong().then((res: NewSongResult) => {
      setNewSongList(res.result);
    });
  }, []);
  const getSingers = (artistArr: Artist[]) => {
    let singerNames = "";
    artistArr.forEach((artist) => {
      singerNames += artist.name + "  ";
    });
    return singerNames;
  };
  return (
    <SectionMod
      className="newsong"
      title="推荐新音乐"
      style={{
        transform: "translate3d(0, 0, 0)",
        // height: "150px",
        width: "100%",
      }}
    >
      {newSongList &&
        _.chunk(newSongList, 5).map((items: any, index: number) => {
          return (
            <div className="newsong-wrapper" key={index}>
              {items.map((songlistItem: NewSong) => (
                <div
                  className="newsong-card"
                  key={songlistItem.id}
                  onClick={() => {
                    getSongUrl(songlistItem.id.toString()).then((res) => {
                      console.log(res);
                      console.log(songlistItem);
                      console.log(123);
                      getSongLyric(songlistItem.id.toString()).then(
                        (lyricRes: any) => {
                          dispatch({
                            type: "updataPlayMusic",
                            payload: {
                              currentMusic: {
                                url: res?.data[0]?.url,
                                name: songlistItem.name,
                                artist: songlistItem?.song?.artists[0].name,
                                cover: songlistItem.picUrl,
                                lrc: lyricRes.lrc.lyric,
                              },
                            },
                          });
                        }
                      );
                    });
                    console.log(songlistItem.id);
                  }}
                >
                  <div className="newsong-card-cover">
                    <img
                      src={songlistItem.picUrl}
                      alt={songlistItem.copywriter ?? ""}
                      className="newsong-pic"
                    />
                  </div>
                  <h4 className="newsong-title">
                    <span className="newsong-title-txt">
                      {songlistItem.name}
                    </span>
                  </h4>
                  <div className="newsong-singer">
                    {getSingers(songlistItem.song.artists)}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
    </SectionMod>
  );
};
export default NewSongArea;
