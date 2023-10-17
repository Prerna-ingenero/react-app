import React from "react";
export default function Counttable(props) {
  const { total, lagging, off } = props;

  return (
    <div>
      <div>{total}</div>
      <div class="row-data">
        <span>{lagging}</span>
        <span>{off}</span>
      </div>
    </div>
  );
}
