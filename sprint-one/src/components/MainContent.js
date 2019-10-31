import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import video from "../assets/video/BrainStation Sample Video.mp4";
import poster from "../assets/images/video-list-0.jpg";
import Side from "./Side";

export default function MainContent() {
  return (
    <main>
      <video
        className="video"
        src={video}
        controls
        width="320"
        height="240"
        poster={poster}
      ></video>
      <div className="contents">
        <div className="contents__left">
          <Description />
          <Comments />
        </div>

        <div className="contents__right">
          <Side />
        </div>
      </div>
    </main>
  );
}
