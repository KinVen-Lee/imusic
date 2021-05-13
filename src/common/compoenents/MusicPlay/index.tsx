/*
 * @Author: KinVen
 * @Date: 2021-05-13 21:15:16
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-13 21:45:29
 * @Description:
 * @Version: 1.0
 */
import "./index.less";
import React from "react";

const MusicPlay = () => {
  return (
    <>
      <div className="music-play-control-box">
        <div className="song-info">
          <div className="song-pic"></div>
          <div className="song-title">
            <div className="song-name">清新小女孩</div>
            <div className="song-control">
              <div className="song-love"></div>
              {/* <div className="song-comments"></div> */}
            </div>
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
      </div>
    </>
  );
};

export default MusicPlay;
