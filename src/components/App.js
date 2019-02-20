import React, { Component } from "react";
import { fetchData } from "../utils/api";
import Loader from './Loader'
class App extends Component {
  state = {
    loading: true,
    data: []
  };
  async componentDidMount() {
    const data = await fetchData("/StopPoint/Meta/StopTypes");
    this.setState(() => ({ loading: false, data }));
  }
  render() {
    const { data, loading } = this.state;
    return (
      <div className="app-container">
        {loading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <ul>
            {data.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
