import React, { useState } from "react";

function LastUpdatedTime() {
  const [state, setState] = useState("");
  fetch("http://192.168.8.205:8010/lastUpdatedTime")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(setState(data));
    });
  return <div>{state}</div>;
}

export default LastUpdatedTime;
