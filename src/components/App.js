import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchContainer from "./SearchContainer";
import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchContainer} />
            {/* <Route path="/station/:stationNaptanId" component={Station} /> */}
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;
