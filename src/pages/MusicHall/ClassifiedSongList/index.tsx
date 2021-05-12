/*
 * @Author: KinVen
 * @Date: 2021-05-10 19:08:37
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 01:51:23
 * @Description:
 * @Version: 1.0
 */
import "./index.less";

import "./index.less";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { getPlayListCatList, getTopPlayList } from "@/netWork/request";
import {
  All,
  ClassifiedSongListResult,
  Playlist,
  TopListResult,
} from "./utils/interface";
import ClassifiedSongListTarget from "./component/ClassifiedSongListTarget";
import { ClassifiedSongListContext } from "./context.config";
import ClassifiedSongListContent from "./component/ClassifiedSongListContent";

interface IInitState {
  cat: string;
  order: "new" | "hot";
  offset: number;
}

const ClassifiedSongList = () => {
  const initState: IInitState = {
    cat: "",
    order: "new",
    offset: 0,
  };

  const [state, dispatch] = useReducer(
    (state: any, action: { type: string; payload: any }) => {
      switch (action.type) {
        case "cat":
          return {
            ...state,
            cat: action.payload.cat,
          };

        case "order":
          return {
            ...state,
            order: action.payload.order,
          };
        case "offset":
          return {
            ...state,
            offset: action.payload.offset,
          };
        default:
          return state;
      }
    },
    initState
  );

  // const [sub, setSub] = useState<any>(null);
  // const [categories, setCategories] = useState<any>(null);

  const [playListCatList, setPlayListCatList] = useState<any>(null);

  // const [offset, setOffset] = useState<number>(0);
  // const [cat, setCat] = useState<string>("");
  // const [order, setOrder] = useState<string>("new");

  // const [playlists, setPlaylists] = useState<Playlist[]>([]);
  // const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    getPlayListCatList().then((res: ClassifiedSongListResult) => {
      // console.log(res);
      setPlayListCatList(res);
      // let newSub = {} as { [key: string]: any };
      // res.sub.map((item: All) => {
      //   if (item.category in newSub) {
      //     newSub[item.category].push(item);
      //   } else {
      //     newSub[item.category] = [];
      //   }
      // });
      // setSub(newSub);
      // setCategories(res.categories);
    });
    // getTopPlayList(cat, offset, order).then((res: TopListResult) => {
    //   console.log(res.playlists);
    //   setPlaylists(res.playlists);
    //   setHasMore(res.more);
    // });
    // getTopPlayList(offset, cat).then((res) => {});
  }, []);

  const changeHotOrNew = (key: "hot" | "new") => {
    // console.log(key);
    dispatch({ type: "order", payload: { order: key } });
  };

  const renderItem = () => {
    // console.log(playlists);
    // console.log(123);
    // return (
    //   playlists.length > 0 &&
    //   playlists.map((item: Playlist) => {
    //     <div className="songlist-card" key={item.id}>
    //       <div className="songlist-card-cover">
    //         <img src={item.coverImgUrl} alt="" className="songlist-pic" />
    //       </div>
    //       <h4 className="songlist-title">
    //         <span className="songlist-title-txt">{item.name}</span>
    //       </h4>
    //     </div>;
    //   })
    // );
  };

  const renderTarget = () => {
    // let { categories, sub } = playListCatList;
    let newSub = {} as { [key: string]: any };
    playListCatList?.sub.map((item: All) => {
      if (item.category in newSub) {
        newSub[item.category].push(item);
      } else {
        newSub[item.category] = [];
      }
    });

    return (
      <div className="classifiedSongList-target">
        {playListCatList?.categories &&
          Object.keys(playListCatList?.categories).map((classified: string) => {
            return (
              <ClassifiedSongListTarget
                key={classified}
                tagsData={newSub[classified]}
                cat={playListCatList?.sub?.[classified]}
              />
            );
          })}
      </div>
    );
  };

  return (
    <>
      <ClassifiedSongListContext.Provider value={{ state, dispatch }}>
        <div className="classifiedSongList">
          {renderTarget()}
          <div className="classifiedSongList-list">
            <div className="classifiedSongList-list-title">
              <div className="classifiedSongList-list-title left-title">
                精选歌单
              </div>
              <div className="classifiedSongList-list-title right-title">
                <div
                  className={`new ${state.order === "new" && "active"}`}
                  onClick={() => changeHotOrNew("new")}
                >
                  最新
                </div>
                <div
                  className={`hot ${state.order === "hot" && "active"}`}
                  onClick={() => changeHotOrNew("hot")}
                >
                  热门
                </div>
              </div>
            </div>
            <ClassifiedSongListContent />
            {/* <div className="classifiedSongList-list-content">
              {renderItem()}
            </div> */}
          </div>
        </div>
      </ClassifiedSongListContext.Provider>
    </>
  );
};

export default ClassifiedSongList;
