import React from "react";
import preview from "../assets/images/Upload-video-preview.jpg";
import Axios from "axios";

const url = "http://localhost:5000";

export default function UploadPage(props) {
  return (
    <main className="main main--upload-page upload">
      <form className="upload__form" onSubmit={postVideo}>
        <h1 className="upload__heading">Upload Video</h1>
        <div className="upload__thumbnail">
          <label className="upload__thumbnail-label">VIDEO THUMBNAIL</label>
          <img
            className="upload__thumbnail-img"
            src={preview}
            alt="thumbnail"
          />
        </div>
        <div className="upload__title">
          <label className="upload__title-label">TITLE YOUR VIDEO</label>
          <input
            className="upload__title-input input"
            placeholder="Add a title to your video"
            name="title"
          ></input>
        </div>
        <div className="upload__description">
          <label className="upload__description-label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__description-input input"
            placeholder="Add a description of your video"
            name="description"
          ></textarea>
        </div>
        <div className="upload__btns">
          <button className="upload__btn btn">PUBLISH</button>
          <button className="upload__btn--cancel" type="button">
            CANCEL
          </button>
        </div>
      </form>
    </main>
  );
}

function postVideo(submit) {
  submit.preventDefault();
  let videoPost = {
    title: submit.target.title.value,
    description: submit.target.description.value,
    image: preview
  };
  Axios.post(`${url}/videos`, videoPost);
  submit.target.reset();
}
