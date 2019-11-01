import React from "react";
import avatar from "../assets/images/Mohan-muruge.jpg";

var uniqid = require("uniqid");

function NewComment() {
  return (
    <div className="comments__new">
      <div className="comments__new-avatarbox">
        <img
          className="comments__new-avatar"
          alt="avatar"
          src={avatar}
          width="40"
          height="40"
        ></img>
      </div>
      <div className="comments__new-section">
        <div className="comments__new-section-input">
          <label className="comments__new-section-input-label">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments__new-section-input-text input"
            placeholder="Write comment here"
            rows="4"
            cols="50"
          ></textarea>
        </div>

        <button className="comments__new-section-btn btn">COMMENT</button>
      </div>
    </div>
  );
}

function SingleComment(props) {
  return (
    <div className="comments__past-commentbox">
      <div className="comments__past-commentbox-avatarbox">
        <img
          className="comments__past-commentbox-avatar"
          alt="avatar"
          src={props.info.avatar}
          width="40"
          height="40"
        ></img>
      </div>
      <div className="comments__past-commentbox-body">
        <div className="comments__past-commentbox-body-head">
          <div className="comments__past-commentbox-body-head-name">
            {props.info.name}
          </div>
          <div className="comments__past-commentbox-body-head-date">
            {props.info.date}
          </div>
        </div>
        <div className="comments__past-commentbox-body-text">
          {props.info.comment}
        </div>
      </div>
    </div>
  );
}

function PastComments(props) {
  let elementsArray = props.info.map(comment => {
    return <SingleComment info={comment} key={uniqid()} />;
  });

  return <div className="comments__past">{elementsArray}</div>;
}

function Comments(props) {
  return (
    <div className="comments">
      <h2 className="comments__count">3 comments</h2>
      <NewComment />
      <PastComments info={props.commentsArray} />
    </div>
  );
}

export default Comments;
