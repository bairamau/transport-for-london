import React, { Component } from "react";
import { getStations, getAllArrivals, getArrivalsByLine } from "./utils/api";

const Context = React.createContext();

class Provider extends Component {
  state = {
    loadingStations: true,
    stations: []
  };

  async componentDidMount() {
    const stations = await getStations();
    this.setState(() => ({ stations, loadingStations: false }));
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
