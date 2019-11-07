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
    mainVideo: undefined
  };

  render() {
    if (this.state.mainVideo) {
      let { sideArray, mainVideo } = this.state;
      return (
        <main className="main">
          <Video src={mainVideo.video} poster={mainVideo.image} />
          <Description info={mainVideo} />
          <Comments commentsArray={mainVideo.comments} />
          <Side videosArray={sideArray} />
        </main>
      );
    } else return <></>;
  }

  getVideoData(id) {
    Axios.get(`${url}/videos/${id}?api_key=${apiKey}`).then(response => {
      this.setState({
        mainVideo: response.data
      });
    });
  }

  changeVideosArray() {
    let id = this.props.id;
    let sideArray = this.state.sideArray;
    let mainVideo = this.state.mainVideo;
    let match = sideArray.findIndex(video => {
      return video.id === id;
    });
    sideArray.splice(match, 1);
    if (mainVideo) {
      let currentVideo = {
        id: mainVideo.id,
        channel: mainVideo.channel,
        image: mainVideo.image,
        title: mainVideo.title
      };
      sideArray.push(currentVideo);
    }
    this.setState({ sideArray: sideArray });
  }

  componentDidMount() {
    this.getVideoData(this.props.id);
    this.changeVideosArray();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getVideoData(this.props.id);
      this.changeVideosArray();
    }
  }
}
