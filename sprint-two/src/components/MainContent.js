import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Video from "./Video";
import Side from "./Side";
import Axios from "axios";

let apiKey = "ee5cb60a-b529-4112-ab42-6392a28f2a85";
let url = "https://project-2-api.herokuapp.com";

export default class MainContent extends React.Component {
  state = {
    sideArray: this.props.sideArray,
    mainVideo: undefined,
    removedVideo: undefined,
    newCommentsReceived: false
  };

  render() {
    if (!this.state.mainVideo) return <></>;
    else {
      let { sideArray, mainVideo } = this.state;
      return (
        <main className="main">
          <Video src={mainVideo.video} poster={mainVideo.image} />
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

  getVideoData(id) {
    Axios.get(`${url}/videos/${id}?api_key=${apiKey}`).then(response => {
      this.setState({
        mainVideo: response.data
      });
    });
  }

  changeVideosArray() {
    let sideArray = this.state.sideArray;
    let match = sideArray.findIndex(video => {
      return (!video || video.id) === this.props.id;
    });
    let [removedVideo] = sideArray.splice(match, 1, this.state.removedVideo);
    this.setState({
      sideArray: sideArray,
      removedVideo: removedVideo
    });
  }

  componentDidMount() {
    this.getVideoData(this.props.id);
    this.changeVideosArray();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);
    if (
      prevProps !== this.props ||
      prevState.newCommentsReceived !== this.state.newCommentsReceived
    ) {
      this.getVideoData(this.props.id);
      this.changeVideosArray();
    }
  }

  postNewComment = submit => {
    let newComment = {
      name: "User",
      comment: submit.target.text.value
    };
    submit.target.reset();
    Axios.post(
      `${url}/videos/${this.props.id}/comments?api_key=${apiKey}`,
      newComment
    ).then(() => {
      this.setState({ newCommentsReceived: !this.state.change });
    });
  };
}
