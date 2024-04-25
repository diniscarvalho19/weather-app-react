import React from "react";

const Stats = ({ data }) => {
  if (Object.keys(data).length === 0) return null;

  const {time, temperature, humidity, rain, snow, sunshine_duration, global_tilted_irradiance} = data;

  const averageTemperature = temperature.reduce((total, current) => total + current, 0) / temperature.length;

  const maxTemperature = Math.max(...temperature);

  const minTemperature = Math.min(...temperature);

  const totalRain = totalSum(rain);
  
  const totalSnow = totalSum(snow);

  // global_tilted_irradiance = {bi-axis | difuse and direct | W/m2}
  // totalEnergy = Wh/m2
  const totalEnergy = global_tilted_irradiance.reduce((total, irradiance, index) => {
    const energy = irradiance * (sunshine_duration[index] / 60);
    return total + energy;
    }, 0);

  const solarEnergy = calculateSolarPanelEnergy( totalEnergy) 

  const solarEnergyPerDay = solarEnergy / (time.length / 24)



  return (
    <div className="stats-container">
      <div>
        <h2>Statistics</h2>
        <p>Average Temperature: {averageTemperature.toFixed(2)} °C</p>
        <p>Max Temperature: {maxTemperature} °C</p>
        <p>Min Temperature: {minTemperature} °C</p>
        <p>Total Rain: {totalRain.toFixed(2)} mm</p>
        <p>Total Snow: {totalSnow.toFixed(2)} cm</p>
        <p>Total Solar Panel Energy: {solarEnergy.toFixed(2)} kWh</p>
        <p>Total Solar Panel Energy per Day: {solarEnergyPerDay.toFixed(2)} kWh per Day (The average household consumption is 29 kWh per Day) </p>
      </div>
    </div>
  );
};

function totalSum(data_array){
    return data_array.reduce((total, current) => total + current, 0);
}

function calculateSolarPanelEnergy( totalEnergy, panelEfficiency = 0.17, panelSurfaceArea = 2) {
    
    const usableEnergy = totalEnergy * panelEfficiency * panelSurfaceArea; //panelSurfaceArea in m2

    const energyInKWh = usableEnergy / 1000; // Wh to kWh

    return energyInKWh;
}


//Prop types thingys here

export default Stats;


