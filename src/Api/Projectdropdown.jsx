import React, { useState, useEffect } from "react";

function Projectdropdown() {
  const [selects, setSelects] = useState([]);

  const [dropdownEle, setdropdownEle] = useState("");

  useEffect(() => {
    fetch("http://192.168.8.205:8010/projectDropdown")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        console.log(setSelects(data));
      });
  }, []);

  return (
    <div>
      <select value={selects} onChange={(e) => setSelects(e.target.value)}>
        {selects.map((dropdownEle) => {
          return <option>{dropdownEle}</option>;
        })}
      </select>
    </div>
  );
}

export default Projectdropdown;
