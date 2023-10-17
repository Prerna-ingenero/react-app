import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
function Projectconfigtable() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("http://192.168.8.205:8010/projectConfig")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data);
      });
  }, []);
  return (
    <div class="table-header">
      <h3>Project</h3>
      <span>
        <Icon icon="ic:baseline-save-alt" />
        <button class="download">Download Report</button>
      </span>
      <div class="button-header">
        <span>
          <button>All</button>
        </span>
        <span>
          <button>Connector</button>
        </span>
        <span>
          <button>Table</button>
        </span>
        <span>
          <button>BLC</button>
        </span>
        <span>
          <button>LBT</button>
        </span>
      </div>
      <div class="App">
        <table>
          <thead>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Timezone Source</th>
            <th>Timezone destination</th>
            <th>Lag value</th>
            <th>Connector</th>
            <th>Table</th>
            <th>BLC</th>
            <th>LBT</th>
            <th>ON/OFF</th>
          </thead>
          <tbody>
            {state.map((data) => {
              return (
                <tr>
                  <td>{data.project}</td>
                  <td>{data.projectDescription}</td>
                  <td>{data.timezoneSource}</td>
                  <td>{data.timezoneDestination}</td>
                  <td>{data.lag}</td>
                  <td>{data.connector}</td>
                  <td>{data.tables}</td>
                  <td>{data.blc}</td>
                  <td>{data.lbt}</td>
                  <td>{data.overall}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projectconfigtable;
