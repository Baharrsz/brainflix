import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Side from "./Side";

export default function MainContent(props) {
  return (
    <main>
      <div className="video">
        <video
          className="video__player"
          src={props.mainVideo.video}
          controls
          poster={props.mainVideo.image}
        ></video>
      </div>

      <div className="contents">
        <div className="contents__left">
          <Description mainVideo={props.mainVideo} />
          <Comments commentsArray={props.mainVideo.comments} />
        </div>

        <div className="contents__right">
          <Side videosArray={props.sideArray} />
        </div>
      </div>
    </main>
  );
}
