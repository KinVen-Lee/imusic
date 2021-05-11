import "./topSongCard.less";

interface TopSongCardProps {
  topSongName?: string;
  artistName?: string;
  duration?: number;
  data?: any;
}

export const TopSongCard = (props: TopSongCardProps) => {
  const { data } = props;
  return (
    <>
      <div className="top-song-card">
        <div className="top-song-card-cover">
          <a
            // href="https://y.qq.com/n/yqq/album/002lezHb2umULH.html"
            title={data.name}
            className="album-name songlist-link mod-cover"
          >
            <img
              className="songlist-pic"
              src={data.album.picUrl}
              style={{ display: "block", visibility: "visible" }}
            />

            <i className="mod-cover-mask"></i>
            <i className="mod-cover-icon-play js-play"></i>
          </a>
        </div>
        <div className="top-song-card-content">
          <h3 className="song-title">
            <a
              // href="https://y.qq.com/n/yqq/song/001iOWlr21sMQ5.html#stat=y-new.index.new-song.songname"
              //   onclick="setStatCookie&amp;&amp;setStatCookie();"
              //   data-stat="y-new.index.new-song.songname"
              className="song-title-container"
              // title="你的终点可以没有我 《风起霓裳》电视剧插曲"
            >
              {data.name}
              <span className="song-txt"></span>
            </a>
          </h3>
          <p className="song-author" title="陆虎">
            <a
              // href="https://y.qq.com/n/yqq/singer/004gbMvP356XaI.html#stat=y-new.index.new-song.singername"
              //   onclick="setStatCookie&amp;&amp;setStatCookie();"
              // data-stat="y-new.index.new-song.singername"
              // data-singermid="004gbMvP356XaI"
              // data-singerid="11449"
              title="陆虎"
              className="singer-name"
            >
              {data.artists[0].name}
            </a>
          </p>
        </div>
        <div className="top-song-card-time">04:37</div>
      </div>
    </>
  );
};
