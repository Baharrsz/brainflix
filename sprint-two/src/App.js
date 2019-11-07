import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UploadPage from "./components/UploadPage";
import Axios from "axios";

let apiKey = "ee5cb60a-b529-4112-ab42-6392a28f2a85";
let url = "https://project-2-api.herokuapp.com";

class App extends React.Component {
  state = { sideArray: undefined };

  render() {
    if (!this.state.sideArray) {
      return <>Loading...</>;
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
