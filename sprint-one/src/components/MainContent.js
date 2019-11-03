import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Video from "./Video";
import Side from "./Side";

export default function MainContent(props) {
  let { videoInfo, sideArray } = props;

  return (
    <main className="main">
      <Video src={videoInfo.video} poster={videoInfo.image} />
      <Description info={videoInfo} />
      <Comments commentsArray={videoInfo.comments} />
      <Side videosArray={sideArray} />
    </main>
  );
}
