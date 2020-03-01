import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import App from "./App";
import About from './components/about';
import JSON from "./components/data";
import Header from './components/header'
import Footer from './components/footer'
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router,  Switch } from 'react-router-dom'
const routing = (
  <Router>
    <div style={{padingTop:'40px', padingBottom:'40px'}}>
    <Header title='Header' data={JSON}  />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      </Switch>
      <Footer title='Footer' data={JSON}/>

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
