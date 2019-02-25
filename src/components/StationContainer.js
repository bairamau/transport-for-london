import React, { Component } from "react";
import Station from "./Station";
import { Spin } from "antd";

export default class StationContainer extends Component {
  componentWillMount() {
    const { match, setCurrentStation } = this.props;
    setCurrentStation(match.params.naptanId);
  }

  componentWillUnmount() {
    this.props.resetCurrent();
  }

  render() {
    const {
      currentStation,
      currentArrivals,
      loadingCurrentStation,
      loadingCurrentArrivals
    } = this.props;
    return loadingCurrentStation || loadingCurrentArrivals ? (
      <Spin className="app__loader" size="large" tip="Loading..." />
    ) : (
      <Station station={currentStation} arrivals={currentArrivals} />
    );
  }
}
