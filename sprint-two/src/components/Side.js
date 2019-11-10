import React from "react";
import { Link } from "react-router-dom";
var uniqid = require("uniqid");

function NextVideo(props) {
  let info = props.info;

  return (
    <div className="side__list-item">
      <Link to={`/${info.id}`} className="side__list-item-poster">
        <img
          className="side__list-item-poster-img"
          src={info.image}
          alt="current video"
        ></img>
      </Link>
      <Link to={`/${info.id}`} className="side__list-item-title">
        <h4 className="side__list-item-title-text">{info.title}</h4>
      </Link>
      <h4 className="side__list-item-channel">{info.channel}</h4>
    </div>
  );
}

function Side(props) {
  let elementsArray = props.videosArray.map(video => {
    return <NextVideo info={video} key={uniqid()} />;
  });
  return (
    <div className="side">
      <label className="side__title">NEXT VIDEO</label>
      <div className="side__list">{elementsArray}</div>
    </div>
  );
}

export default Side;
