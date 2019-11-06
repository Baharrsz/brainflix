import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UploadPage from "./components/UploadPage";
import Axios from "axios";

let apiKey = "?api_key=" + "ee5cb60a-b529-4112-ab42-6392a28f2a85";
let url = "https://project-2-api.herokuapp.com";

class App extends React.Component {
  state = { sideArray: undefined };

  render() {
    if (this.state.sideArray) {
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
                      sideArray={this.state.sideArray}
                      id={this.state.sideArray[0].id}
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
          </BrowserRouter>
        </>
      );
    } else {
      return <></>;
    }
  }

  componentDidMount() {
    Axios.get(url + "/videos/" + apiKey).then(response => {
      this.setState({ sideArray: response.data });
    });
  }
}

export default App;
