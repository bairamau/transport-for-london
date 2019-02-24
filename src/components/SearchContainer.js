import React, { Component } from "react";
import { getStations } from "../utils/api";
import { Spin } from "antd";

import Search from "./Search";

export default class SearchContainer extends Component {
  state = {
    loading: true,
    stations: []
  };

  async componentWillMount() {
    const stations = await getStations();
    this.setState(() => ({ stations, loading: false }));
  }

  render() {
    const { loading, stations } = this.state;
    return loading ? (
      <Spin className="app__loader" size="large" tip="Loading..." />
    ) : (
      <Search stations={stations} history={this.props.history} />
    );
  }
}
