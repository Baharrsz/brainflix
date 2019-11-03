import React from "react";
import eye from "../assets/icons/SVG/Icon-views.svg";
import heart from "../assets/icons/SVG/Icon-likes.svg";
import naturalDate from "./naturalDate";

function Stats(props) {
  let info = props.info;
  return (
    <div className="description__head-stats">
      <img
        className="description__head-stats-views-icon"
        src={eye}
        alt="viewsIcon"
      ></img>
      <h3 className="description__head-stats-views-number">{info.views}</h3>
      <img
        className="description__head-stats-likes-icon"
        src={heart}
        alt="likesIcon"
      ></img>
      <h3 className="description__head-stats-likes-number">{info.likes}</h3>
    </div>
  );
}

function HeadRow(props) {
  let info = props.info;
  return (
    <div className="description__head">
      <div className="description__head-publish-info">
        <h3 className="description__head-channel">By {info.channel}</h3>
        <h3 className="description__head-date">
          {naturalDate(info.timestamp)}
        </h3>
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
