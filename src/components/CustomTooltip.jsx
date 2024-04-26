import React from "react";
import "../styles/CustomTooltip.css";
import { weatherCodesData } from "../data/weather_codes.js";

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      const hour = payload[0].payload.hour;
        return (
          <div className="custom-tooltip">
            {hour < 10 ? (<p>{"Time: " + label + " | 0" + hour + "h"}</p>) : (<p>{"Time: " + label + " | " + hour + "h"}</p>)} 
            {payload.map((data, index) => (
             <p key={index}>{`${data.name}: ${data.name === "Weather Code" ? data.value + " - " + weatherCodesData[data.value][1] : data.value}`}</p>
            ))}
          </div>
        );
      }
      return null;
  }

//Prop types thingys here

export default CustomTooltip;
