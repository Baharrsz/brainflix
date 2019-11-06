import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Video from "./Video";
import Side from "./Side";
import Axios from "axios";

let apiKey = "?api_key=" + "ee5cb60a-b529-4112-ab42-6392a28f2a85";
let url = "https://project-2-api.herokuapp.com";

export default class MainContent extends React.Component {
  render() {
    let { match, videoInfo, sideArray } = this.props;
    console.log("maincontent props", this.props);
    return (
      <main className="main">
        <Video src={videoInfo.video} poster={videoInfo.image} />
        <Description info={videoInfo} />
        <Comments commentsArray={videoInfo.comments} />
        <Side videosArray={sideArray} />
      </main>
    );
  }
  // getVideoData(props) {
  //   let id = props.match.params.id;
  //   console.log(id);
  //   Axios.get(url + "/videos/" + id + apiKey).then(response => {
  //     console.log("response.data", response.data);
  //     this.setState({ mainVideo: response.data });
  //   });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log("inside update", prevProps);
  //   // console.log("inside update, this.props", this.props);
  //   if (prevProps.match.url!==this.props){this.getVideoData(this.props)}
  // }
}

// export default function MainContent(props) {
//   let { videoInfo, sideArray } = props;
//   console.log("maincontent props", props);
//   return (
//     <main className="main">
//       <Video src={videoInfo.video} poster={videoInfo.image} />
//       <Description info={videoInfo} />
//       <Comments commentsArray={videoInfo.comments} />
//       <Side videosArray={sideArray} />
//     </main>
//   );
// }
