import React from "react";

function Video(props) {
  let { src, poster } = props;

  return (
    <div className="video">
      <video
        className="video__player"
        src={src}
        poster={poster}
        controls
      ></video>
    </div>
  );
}

export default Video;
