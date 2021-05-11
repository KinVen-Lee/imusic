import "./TopListCardDetail.less";
export const TopListCard = (props: any) => {
  const { data } = props;
  return (
    <>
      <div
        className="toplist-card"
        style={{ background: "aqua", width: "200px" }}
      >
        <div className="toplist-card-bg"></div>
        <i
          className="mod-cover-icon-play js-play-toplist"
          data-stat="y-new.index.toplist.play.26"
          data-id="26"
          data-type="0"
          data-date="2021-4"
        ></i>
        <i className="toplist-card-line"></i>
        <h3 className="toplist-title">
          <a
            href="https://y.qq.com/n/yqq/toplist/26.html#stat=y-new.index.toplist.detail.26"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            data-stat="y-new.index.toplist.detail.26"
            className="toplist-title-content"
          >
            {data.name}
          </a>
        </h3>
        <ul className="toplist-card-songlist">
          {data &&
            data.tracks &&
            data.tracks.map((songItem: any, index: number) => (
              <li key={index} className="toplist-song">
                <div className="toplist-number">1</div>
                <div className="toplist-songname">
                  <a
                    // href="https://y.qq.com/n/yqq/song/293695482-num.html#stat=y-new.index.toplist.songname"
                    // onclick="setStatCookie&amp;&amp;setStatCookie();"
                    className="js-song"
                    // data-id="293695482"
                    // data-stat="y-new.index.toplist.songname"
                  >
                    {songItem.first}
                  </a>
                </div>
                <div className="toplist-artist">
                  <a
                  // href="https://y.qq.com/n/yqq/singer/000oCQfT3kdonw.html#stat=y-new.index.toplist.singername"
                  // onclick="setStatCookie&amp;&amp;setStatCookie();"
                  // data-stat="y-new.index.toplist.singername"
                  >
                    {songItem.second}
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
