import React from "react";
import { Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import data from "../aboutData";
import { AlignCenter, AlignJustify } from "react-feather";

function RenderTab(props) {
  return <Tab label={props.name} component={Link} to={props.to} />;
}

function RenderRoute(props) {
  return <Route exact path={props.path} component={props.component} />;
}

export default function About() {
  const style = {
    justifyContent: "center",
  };

  return (
    <div>
      <div className="Home">
        <Helmet>
          <title>PEC ACM Society</title>
          <meta name="title" content="Computer Science Society" />
        </Helmet>
        <Typography
          variant={"subtitle1"}
          component={"h1"}
          className="fadeInUp"
          style={{ animationDelay: "0.7s" }}
        >
          About Us
        </Typography>
      </div>
      <div className="Home">
        {/* Navtab*/}

        <Tabs
          indicatorColor="primary"
          textColor="primary"
          className="tabs fadeInUp"
          style={{ animationDelay: "1.2s" }}
        >
          {data.map(RenderTab)};
        </Tabs>
        {/* Router*/}
        <Router>
          <Switch>{data.map(RenderRoute)}</Switch>
          <Route />
        </Router>
      </div>
      <Footer />
    </div>
  );
}
