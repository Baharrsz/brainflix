import React from "react";
import avatar from "../assets/images/Mohan-muruge.jpg";
import naturalDate from "./naturalDate";

var uniqid = require("uniqid");

function NewComment(props) {
  return (
    <form
      onSubmit={submit => {
        submit.preventDefault();
        props.postComments(submit);
      }}
      className="comments__new"
    >
      <img
        className="comments__new-avatar avatar"
        alt="avatar"
        src={avatar}
      ></img>
      <label className="comments__new-title">JOIN THE CONVERSATION</label>
      <textarea
        className="comments__new-input input"
        placeholder="Write your comment here"
        name="text"
      ></textarea>
      <button className="comments__new-btn btn">COMMENT</button>
    </form>
  );
}

function SingleComment(props) {
  let commentInfo = props.commentInfo;
  return (
    <div className="comments__past-comment">
      <div className="comments__past-comment-avatar avatar"></div>
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
  elementsArray.reverse();
  return <div className="comments__past">{elementsArray}</div>;
}

function Comments(props) {
  return (
    <div className="comments">
      <h2 className="comments__count">{props.commentsArray.length} comments</h2>
      <NewComment postComments={props.postComments} />
      <PastComments commentsArray={props.commentsArray} />
    </div>
  );
}

export default Comments;
