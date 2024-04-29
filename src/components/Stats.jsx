import React from "react";
import "../styles/Stats.css";
import { weatherCodesData } from "../data/weather_codes.js";
import SvgContainer from "./SvgContainer.jsx";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";

const Stats = ({ data }) => {
  if (Object.keys(data).length === 0) return null;

  const {
    time,
    temperature,
    humidity,
    rain,
    snow,
    //sunshine_duration, TODO: Show sunshine % during the day (obviously)
    global_tilted_irradiance,
    weather_code,
    wind_speed_10m,
  } = data;

  const averageHumidity = totalSum(humidity) / humidity.length;

  const averageWindSpeed = totalSum(wind_speed_10m) / wind_speed_10m.length;

  const averageTemperature = totalSum(temperature) / temperature.length;

  const maxTemperature = Math.max(...temperature);

  const minTemperature = Math.min(...temperature);

  const totalRain = totalSum(rain);

  const totalSnow = totalSum(snow);

  let mostFrequentWeatherCode = null;
  let maxCount = 0;
  let weatherCodeCounts = {};

  weather_code.forEach((code) => {
    weatherCodeCounts[code] = (weatherCodeCounts[code] || 0) + 1;
    if (weatherCodeCounts[code] > maxCount) {
      maxCount = weatherCodeCounts[code];
      mostFrequentWeatherCode = code;
    }
  });

  const mostCommonWeatherDescription =
    weatherCodesData[mostFrequentWeatherCode][0];

  const mostCommonWeatherKey = weatherCodesData[mostFrequentWeatherCode][1];

  //global_tilted_irradiance = {bi-axis | difuse and direct | W/m2}
  const solarEnergy = calculateSolarPanelEnergy(totalSum(global_tilted_irradiance));

  const solarEnergyPerDay = solarEnergy / (time.length / 24);

  return (
    <div className="stats-container">
      <div className="info--icon--container">
        <SvgContainer
          svg_key="info"
          tooltip_message={<p> Hover over the data you want to know more!</p>}
        ></SvgContainer>
      </div>

      <div className="main--stats">
        <div className="main--icon--container">
          <SvgContainer
            class_name="icon--container"
            svg_key={mostCommonWeatherKey}
            value={mostCommonWeatherKey}
            tooltip_message={
              <p> Most common weather event in the selected period.</p>
            }
          ></SvgContainer>
        </div>

        <div className="main--info--container">
          <div className="upper">
            <p>{averageTemperature.toFixed(1)}°C</p>
          </div>

          <Tooltip anchorSelect=".upper" place="top">
            <p>Average air temperature at 2 meters above ground.</p>
          </Tooltip>

          <div className="downer">
            <p>
              {" "}
              <span id="min">{minTemperature}°C</span> /{" "}
              <span id="max">{maxTemperature} °C</span>
            </p>
          </div>

          <Tooltip anchorSelect="#min" place="bottom">
            <p>Minimum air temperature at 2 meters above ground.</p>
          </Tooltip>

          <Tooltip anchorSelect="#max" place="bottom">
            <p>Minimum air temperature at 2 meters above ground.</p>
          </Tooltip>
        </div>

        <div className="other--info--container">
          <SvgContainer
            class_name="other--icons--container"
            svg_key="total-rain"
            value={totalRain.toFixed(1)}
            unit={"mm"}
            tooltip_message={
              <p>
                {" "}
                Total rain from large scale weather systems of the preceding
                hour in millimeter.
              </p>
            }
          ></SvgContainer>

          <SvgContainer
            class_name="other--icons--container"
            svg_key="avg-humidity"
            value={averageHumidity.toFixed(1)}
            unit={"%"}
            tooltip_message={
              <p> Average relative humidity at 2 meters above ground.</p>
            }
          ></SvgContainer>

          <SvgContainer
            class_name="other--icons--container"
            svg_key="total-snow"
            value={totalSnow.toFixed(1)}
            unit={"cm"}
            tooltip_message={
              <p>
                {" "}
                Total snowfall amount of the preceding hour in centimeters.
              </p>
            }
          ></SvgContainer>

          <SvgContainer
            class_name="other--icons--container"
            svg_key="avg-wind"
            value={averageWindSpeed.toFixed(1)}
            unit={"km/h"}
            tooltip_message={
              <p> Average wind speed at 10 meters above ground. </p>
            }
          ></SvgContainer>

          <SvgContainer
            class_name="other--icons--container"
            svg_key="total-solar-energy"
            value={solarEnergy.toFixed(1)}
            unit={"kWh"}
            tooltip_message={
              <>
                <p>
                  Total energy that could be harnesses with a<br></br>
                  Solar Panel of 2m&sup2; surface area and a 17% efficiency.
                </p>
                <p>[Average per Day: {solarEnergyPerDay.toFixed(2)} kWh]</p>
                <p>
                  (The average household consumption in Portugal per day is 9.15
                  kWh){" "}
                </p>
              </>
            }
          ></SvgContainer>
        </div>
      </div>
      <div className="curiosities--container">
        <p>{mostCommonWeatherDescription}</p>
      </div>
    </div>
  );
};

function totalSum(data_array) {
  return data_array.reduce((total, current) => total + current, 0);
}

function calculateSolarPanelEnergy(
  totalEnergy,
  panelEfficiency = 0.17,
  panelSurfaceArea = 2
) {
  const usableEnergy = totalEnergy * panelEfficiency * panelSurfaceArea; //panelSurfaceArea in m2

  const energyInKWh = usableEnergy / 1000; // Wh to kWh

  return energyInKWh;
}

Stats.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Stats;
