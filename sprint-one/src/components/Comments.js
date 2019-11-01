import React from "react";
import avatar from "../assets/images/Mohan-muruge.jpg";
import avatar1 from "../assets/images/user-1.jpg";
import avatar2 from "../assets/images/user-2.jpg";
import avatar3 from "../assets/images/user-3.jpg";

var uniqid = require("uniqid");

const commentsArray = [
  {
    name: "Micheal Lyons",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    date: " 12/18/2018",
    avatar: avatar1
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    date: " 12/12/2018",
    avatar: avatar2
  },
  {
    name: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    date: " 11/15/2018",
    avatar: avatar3
  }
];

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
          className="comments__past-avatar"
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
  return elementsArray;
}

class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        <h2 className="comments__count">3 comments</h2>
        <NewComment />
        <PastComments info={commentsArray} />
      </div>
    );
  }
}
export default Comments;
