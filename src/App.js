import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar.js";
import Banner from "./Banner.js";
import Section1 from "./Section1.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js";
import PageUnderCOnstruction from "./PageUnderConstruction";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavigationBar />
          <Banner />
          <Section1 />
          <Section2 />
          <Section3 />
        </Route>
        <Route exact path="/Home">
          <NavigationBar />
          <PageUnderCOnstruction />
        </Route>
        <Route exact path="/aboutus">
          <NavigationBar />
          <PageUnderCOnstruction />
        </Route>
        <Route exact path="/services">
          <NavigationBar />
          <PageUnderCOnstruction />
        </Route>
        <Route exact path="/portfolio">
          <NavigationBar />
          <PageUnderCOnstruction />
        </Route>
        <Route exact path="/blog">
          <NavigationBar />
          <PageUnderCOnstruction />
        </Route>
        <Route exact path="/contact">
          <NavigationBar />
          <PageUnderCOnstruction />
        </Route>
        <Route path="/">
          <NavigationBar />
          <PageUnderCOnstruction />
        </Route>
      </Switch>
    </Router>
  );
}
