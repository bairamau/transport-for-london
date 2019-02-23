import React, { Component } from "react";
import { getStations, getAllArrivals, getArrivalsByLine } from "./utils/api";

const Context = React.createContext();
class Provider extends Component {
  render() {
    <Context.Provider
      value={{ getStations, getAllArrivals, getArrivalsByLine }}
    >
      {this.props.children}
    </Context.Provider>;
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
