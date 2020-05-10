import React from "react";
import { Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import data from "../aboutData";

function RenderTab(props) {
  return <Tab label={props.name} component={Link} to={`/about/${props.to}`} />;
}

function search(data, key) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].to === key) {
      console.log("found");
      return data[i].component;
    }
  }
}

const Comp = ({ match }) =>
  console.log("match", match) || <div>{search(data, match.params.id)}</div>;

export default function About() {
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
        <Router>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            className="tabs fadeInUp"
            style={{ animationDelay: "1.2s" }}
          >
            {data.map(RenderTab)};
          </Tabs>
          {/* Router*/}
          <Route path="/about/:id" component={Comp} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}
