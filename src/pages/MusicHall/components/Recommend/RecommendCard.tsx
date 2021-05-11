import "./RecommendCard.less";



export const SongListCard = (props: any) => {
  const { data, style } = props;
  return (
    <div className="songlist-card" style={style}>
      <div className="songlist-card-cover">
        <a href="" className=" js-songlist">
          <img
            src={data.picUrl}
            alt={data.copywriter}
            className="songlist-pic"
          />
          <i className="card-cover-mask"></i>
          <i className="card-cover-icon-play js-play"></i>
        </a>
      </div>
      <h4 className="songlist-title">
        <span className="songlist-title-txt">
          <a
            href="https://y.qq.com/n/yqq/playsquare/7571018234.html#stat=y-new.index.playlist.name"
            className="js-songlist"
          >
            {data.name}
          </a>
        </span>
      </h4>
      <div className="songlist-palycount">播放量：{data.playCount}</div>
    </div>
  );
};
