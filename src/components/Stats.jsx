import React from "react";
import "../styles/Stats.css";
import {weatherCodesData} from "../data/weather_codes.js";
import SvgContainer from "./SvgContainer.jsx";

const Stats = ({ data }) => {
  if (Object.keys(data).length === 0) return null;

  const {
    time,
    temperature,
    humidity,
    rain,
    snow,
    sunshine_duration,
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

  // global_tilted_irradiance = {bi-axis | difuse and direct | W/m2}
  // totalEnergy = Wh/m2
  const totalEnergy = global_tilted_irradiance.reduce(
    (total, irradiance, index) => {
      const energy = irradiance * (sunshine_duration[index] / 60);
      return total + energy;
    },
    0
  );

  let mostFrequentWeatherCode = null;
  let maxCount = 0;
  let weatherCodeCounts = {};

  weather_code.forEach(code => {
    weatherCodeCounts[code] = (weatherCodeCounts[code] || 0) + 1;
    if (weatherCodeCounts[code] > maxCount) {
      maxCount = weatherCodeCounts[code];
      mostFrequentWeatherCode = code;
    }
  });


  const mostCommonWeatherDescription = weatherCodesData[mostFrequentWeatherCode][0];

  const mostCommonWeatherKey = weatherCodesData[mostFrequentWeatherCode][1];

  const solarEnergy = calculateSolarPanelEnergy(totalEnergy);

  const solarEnergyPerDay = solarEnergy / (time.length / 24);

  return (
    <div className="stats-container">
      <div className="main--stats">

<div className="main--icon--container">
        <SvgContainer class_name="icon--container" svg_key={"hail"} value={mostCommonWeatherKey}></SvgContainer>
        </div>

        <div className="main--info--container">
          <div className="upper">
            <p>{averageTemperature.toFixed(1)}°C</p>
          </div>

          <div className="downer">
            <p>
              {minTemperature}°C / {maxTemperature} °C
            </p>
          </div>
        </div>

        <div className="other--info--container">
            <SvgContainer class_name="other--icons--container" svg_key="total-rain" value={totalRain.toFixed(1) + " mm"}></SvgContainer>
           
            <SvgContainer class_name="other--icons--container" svg_key="avg-humidity" value={averageHumidity.toFixed(1) + " %"}></SvgContainer>

            <SvgContainer class_name="other--icons--container" svg_key="total-snow" value={totalSnow.toFixed(1) + " cm"}></SvgContainer>

            <SvgContainer class_name="other--icons--container" svg_key="avg-wind" value={averageWindSpeed.toFixed(1) + " km/h"}></SvgContainer>

            <SvgContainer class_name="other--icons--container" svg_key="total-solar-energy" value={solarEnergy.toFixed(1) + " kWh"}></SvgContainer>
          
        </div>
      </div>
      <div className="curiosities--container">
        <p>
          Total Solar Panel Energy per Day: {solarEnergyPerDay.toFixed(2)} kWh
        </p>
        <p>(The average household consumption per day is 29 kWh) </p>

        <br></br>

        <p>Most common weather:</p> 
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

//Prop types thingys here

export default Stats;
