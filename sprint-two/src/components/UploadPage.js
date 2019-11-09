import React from "react";
import preview from "../assets/images/Upload-video-preview.jpg";

export default function UploadPage(props) {
  return (
    <main className="main upload">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__thumbnail">
        <label className="upload__thumbnail-label">VIDEO THUMBNAIL</label>
        <img className="upload__thumbnail-img" src={preview} alt="thumbnail" />
      </div>
      <div className="upload__title">
        <label className="upload__title-label">TITLE YOUR VIDEO</label>
        <inpu className="upload__title-input input"></inpu>
      </div>
      <div className="upload__description">
        <label className="upload__description-label">TITLE YOUR VIDEO</label>
        <inpu className="upload__description-input input"></inpu>
      </div>
      <button className="upload__btn btn">PUBLISH</button>
      <button className="upload__btn--cancel">CANCEL</button>
    </main>
  );
}
