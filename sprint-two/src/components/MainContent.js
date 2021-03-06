import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Video from "./Video";
import Side from "./Side";
import Axios from "axios";
import gif from "../assets/video/thinking.gif";

let apiKey = "259ad56b-015b-44d2-83dc-30323a9559d0";
let url = "https://project-2-api.herokuapp.com";
const corsUrl = "cors-anywhere.herokuapp.com/";

export default class MainContent extends React.Component {
  state = {
    sideArray: undefined,
    mainVideo: undefined,
    removedVideo: undefined,
    newCommentsIn: false
  };

  render() {
    if (!this.state.mainVideo)
      return (
        <div className="loading">
          <h1 className="loading__title">Loading...</h1>
          <img className="loading__img" src={gif} alt="Loading GIF"></img>
        </div>
      );
    else {
      let { sideArray, mainVideo } = this.state;
      return (
        <main className="main main--videos-page">
          <Video
            src={corsUrl + `${mainVideo.video}`}
            poster={mainVideo.image}
          />
          <Description info={mainVideo} />
          <Comments
            commentsArray={mainVideo.comments}
            postComments={this.postNewComment}
          />
          <Side videosArray={sideArray} />
        </main>
      );
    }
  }

  getVideosArray() {
    return Axios.get(`${url}/videos/?api_key=${apiKey}`).then(response => {
      localStorage.homeVideoId = response.data[0].id;
      this.setState({
        sideArray: response.data
      });
    });
  }

  getMainVideo(id) {
    Axios.get(`${url}/videos/${id}?api_key=${apiKey}`).then(response => {
      this.setState({
        mainVideo: response.data
      });
    });
  }

  changeVideosArray(id) {
    let sideArray = this.state.sideArray;
    if (this.state.removedVideo) sideArray.push(this.state.removedVideo);
    let match = sideArray.findIndex(video => {
      return video.id === id;
    });
    if (match >= 0) {
      var [removedVideo] = sideArray.splice(match, 1);
    }
    this.setState({
      sideArray: sideArray,
      removedVideo: removedVideo
    });
  }

  componentDidMount() {
    this.getVideosArray().then(() => {
      let id = this.props.id || localStorage.homeVideoId;
      this.getMainVideo(id);
      this.changeVideosArray(id);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps !== this.props ||
      prevState.newCommentsIn !== this.state.newCommentsIn
    ) {
      let id = this.props.id || localStorage.homeVideoId;
      this.changeVideosArray(id);
      this.getMainVideo(id);
    }
  }

  postNewComment = submit => {
    let newComment = {
      name: "User",
      comment: submit.target.text.value
    };
    submit.target.reset();
    let id = this.props.id || localStorage.homeVideoId;
    Axios.post(
      `${url}/videos/${id}/comments?api_key=${apiKey}`,
      newComment
    ).then(() => {
      this.setState({
        newCommentsIn: !this.state.newCommentsIn
      });
    });
  };
}
