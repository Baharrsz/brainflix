import React from "react";
import avatar from "../assets/images/Mohan-muruge.jpg";
import naturalDate from "./naturalDate";

var uniqid = require("uniqid");

function NewComment() {
  return (
    <div className="comments__new">
      <img className="comments__new-avatar" alt="avatar" src={avatar}></img>
      <label className="comments__new-title">JOIN THE CONVERSATION</label>
      <textarea
        className="comments__new-input"
        placeholder="Write comment here"
      ></textarea>
      <button className="comments__new-btn btn">COMMENT</button>
    </div>
  );
}

function SingleComment(props) {
  let commentInfo = props.commentInfo;
  return (
    <div className="comments__past-comment">
      <img
        className="comments__past-comment-avatar avatar"
        alt="avatar"
        src={commentInfo.avatar}
      ></img>
      <div className="comments__past-comment-name">{commentInfo.name}</div>
      <div className="comments__past-comment-date">
        {naturalDate(commentInfo.timestamp)}
      </div>
      <div className="comments__past-comment-text">{commentInfo.comment}</div>
    </div>
  );
}

function PastComments(props) {
  let commentsArray = props.commentsArray;
  let elementsArray = commentsArray.map(comment => {
    return <SingleComment commentInfo={comment} key={uniqid()} />;
  });

  return <div className="comments__past">{elementsArray}</div>;
}

function Comments(props) {
  return (
    <div className="comments">
      <h2 className="comments__count">3 comments</h2>
      <NewComment />
      <PastComments commentsArray={props.commentsArray} />
    </div>
  );
}

export default Comments;
