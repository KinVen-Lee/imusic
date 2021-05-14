/*
 * @Author: KinVen
 * @Date: 2021-05-13 21:15:16
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 17:29:19
 * @Description:
 * @Version: 1.0
 */
import "./index.less";
import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "@/globalConfig";
import { Howl, Howler } from "howler";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import { getSongLyric } from "@/netWork/request";

const MusicPlay = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const ref = useRef<HTMLDivElement>(null);
  // let sound = new Howl({
  //   src: undefined,
  //   autoplay: true,
  //   loop: true,
  //   volume: 0.5,
  //   onend: function () {
  //     console.log("Finished!");
  //   },
  // });
  useEffect(() => {
    console.log(state);
    let music = state?.currentMusic;
    const ap = new APlayer({
      container: ref.current,
      autoplay: true,
      theme: "#FADFA3",
      loop: "all",
      order: "random",
      preload: "auto",
      volume: 0.7,
      mutex: true,
      listFolded: false,
      listMaxHeight: 90,
      lrcType: 3,

      audio: [
        {
          name: music.name,
          artist: music.artist,
          url: music?.url,
          cover: music.cover,
          // lrc: `${music.lrc}`.toString(),
        },
      ],
    });

    // sound.src = state?.currentMusic[0]?.url;
    // let sound = new Howl({
    //   src: [state?.currentMusic[0]?.url],
    //   autoplay: true,
    //   loop: true,
    //   volume: 0.5,
    //   onend: function () {
    //     console.log("Finished!");
    //   },
    // });

    return () => {
      // sound = null;
    };
  }, [state.currentMusic]);

  return (
    <>
      <div className="aplayer" ref={ref}></div>
      {/* <div className="music-play-control-box">
        <div className="song-info">
          <div className="song-pic"></div>
          <div className="song-title">
            <div className="song-name">清新小女孩</div>
            <div className="song-control">
              <div className="song-love"></div>
              {/* <div className="song-comments"></div> */}
      {/* </div>
          </div>
        </div>
        <div className="song-play-control">
          <div className="btn_suijibofang"></div>
          <div className="btn_prev"></div>
          <div className="btn_play"></div>
          <div className="btn_next"></div>
          <div className="btn_yinliang"></div>
        </div>
        <div className="song-other-control">
          <div className="song-time"></div>
          <div className="song-playlist"></div>
        </div>
      </div>  */}
    </>
  );
};

export default MusicPlay;
