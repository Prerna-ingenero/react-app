import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
function Projectdetailpage() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://192.168.8.205:8010/projectDetails/icap_project_18/connector")
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
            <th>Component Name</th>
            <th>Component description</th>
            <th>Last run time</th>
            <th>Lagging</th>
          </thead>
          <tbody>
            {state.map((data) => {
              return (
                <tr>
                  <td>{data.projectSchema}</td>
                  <td>{data.projectSchema}</td>
                  <td>{data.componentName}</td>
                  <td>{data.componentDescription}</td>
                  <td>{data.lastRunTime}</td>
                  <td>{data.lag}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projectdetailpage;
