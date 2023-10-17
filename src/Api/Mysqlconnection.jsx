import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Mysqlconnection() {
  const [chartData, setchartData] = useState({});
  useEffect(() => {
    fetch("http://192.168.8.205:8010/sqlThreads")
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
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        )}
      </div>
    </div>
  );
}

export default Mysqlconnection;
