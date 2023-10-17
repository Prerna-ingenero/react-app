import React, { useState } from "react";
import { Icon } from "@iconify/react";
function Table() {
  const [state, setState] = useState([]);
  fetch("http://192.168.8.205:8010/tableCount")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(setState(data));
    });
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <h3>Table</h3>
          <h1>
            {state.total}
            <span>{state.lagging}</span>
            <span>{state.off}</span>
          </h1>
          <span>
            <Icon icon="ic:twotone-hourglass-top" />
            <Icon icon="ic:baseline-power-settings-new" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Table;
