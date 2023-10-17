import React from "react";
import Totalproject from "./Totalproject";
import Connector from "./Connector";
import Table from "./Table";
import Blc from "./Blc";
import Lbt from "./Lbt";
import Totaluser from "./Totaluser";

function Topsection() {
  return (
    <div className="main-cards">
      <div className="card">
        <h1>
          <Totalproject />
        </h1>
        <div className="card-inner">
          <h3>Projects</h3>
        </div>
      </div>
      <Connector />
      <Table />
      <Blc />
      <Lbt />
      <div className="card">
        <h1>
          <Totaluser />
        </h1>
        <div className="card-inner">
          <h3>Total user</h3>
        </div>
      </div>
    </div>
  );
}

export default Topsection;
