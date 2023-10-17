import React, { useState } from "react";

function Totaluser() {
  const [state, setState] = useState("");
  fetch("http://192.168.8.205:8010/userCount")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(setState(data));
    });
  return <div>{state}</div>;
}

export default Totaluser;
