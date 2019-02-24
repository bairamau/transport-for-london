import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Input, List } from "antd";

export default class Search extends Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState(() => ({ inputValue }));
  };

  render() {
    const { inputValue } = this.state;
    const { stations } = this.props;
    const filtered = stations.filter(station =>
      station.commonName.toLowerCase().includes(inputValue.toLowerCase())
    );
    return (
      <div className="search">
        <div className="search__input-wrapper">
          <Input.Search
            value={inputValue}
            onChange={this.handleChange}
            enterButton
            onSearch={() => (
              <Redirect to={`/station/${filtered[0].naptanId}`} />
            )}
            placeholder="Station e.g. West Ham, Canning Town"
            size="large"
          />
        </div>
        <List
          style={{ overflowY: "auto" }}
          size="large"
          itemLayout="horizontal"
          dataSource={filtered}
          renderItem={item => (
            <List.Item key={item.naptanId} style={{ paddingLeft: "20px" }}>
              <Link to={`/station/${item.naptanId}`}>{item.commonName}</Link>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
