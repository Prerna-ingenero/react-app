import React from "react";
import { Icon } from "@iconify/react";
import LastUpdatedTime from "./LastUpdatedTime";

function Navbar() {
  return (
    <div className="main-title">
      <h3>ICAP Health Monitoring Dashboard</h3>
      <LastUpdatedTime />
      <Icon icon="ph:circle-half-fill" />
    </div>
  );
}

export default Navbar;
