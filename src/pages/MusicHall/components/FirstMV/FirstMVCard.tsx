import "./FirstMVCard.less";
import camera from "@assets/svg/camera.svg";
export const FristMVCard = (props: any) => {
  const { data } = props;
  return (
    <>
      <div className="fristmv-card">
        <div className="fristmv-card-cover">
          <a
            href="#"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            className="mv-card-cover"
            // data-stat="y-new.index.mv.play-btn"
            // data-vid="r0035awn0v9"
            // data-id="1696487"
            // hidefocus="true"
          >
            <img
              className="fristmv-pic"
              src={data.cover}
              //   data-original="//y.gtimg.cn/music/photo-new/T015R640x360M101002ztExz0fmGLl.jpg?max-age=2592000"
              // onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv-300.png?max-age=31536000';this.onerror=null;"
              //   alt="Runaway"
              style={{ display: "block", visibility: "visible" }}
            />
            <i className="mod-cover-icon-play"></i>
          </a>
        </div>
        <h3 className="mv-card-title">
          <a
            href="#"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            className="js-mv"
            // data-stat="y-new.index.mv.mvname"
            // data-vid="r0035awn0v9"
            // data-id="1696487"
            // title="Runaway"
          >
            {data.name}
          </a>
        </h3>
        <p className="fristmv-card-singer">
          <a
            href="#"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            className="mv-singer"
            // data-singermid="000kZUyu0aPr9t"
            // data-stat="y-new.index.mv.singername"
            // data-singerid="1043869"
            // title="派伟俊"
          >
            {data.artistName}
            {/* {props.artists.reduce((total: string, artName: string) => {
              return `${total}/${artName}`;
            }, "")} */}
          </a>
        </p>
        <div className="fristmv-card-info">
          <span className="fristmv-listen">
            <img className="fristmv-listen-icon sprite" src={camera}></img>
            {data.playCount}
          </span>
        </div>
      </div>
    </>
  );
};
