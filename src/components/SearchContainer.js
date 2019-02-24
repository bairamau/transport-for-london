import React from "react";
import { Consumer } from "../context";
import { Spin } from "antd";

import Search from "./Search";

const SearchContainer = () => (
  <Consumer>
    {store =>
      store.loadingStations ? (
        <Spin className="app__loader" size="large" tip="Loading..." />
      ) : (
        <Search stations={store.stations} />
      )
    }
  </Consumer>
);

export default SearchContainer;
