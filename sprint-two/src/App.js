import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UploadPage from "./components/UploadPage";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <MainContent id={localStorage.homeVideoId} />;
          }}
        />
        <Route path="/upload" component={UploadPage} />
        <Route
          path="/:id"
          render={props => {
            return <MainContent id={props.match.params.id} />;
          }}
        />
      </Switch>
    </>
  );
}
