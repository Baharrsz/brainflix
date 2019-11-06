import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UploadPage from "./components/UploadPage";
// import avatar1 from "./assets/images/user-1.jpg";
// import avatar2 from "./assets/images/user-2.jpg";
// import avatar3 from "./assets/images/user-3.jpg";
// import image1 from "./assets/images/video-list-1.jpg";
// import image2 from "./assets/images/video-list-2.jpg";
// import image3 from "./assets/images/video-list-3.jpg";
// import image4 from "./assets/images/video-list-4.jpg";
// import image5 from "./assets/images/video-list-5.jpg";
// import image6 from "./assets/images/video-list-6.jpg";
// import image7 from "./assets/images/video-list-7.jpg";
// import image8 from "./assets/images/video-list-8.jpg";
// import video from "./assets/video/BrainStation Sample Video.mp4";
// import poster from "./assets/images/video-list-0.jpg";
import Axios from "axios";

// const videosArray = [
//   {
//     image: image1,
//     channel: "Todd Welch",
//     title: "Become A Travel Pro In One Easy Lesson"
//   },
//   {
//     image: image2,
//     channel: "Cornelia Blair",
//     title: "Les Houches The Hidden Gem Of The Chamonix"
//   },
//   {
//     image: image3,
//     channel: "Glen Harper",
//     title: "Travel Health Useful Medical Information For"
//   },
//   {
//     image: image4,
//     channel: "Emily Harper",
//     title: "Cheap Airline Tickets Great Ways To Save"
//   },
//   {
//     image: image5,
//     channel: "Ethan Owen",
//     title: "Take A Romantic Break In A Boutique Hotel"
//   },
//   {
//     image: image6,
//     channel: "Lydia Perez",
//     title: "Choose The Perfect Accommodations"
//   },
//   {
//     image: image7,
//     channel: "Timothy Austin",
//     title: "Cruising Destination Ideas"
//   },
//   {
//     image: image8,
//     channel: "Scotty Cranmer",
//     title: "Train Travel On Track For Safety"
//   }
// ];

// const commentsArray = [
//   {
//     name: "Micheal Lyons",
//     comment:
//       "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
//     timestamp: " 12/18/2018",
//     avatar: avatar1
//   },
//   {
//     name: "Gary Wong",
//     comment:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//     timestamp: " 12/12/2018",
//     avatar: avatar2
//   },
//   {
//     name: "Theodore Duncan",
//     comment:
//       "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//     timestamp: " 11/15/2018",
//     avatar: avatar3
//   }
// ];

// const mainVideo = {
//   title: "BMX Rampage: 2018 Highlights",
//   description:
//     "On a gusty day in Southern Utah, a group of 25 daring moutntain bikers belw the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mothe nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the secon time --eight years agter his first Red Cow Rampage title",
//   channel: "Red Cow",
//   image: poster,
//   views: "1,001,023",
//   likes: "110,985",
//   duration: "20s",
//   video: video,
//   timestamp: "12/18/2018",
//   comments: commentsArray
// };
let apiKey = "?api_key=" + "ee5cb60a-b529-4112-ab42-6392a28f2a85";
let url = "https://project-2-api.herokuapp.com";

class App extends React.Component {
  state = { mainVideo: undefined, sideArray: undefined };

  render() {
    if (this.state.mainVideo) {
      return (
        <>
          <BrowserRouter>
            <Header />

            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <MainContent
                      videoInfo={this.state.mainVideo}
                      sideArray={this.state.sideArray}
                    />
                  );
                }}
              />
              <Route path="/upload" component={UploadPage} />
              <Route
                path="/:id"
                render={props => {
                  // let id = props.match.params.id;
                  // let match = this.state.sideArray.findIndex(video => {
                  //   return video.id === id;
                  // });
                  // console.log("match", match);
                  // let clone = this.state.sideArray;
                  // clone.splice(match, 1);
                  // console.log("clone", clone);
                  // if (match >= 0) this.setState({ sideArray: clone });

                  return (
                    <MainContent
                      match={props.match}
                      videoInfo={this.state.mainVideo}
                      sideArray={this.state.sideArray}
                    />
                  );
                }}
              />
            </Switch>
          </BrowserRouter>
        </>
      );
    } else {
      return <></>;
    }
  }

  componentDidMount() {
    Axios.get(url + "/videos/" + apiKey)
      .then(response => {
        this.setState({ sideArray: response.data });
        return Axios.get(url + "/videos/1af0jruup5gu" + apiKey);
      })
      .then(response => {
        this.setState({ mainVideo: response.data });
      });
  }
}

export default App;
