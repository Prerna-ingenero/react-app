import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Bilaxicalchart() {
  const [ramData, setRamData] = useState([]);
  const [cpuData, setCpuData] = useState([]);
  var [data, setdata] = useState([]);
  useEffect(() => {
    fetch("://192.168.8.205:8010/ramUtilization")
      .then((res) => res.json())
      .then((data) => {
        setRamData(data);
      });

    fetch("http://192.168.8.205:8010/cpuUtilization")
      .then((res) => res.json())
      .then((data) => {
        setCpuData(data);
      });

    var tempdata = [];
    for (var i = 0; i < ramData.length; i++) {
      tempdata.push({
        timestamp: ramData[i].timestamp,
        Ram: ramData[i].value,
        Cpu: cpuData[i].value,
      });
    }
    setdata(tempdata);
    console.log(tempdata);
  }, [ramData, cpuData, data]);

  return (
    <div className="bilaxicahttplchart">
      <div className="charts">
        {ramData && ramData.length > 0 && cpuData && cpuData.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Cpu"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Ram"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default Bilaxicalchart;
