import React from "react";

function Table({ data }) {
  if (Object.keys(data).length === 0) return;

  const { time, hour, temperature, humidity, rain, snow, sunshine_duration, global_tilted_irradiance } = data;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature(°C)</th>
            <th>Humidity(%)</th>
            <th>Rain(mm)</th>
            <th>Snow(cm)</th>
            <th>Sunshine Duration(s)</th>
            <th>Global Tilted Radiance(Wh)</th>
          </tr>
        </thead>
        <tbody>
          {time.map((t, index) => (
            <tr key={index}>

               {hour[index] < 10 ? (<td>{t + " | 0" + hour[index] + "h"}</td>) : (<td>{t + " | " + hour[index] + "h"}</td>)} 
              
              <td>{temperature[index]}</td>
              <td>{humidity[index]}</td>
              <td>{rain[index]}</td>
              <td>{snow[index]}</td>
              <td>{sunshine_duration[index]}</td>
              <td>{global_tilted_irradiance[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//Prop types thingys here

export default Table;
