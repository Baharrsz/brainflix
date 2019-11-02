import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Side from "./Side";

export default function MainContent(props) {
  let { videoInfo, sideArray } = props;

  return (
    <main>
      <div className="video">
        <video
          className="video__player"
          src={videoInfo.video}
          poster={videoInfo.image}
          controls
        ></video>
      </div>
      <Description info={videoInfo} />
      <Comments commentsArray={videoInfo.comments} />
      <Side videosArray={sideArray} />
    </main>
  );
}
