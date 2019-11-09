import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UploadPage from "./components/UploadPage";
import Axios from "axios";
import gif from "./assets/video/thinking.gif";

let apiKey = "259ad56b-015b-44d2-83dc-30323a9559d0";
let url = "https://project-2-api.herokuapp.com";

class App extends React.Component {
  state = { sideArray: undefined };

  render() {
    if (!this.state.sideArray) {
      return (
        <div className="loading">
          <h1 className="loading__title">Loading...</h1>
          <img className="loading__img" src={gif} alt="Loading GIF"></img>
        </div>
      );
    } else {
      return (
        <>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <MainContent
                    sideArray={this.state.sideArray}
                    id={localStorage.homeVideoId}
                  />
                );
              }}
            />
            <Route path="/upload" component={UploadPage} />
            <Route
              path="/:id"
              render={props => {
                return (
                  <MainContent
                    sideArray={this.state.sideArray}
                    id={props.match.params.id}
                  />
                );
              }}
            />
          </Switch>
        </>
      );
    }
  }

  componentDidMount() {
    Axios.get(`${url}/videos/?api_key=${apiKey}`).then(response => {
      this.setState({ sideArray: response.data }, () => {
        localStorage.homeVideoId =
          localStorage.homeVideoId || this.state.sideArray[0].id;
      });
    });
  }
}

export default App;
