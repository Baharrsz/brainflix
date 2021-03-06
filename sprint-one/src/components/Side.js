import React from "react";
var uniqid = require("uniqid");

function NextVideo(props) {
  let info = props.info;
  return (
    <div className="side__list-item">
      <img
        className="side__list-item-poster"
        src={info.image}
        alt="current video"
      ></img>
      <h4 className="side__list-item-title">{info.title}</h4>
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
