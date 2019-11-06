import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Video from "./Video";
import Side from "./Side";
import Axios from "axios";

let apiKey = "?api_key=" + "ee5cb60a-b529-4112-ab42-6392a28f2a85";
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
    Axios.get(url + "/videos/" + id + apiKey).then(response => {
      this.setState({ mainVideo: response.data });
    });
  }

  componentDidMount() {
    this.getVideoData(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getVideoData(this.props.id);
    }
  }
}
