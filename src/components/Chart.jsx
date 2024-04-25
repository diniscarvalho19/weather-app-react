import React, { useState } from "react";
import CustomTooltip from "./CustomTooltip.jsx";
import "../styles/Chart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = ({ data }) => {
  if (Object.keys(data).length === 0) return null;

  const {
    time,
    hour,
    temperature,
    humidity,
    rain,
    snow,
    sunshine_duration,
    global_tilted_irradiance,
    weather_code,
    wind_speed_10m,
  } = data;

  const [showTemperature, setShowTemperature] = useState(true);
  const [showHumidity, setShowHumidity] = useState(true);
  const [showRain, setShowRain] = useState(false);
  const [showSnow, setShowSnow] = useState(false);
  const [showSunshineDuration, setShowSunshineDuration] = useState(false);
  const [showGlobalTiltedIrradiance, setShowGlobalTiltedIrradiance] =
    useState(false);
  const [showWeatherCode, setShowWeatherCode] = useState(false);
  const [showWindSpeed, setShowWindSpeed] = useState(false);

  //sunshine_duration from seconds per hour to percentage per hour
  const sunshinePercentage = sunshine_duration.map(
    (duration) => (duration / 3600) * 100
  );

  const chartData = time.map((time, index) => ({
    time,
    hour: hour[index],
    temperature: temperature[index],
    humidity: humidity[index],
    rain: rain[index],
    snow: snow[index],
    sunshine_duration: sunshinePercentage[index],
    global_tilted_irradiance: global_tilted_irradiance[index],
    weather_code: weather_code[index],
    wind_speed_10m: wind_speed_10m[index],
  }));

  return (
    <div className="chart-container">
      <div className="chart">
        <LineChart width={800} height={400} data={chartData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {showTemperature && (
            <Line
              type="monotone"
              dataKey="temperature"
              name="Temperature (°C)"
              stroke="#8884d8"
              dot={false}
            />
          )}
          {showHumidity && (
            <Line
              type="monotone"
              dataKey="humidity"
              name="Humidity (%)"
              stroke="#82ca9d"
              dot={false}
            />
          )}
          {showRain && (
            <Line
              type="monotone"
              dataKey="rain"
              name="Rain (mm)"
              stroke="#ffc658"
              dot={false}
            />
          )}
          {showSnow && (
            <Line
              type="monotone"
              dataKey="snow"
              name="Snow (cm)"
              stroke="#00bcd4"
              dot={false}
            />
          )}
          {showSunshineDuration && (
            <Line
              type="monotone"
              dataKey="sunshine_duration"
              name="Sunshine Duration (%)"
              stroke="#ff9800"
              dot={false}
            />
          )}
          {showGlobalTiltedIrradiance && (
            <Line
              type="monotone"
              dataKey="global_tilted_irradiance"
              name="Global Tilted Irradiance (kWh)"
              stroke="#4caf50"
              dot={false}
            />
          )}
          {showWeatherCode && (
            <Line
              type="monotone"
              dataKey="weather_code"
              name="Weather Code"
              stroke="#ff0000"
              dot={false}
            />
          )}
          {showWindSpeed && (
            <Line
              type="monotone"
              dataKey="wind_speed_10m"
              name="Wind Speed (km/h)"
              stroke="#0000ff"
              dot={false}
            />
          )}
        </LineChart>
      </div>
      <div className="chart-controls">
        <button onClick={() => setShowTemperature(!showTemperature)}>
          {showTemperature ? "Hide Temperature" : "Show Temperature"}
        </button>
        <button onClick={() => setShowHumidity(!showHumidity)}>
          {showHumidity ? "Hide Humidity" : "Show Humidity"}
        </button>
        <button onClick={() => setShowRain(!showRain)}>
          {showRain ? "Hide Rain" : "Show Rain"}
        </button>
        <button onClick={() => setShowSnow(!showSnow)}>
          {showSnow ? "Hide Snow" : "Show Snow"}
        </button>
        <button onClick={() => setShowSunshineDuration(!showSunshineDuration)}>
          {showSunshineDuration ? "Hide Sunshine" : "Show Sunshine"}
        </button>
        <button
          onClick={() =>
            setShowGlobalTiltedIrradiance(!showGlobalTiltedIrradiance)
          }
        >
          {showGlobalTiltedIrradiance ? "Hide GTI" : "Show GTI"}
        </button>
        <button onClick={() => setShowWeatherCode(!showWeatherCode)}>
          {showWeatherCode ? "Hide Weather Code" : "Show Weather Code"}
        </button>
        <button onClick={() => setShowWindSpeed(!showWindSpeed)}>
          {showWindSpeed ? "Hide Wind Speed" : "Show Wind Speed"}
        </button>
      </div>
    </div>
  );
};

export default Charts;
