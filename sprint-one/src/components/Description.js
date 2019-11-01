import React from "react";
import eye from "../assets/icons/SVG/Icon-views.svg";
import heart from "../assets/icons/SVG/Icon-likes.svg";

function Stats(props) {
  return (
    <div className="description__head-stats">
      <div className="description__head-stats-views">
        <img
          className="description__head-stats-views-icon"
          src={eye}
          alt="viewsIcon"
        ></img>
        <span className="description__head-stats-views-number">
          {props.info.views}
        </span>
      </div>
      <div className="description__head-stats-likes">
        <img
          className="description__head-stats-likes-icon"
          src={heart}
          alt="likesIcon"
        ></img>
        <span className="description__head-stats-likes-number">
          {props.info.likes}
        </span>
      </div>
    </div>
  );
}

function HeadRow(props) {
  return (
    <div className="description__head">
      <div className="description__head-author">
        <div className="description__head-author-name">
          By{props.info.channel}
        </div>
        <div className="description__head-author-date">
          {props.info.timestamp}
        </div>
      </div>
      <Stats info={props.info} />
    </div>
  );
}

function Description(props) {
  return (
    <div className="description">
      <h1 className="description__title">{props.mainVideo.title}</h1>
      <HeadRow info={props.mainVideo} />
      <p className="description__text">{props.mainVideo.description}</p>
    </div>
  );
}

export default Description;
