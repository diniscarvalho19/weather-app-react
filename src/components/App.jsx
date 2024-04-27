import React, { useState, useEffect } from "react";
import { getRequest } from "../services/weatherService";
import Table from "./Table.jsx";
import Chart from "./Chart.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import Stats from "./Stats.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/App.css";
import "../styles/DatePicker.css";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showTable, setShowTable] = useState(false);

  const [showStats, setShowStats] = useState(true);

  const [showChart, setShowChart] = useState(false);

  const maxDate =  new Date(new Date().getTime()-(2*24*60*60*1000));


  const envApiUrl = (import.meta.env.MODE === "development" ? "http://localhost:3000/" : "https://sleepy-river-65200-79c7ffcf377b.herokuapp.com/");

  console.log(envApiUrl)


  const [formData, setFormData] = useState({
    location: "Lisbon",
    startDate: maxDate,
    endDate: maxDate,
  });

  const [apiURL, setApiURL] = useState(
    `${envApiUrl}weather?location=${formData.location}&start_date=${formData.startDate}&end_date=${formData.endDate}`
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, name) => {
    var { startDate, endDate } = formData;
    name === "startDate" ? (startDate = date) : (endDate = date);
    if (startDate > endDate) {
      [startDate, endDate] = [endDate, startDate];
      setFormData({ ...formData, startDate: startDate, endDate: endDate });
    } else {
      setFormData({ ...formData, [name]: date });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setApiURL(
      `${envApiUrl}/weather?location=${formData.location}&start_date=${formData.startDate}&end_date=${formData.endDate}`
    );
  };

  const cleanBeforeQuery = () => {
    setLoading(true);
    setWeatherData({});
  };

  useEffect(() => {
    async function fetchData() {
      try {
        cleanBeforeQuery();
        const response = await getRequest(apiURL);
        if (response.error) {
          setError(response.error);
          setWeatherData({});
        } else {
          setWeatherData({
            time: response.time,
            hour: response.hour,
            temperature: response.temperature_2m,
            humidity: response.relative_humidity_2m,
            rain: response.rain,
            snow: response.snowfall,
            sunshine_duration: response.sunshine_duration,
            global_tilted_irradiance: response.global_tilted_irradiance,
            weather_code: response.weather_code,
            wind_speed_10m: response.wind_speed_10m,
          });
          setError(null);
        }
        setLoading(false);
      } catch (error) {
        setError("Network error");
        setLoading(false);
      }
    }

    fetchData();
  }, [apiURL]);

  //Dynamic Styles

  const inputStyle = {
    width: `${30 + formData.location.length * 20}px`,
  };

  return (
    <div className="app--container">
      <form className="title--box" onSubmit={handleSubmit}>
        <label>Archive of</label>
        <input
          className="city--input"
          type="string"
          name="location"
          value={formData.location}
          style={inputStyle}
          onChange={handleInputChange}
        />
        <label>, from</label>
        <DatePicker
          selected={formData.startDate}
          onChange={(date) => handleDateChange(date, "startDate")}
          maxDate={maxDate} 
          showPopperArrow={true}
        />
        <label>to</label>
        <DatePicker
          selected={formData.endDate}
          onChange={(date) => handleDateChange(date, "endDate")}
          maxDate={maxDate} 
        />

        <button className="submit--button main--nav--button" type="submit">
          Show me
        </button>
      </form>

      <div className="app--body">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          error ? (
            <>
            <Error error={error}></Error>
            </>
          ) : (
            
          <>

            <div className="app--buttons">

            <button className="main--nav--button" id={showStats + "_button"}
                onClick={() => {
                  setShowStats(true);
                  setShowChart(false);
                  setShowTable(false);
                }}
              >
                Show Stats
              </button>
              <button className="main--nav--button" id={showChart + "_button"}
                onClick={() => {
                  setShowChart(true);
                  setShowTable(false);
                  setShowStats(false);
                }}
              >
                Show Chart
              </button>

              <button className="main--nav--button" id={showTable + "_button"}
                onClick={() => {
                  setShowTable(true);
                  setShowChart(false);
                  setShowStats(false);
                }}
              >
                Show Table
              </button>

              </div>

            <div className="app--content">
              {showChart && <Chart data={weatherData}></Chart>}

              {showTable && <Table data={weatherData}></Table>}

              {showStats && <Stats data={weatherData}></Stats>}
            </div>
          </>)
        )}
      </div>
    </div>
  );
}

export default App;
