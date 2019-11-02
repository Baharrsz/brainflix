import React from "react";
import eye from "../assets/icons/SVG/Icon-views.svg";
import heart from "../assets/icons/SVG/Icon-likes.svg";
import naturalDate from "./naturalDate";

function Stats(props) {
  let info = props.info;
  return (
    <div className="description__head-stats">
      <div className="description__head-stats-views">
        <img
          className="description__head-stats-views-icon"
          src={eye}
          alt="viewsIcon"
        ></img>
        <span className="description__head-stats-views-number">
          {info.views}
        </span>
      </div>
      <div className="description__head-stats-likes">
        <img
          className="description__head-stats-likes-icon"
          src={heart}
          alt="likesIcon"
        ></img>
        <span className="description__head-stats-likes-number">
          {info.likes}
        </span>
      </div>
    </div>
  );
}

function HeadRow(props) {
  let info = props.info;
  return (
    <div className="description__head">
      <div className="description__head-author">
        <div className="description__head-author-name">By{info.channel}</div>
        <div className="description__head-author-date">
          {naturalDate(info.timestamp)}
        </div>
      </div>
      <Stats info={info} />
    </div>
  );
}

function Description(props) {
  let info = props.info;
  return (
    <div className="description">
      <h1 className="description__title">{info.title}</h1>
      <HeadRow info={info} />
      <p className="description__text">{info.description}</p>
    </div>
  );
}

export default Description;
