import "./index.less";
import React, { createContext, useEffect, useReducer } from "react";
import SingerTarget from "./component/SingerTarget";
import SingerList from "./component/SingerList";
import { useState } from "react";
import { getArtistList } from "@/netWork/request";
import { SingerContext } from "./context.config";
interface Tag {
  data: string;
  key: string;
}

const initState = {
  type: "-1",
  area: "-1",
  initial: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "type":
      return {
        ...state,
        type: action.payload.type,
      };

    case "area":
      return {
        ...state,
        area: action.payload.area,
      };
    case "initial":
      return {
        ...state,
        initial: action.payload.initial,
      };
    default:
      return state;
  }
};

const Singer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const areaNavBarData: Tag[] = [
    {
      data: "全部",
      key: "-1",
    },

    {
      data: "华语",
      key: "7",
    },

    {
      data: "欧美",
      key: "96",
    },

    {
      data: "日本",
      key: "8",
    },

    {
      data: "韩国",
      key: "16",
    },

    {
      data: "其他",
      key: "0",
    },
  ];

  const typeNavBarData: Tag[] = [
    {
      data: "全部",

      key: "-1",
    },

    {
      data: "男歌手",

      key: "1",
    },

    {
      data: "女歌手",

      key: "2",
    },

    {
      data: "乐队",

      key: "3",
    },
  ];

  const initialNavBarData: Tag[] = [
    {
      data: "全部",

      key: "",
    },

    {
      data: "A",

      key: "a",
    },

    {
      data: "B",

      key: "b",
    },

    {
      data: "C",

      key: "c",
    },

    {
      data: "D",

      key: "d",
    },

    {
      data: "E",

      key: "e",
    },

    {
      data: "F",

      key: "f",
    },

    {
      data: "G",

      key: "g",
    },

    {
      data: "H",

      key: "h",
    },

    {
      data: "I",

      key: "i",
    },

    {
      data: "J",

      key: "j",
    },

    {
      data: "K",

      key: "k",
    },

    {
      data: "L",

      key: "l",
    },

    {
      data: "M",

      key: "m",
    },

    {
      data: "N",

      key: "n",
    },

    {
      data: "O",

      key: "o",
    },

    {
      data: "P",

      key: "p",
    },

    {
      data: "Q",

      key: "q",
    },

    {
      data: "R",

      key: "r",
    },

    {
      data: "S",

      key: "s",
    },

    {
      data: "T",

      key: "t",
    },

    {
      data: "U",

      key: "u",
    },

    {
      data: "V",

      key: "v",
    },

    {
      data: "W",

      key: "w",
    },

    {
      data: "X",

      key: "x",
    },

    {
      data: "Y",

      key: "y",
    },

    {
      data: "Z",

      key: "z",
    },
  ];

  return (
    <SingerContext.Provider value={{ state, dispatch }}>
      <div className="singer">
        <div className="singer-tag">
          <SingerTarget
            className="area"
            tagsData={areaNavBarData}
            type="area"
          />
          <SingerTarget
            className="type"
            tagsData={typeNavBarData}
            type="type"
          />
          <SingerTarget
            className="initial"
            tagsData={initialNavBarData}
            type="initial"
          />
        </div>
        <div className="singer-list">
          <SingerList />
        </div>
      </div>
    </SingerContext.Provider>
  );
};

export default Singer;
