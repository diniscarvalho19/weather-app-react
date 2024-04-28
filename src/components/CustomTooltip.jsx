import React from "react";
import "../styles/CustomTooltip.css";
import { weatherCodesData } from "../data/weather_codes.js";
import PropTypes from "prop-types";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const hour = payload[0].payload.hour;
    return (
      <div className="custom-tooltip">
        {hour < 10 ? (
          <p>{"Time: " + label + " | 0" + hour + "h"}</p>
        ) : (
          <p>{"Time: " + label + " | " + hour + "h"}</p>
        )}
        {payload.map((data, index) => (
          <p key={index}>{`${data.name}: ${
            data.name === "Weather Code"
              ? data.value + " - " + weatherCodesData[data.value][1]
              : data.value
          }`}</p>
        ))}
      </div>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default CustomTooltip;
