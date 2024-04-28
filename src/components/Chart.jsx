import React from "react";
import CustomTooltip from "./CustomTooltip.jsx";
import { ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
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

const Charts = ({ data, chartVisibility, toggleChartVisibility }) => {
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
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {chartVisibility["temperature"] && (
              <Line
                type="monotone"
                dataKey="temperature"
                name="Temperature (°C)"
                stroke="#8884d8"
                dot={false}
              />
            )}
            {chartVisibility["humidity"] && (
              <Line
                type="monotone"
                dataKey="humidity"
                name="Humidity (%)"
                stroke="#82ca9d"
                dot={false}
              />
            )}
            {chartVisibility["rain"] && (
              <Line
                type="monotone"
                dataKey="rain"
                name="Rain (mm)"
                stroke="#ffc658"
                dot={false}
              />
            )}
            {chartVisibility["snow"] && (
              <Line
                type="monotone"
                dataKey="snow"
                name="Snow (cm)"
                stroke="#00bcd4"
                dot={false}
              />
            )}
            {chartVisibility["sunshineDuration"] && (
              <Line
                type="monotone"
                dataKey="sunshine_duration"
                name="Sunshine Duration (%)"
                stroke="#ff9800"
                dot={false}
              />
            )}
            {chartVisibility["globalTiltedIrradiance"] && (
              <Line
                type="monotone"
                dataKey="global_tilted_irradiance"
                name="Global Tilted Irradiance (kWh)"
                stroke="#4caf50"
                dot={false}
              />
            )}
            {chartVisibility["weatherCode"] && (
              <Line
                type="monotone"
                dataKey="weather_code"
                name="Weather Code"
                stroke="#ff0000"
                dot={false}
              />
            )}
            {chartVisibility["windSpeed"] && (
              <Line
                type="monotone"
                dataKey="wind_speed_10m"
                name="Wind Speed (km/h)"
                stroke="#0000ff"
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-controls">
        <button
          className="main--nav--button"
          id={chartVisibility["temperature"] + "_chart_button"}
          onClick={() => toggleChartVisibility("temperature")}
        >
          {chartVisibility["temperature"]
            ? "Hide Temperature"
            : "Show Temperature"}
        </button>
        <button
          className="main--nav--button"
          id={chartVisibility["humidity"] + "_chart_button"}
          onClick={() => toggleChartVisibility("humidity")}
        >
          {chartVisibility["humidity"] ? "Hide Humidity" : "Show Humidity"}
        </button>
        <button
          className="main--nav--button"
          id={chartVisibility["rain"] + "_chart_button"}
          onClick={() => toggleChartVisibility("rain")}
        >
          {chartVisibility["rain"] ? "Hide Rain" : "Show Rain"}
        </button>
        <button
          className="main--nav--button"
          id={chartVisibility["snow"] + "_chart_button"}
          onClick={() => toggleChartVisibility("snow")}
        >
          {chartVisibility["snow"] ? "Hide Snow" : "Show Snow"}
        </button>
        <button
          className="main--nav--button"
          id={chartVisibility["sunshineDuration"] + "_chart_button"}
          onClick={() => toggleChartVisibility("sunshineDuration")}
        >
          {chartVisibility["sunshineDuration"]
            ? "Hide Sunshine"
            : "Show Sunshine"}
        </button>
        <button
          className="main--nav--button"
          id={chartVisibility["globalTiltedIrradiance"] + "_chart_button"}
          onClick={() => toggleChartVisibility("globalTiltedIrradiance")}
        >
          {chartVisibility["globalTiltedIrradiance"] ? "Hide GTI" : "Show GTI"}
        </button>
        <button
          className="main--nav--button"
          id={chartVisibility["weatherCode"] + "_chart_button"}
          onClick={() => toggleChartVisibility("weatherCode")}
        >
          {chartVisibility["weatherCode"]
            ? "Hide Weather Code"
            : "Show Weather Code"}
        </button>
        <button
          className="main--nav--button"
          id={chartVisibility["windSpeed"] + "_chart_button"}
          onClick={() => toggleChartVisibility("windSpeed")}
        >
          {chartVisibility["windSpeed"] ? "Hide Wind Speed" : "Show Wind Speed"}
        </button>
      </div>
    </div>
  );
};

Charts.propTypes = {
  data: PropTypes.object.isRequired,
  chartVisibility: PropTypes.object.isRequired,
  toggleChartVisibility: PropTypes.func.isRequired,
};

export default Charts;
