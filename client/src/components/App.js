import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadPage from "./views/UploadPage/UploadPage";
import DetailOreumRoomPage from "./views/DetailOreumRoomPage/DetailOreumRoomPage";
import SearchOreum from "./views/SearchOreum/SearchOreum";
import OreumDetail from "./views/OreumDetail/OreumDetail";
import Not from "./views/Not/Not";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/oreum/upload"
            component={Auth(UploadPage, true)}
          />
          <Route
            exact
            path="/oreum/:oreumId"
            component={Auth(DetailOreumRoomPage, null)}
          />
          <Route
            exact
            path="/searchoreum"
            component={Auth(SearchOreum, null)}
          />
          <Route
            exact
            path="/oreum/detail/:id"
            component={Auth(OreumDetail, null)}
          />
          <Route path="*" component={Auth(Not, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
