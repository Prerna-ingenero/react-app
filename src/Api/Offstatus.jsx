import React, { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

function Offstatus() {
  const [chartData, setchartData] = useState({});
  useEffect(() => {
    fetch(
      "http://192.168.8.205:8010/componentOffData/icap_project_17/PI-First-Connector"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setchartData(data);
      });
  }, []);
  return (
    <div classname="linechart">
      <div classname="charts">
        {chartData && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={400} data={chartData}>
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default Offstatus;
