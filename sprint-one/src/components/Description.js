import React from "react";
import eye from "../assets/icons/SVG/Icon-views.svg";
import heart from "../assets/icons/SVG/Icon-likes.svg";

const currentVideoInfo = {
  title: "BMX Rampage: 2018 Highlights",
  author: "Red Cow",
  date: "12/18/2018",
  views: "1,001,023",
  likes: "110,985",
  text:
    "On a gusty day in Southern Utah, a group of 25 daring moutntain bikers belw the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mothe nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the secon time --eight years agter his first Red Cow Rampage title"
};

function Stats(props) {
  return (
    <div className="description__head-stats">
      <div className="description__head-stats-views">
        <img
          className="description__head-stats-views-icon"
          src={eye}
          alt="viewsIcon"
        ></img>
        <span className="description__head-stats-views">
          {props.info.views}
        </span>
      </div>
      <div className="description__head-stats-likes">
        <img
          className="description__head-stats-views-icon"
          src={heart}
          alt="likesIcon"
        ></img>
        <span className="description__head-stats-views">
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
          By {props.info.author}
        </div>
        <div className="description__head-author-date">{props.info.date}</div>
        <Stats info={props.info} />
      </div>
    </div>
  );
}

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <h1 className="description__title">{currentVideoInfo.title}</h1>
        <HeadRow info={currentVideoInfo} />
        <div className="description__text">{currentVideoInfo.text}</div>
      </div>
    );
  }
}

export default Description;
