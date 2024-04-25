import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Charts = ({ data }) => {

    const {time, temperature, humidity} = data;

    const chartData = time.map((time, index) => ({
        time,
        temperature: temperature[index],
        humidity: humidity[index]
      }));

  return (
    <div className="chart-container">
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" name="Temperature (°C)" stroke="green" />
        <Line type="monotone" dataKey="humidity" name="Humidity (%)" stroke="blue" />
      </LineChart>
    </div>
  );
};

export default Charts;
