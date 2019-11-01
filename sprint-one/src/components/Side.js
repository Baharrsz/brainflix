import React from "react";
var uniqid = require("uniqid");

function NextVideo(props) {
  return (
    <div className="side__list-item">
      <img
        className="side__list-item-poster"
        src={props.info.image}
        alt="video"
        height="100"
        width="200"
      ></img>
      <div className="side__list-item-info">
        <h4 className="side__list-item-title">{props.info.title}</h4>
        <h4 className="side__list-item-author">{props.info.channel}</h4>
      </div>
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
