import React from "react";
import image1 from "../assets/images/video-list-1.jpg";
import image2 from "../assets/images/video-list-2.jpg";
import image3 from "../assets/images/video-list-3.jpg";
import image4 from "../assets/images/video-list-4.jpg";
import image5 from "../assets/images/video-list-5.jpg";
import image6 from "../assets/images/video-list-6.jpg";
import image7 from "../assets/images/video-list-7.jpg";
import image8 from "../assets/images/video-list-8.jpg";
var uniqid = require("uniqid");

const videosArray = [
  {
    poster: image1,
    author: "Todd Welch",
    title: "Become A Travel Pro In One Easy Lesson"
  },
  {
    poster: image2,
    author: "Cornelia Blair",
    title: "Les Houches The Hidden Gem Of The Chamonix"
  },
  {
    poster: image3,
    author: "Glen Harper",
    title: "Travel Health Useful Medical Information For"
  },
  {
    poster: image4,
    author: "Emily Harper",
    title: "Cheap Airline Tickets Great Ways To Save"
  },
  {
    poster: image5,
    author: "Ethan Owen",
    title: "Take A Romantic Break In A Boutique Hotel"
  },
  {
    poster: image6,
    author: "Lydia Perez",
    title: "Choose The Perfect Accommodations"
  },
  {
    poster: image7,
    author: "Timothy Austin",
    title: "Cruising Destination Ideas"
  },
  {
    poster: image8,
    author: "Scotty Cranmer",
    title: "Train Travel On Track For Safety"
  }
];

function NextVideo(props) {
  return (
    <div className="side__list-item">
      <img
        className="side__list-item-poster"
        src={props.info.poster}
        alt="video"
        height="100"
        width="200"
      ></img>
      <div className="side__list-item-info">
        <div className="side__list-item-title">{props.info.title}</div>
        <div className="side__list-item-author">{props.info.author}</div>
      </div>
    </div>
  );
}

class Side extends React.Component {
  render() {
    let elementsArray = videosArray.map(video => {
      return <NextVideo info={video} key={uniqid()} />;
    });
    return (
      <div className="side">
        <label className="side__title">NEXT VIDEO</label>
        <div className="side__list">{elementsArray}</div>
      </div>
    );
  }
}
export default Side;
