import React, { useState, useEffect } from "react";
import "../styles/Table.css";

function Table({ data }) {
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

  const [pageStep, setPageStep] = useState(11);

  const [currentPage, setCurrentPage] = useState(0);

  const [currentPageInput, setCurrentPageInput] = useState(currentPage + 1);

  let maxPages = Math.ceil(time.length / pageStep);

  const increasePageSize = () => {
    if (currentPage < maxPages - 1) {
      setCurrentPage((prev) => prev + 1);
      setCurrentPageInput((prev) => prev + 1);
    }
  };

  const decreasePageSize = () => {
    if (currentPage !== 0) {
      setCurrentPage((prev) => prev - 1);
      setCurrentPageInput((prev) => prev - 1);
    }
  };

  const handleChange = (pageNumber) => {
    setCurrentPageInput(pageNumber);
    if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= maxPages) {
      setCurrentPage(pageNumber - 1);
    }
  };

  return (
    <div className="table--container">
      <div className="table--settings">
        <button className="main--nav--button" onClick={decreasePageSize}> &larr;</button>
        <div>
          <label> Go to page: </label>
          <input
            type="number"
            min="1"
            max={maxPages}
            value={currentPageInput}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <button className="main--nav--button" onClick={increasePageSize}> &rarr;</button>
      </div>

      <table>
        <thead>
          <tr>
            <th id="td_time">Time</th>
            <th>Temp.(°C)</th>
            <th>RH (%)</th>
            <th>Rain(mm)</th>
            <th>Snow(cm)</th>
            <th>Sun(s)</th>
            <th>GTI(Wh)</th>
            <th>WMO</th>
            <th>Wind(m/s)</th>
          </tr>
        </thead>
        <tbody>
          {time.map((t, index) =>
            currentPage * pageStep < index &&
            index < (currentPage + 1) * pageStep ? (
              <tr key={index}>
                {hour[index] < 10 ? (
                  <td>{t + " | 0" + hour[index] + "h"}</td>
                ) : (
                  <td>{t + " | " + hour[index] + "h"}</td>
                )}
                <td>{temperature[index]}</td>
                <td>{humidity[index]}</td>
                <td>{rain[index]}</td>
                <td>{snow[index]}</td>
                <td>{sunshine_duration[index]}</td>
                <td>{global_tilted_irradiance[index]}</td>
                <td>{weather_code[index]}</td>
                <td>{wind_speed_10m[index]}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>


      <p className="page--info">
        {" "}
        Page {currentPage + 1} of {maxPages}{" "}
      </p>
    </div>
  );
}

//Prop types thingys here

export default Table;
