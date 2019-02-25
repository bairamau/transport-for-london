import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spin } from "antd";

import { Consumer } from "../context";
import SearchContainer from "./SearchContainer";
import StationContainer from "./StationContainer";
import FavouritedContainer from "./FavouritedContainer";
import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Consumer>
            {store =>
              store.loadingStations ? (
                <Spin className="app__loader" size="large" tip="Loading..." />
              ) : (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/search" component={SearchContainer} />
                  <Route
                    path="/station/:naptanId"
                    render={props => <StationContainer {...store} {...props} />}
                  />
                  <Route path="/favourited" component={FavouritedContainer} />
                  <Route render={() => <h1>Not Found</h1>} />
                </Switch>
              )
            }
          </Consumer>

          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;
