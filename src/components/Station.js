import React, { Component } from "react";
import { Collapse, Table } from "antd";

const Panel = Collapse.Panel;
const { Column, ColumnGroup } = Table;

export default class Station extends Component {
  render() {
    const { station, arrivals } = this.props;
    const { commonName } = station;
    return (
      <div className="station">
        <h1 className="station__heading">
          {commonName.slice(0, commonName.indexOf("Underground Station"))}
        </h1>
        <Collapse accordion>
          {Object.entries(arrivals).map(([line, platforms]) => (
            <Panel header={line} key={line}>
              {Object.entries(platforms).map(
                ([platform, correspondingArrivals]) => (
                  <Table bordered rowKey="vehicleId" key={platform} dataSource={correspondingArrivals} pagination={false}>
                    <ColumnGroup title={<h3>
                      {platform}
                    </h3>}>
                      <Column
                        title="Towards"
                        key="towards"
                        dataIndex="towards"
                      />
                      <Column
                        title="Expected arrival"
                        key="expected arrival"
                        dataIndex="expectedArrival"
                      />
                    </ColumnGroup>
                  </Table>
                )
              )}
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}
