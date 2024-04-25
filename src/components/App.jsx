import React, { useState, useEffect } from "react";
import { getRequest } from "../services/weatherService";
import Table from "./Table.jsx";
import Chart from "./Chart.jsx";
import Loading from "./Loading.jsx";
import Stats from "./Stats.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/App.css";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showTable, setShowTable] = useState(false);

  const [showStats, setShowStats] = useState(false);

  const [showChart, setShowChart] = useState(true);

  const [formData, setFormData] = useState({
    location: "Lisbon",
    startDate: new Date("2023-06-02"),
    endDate: new Date("2023-06-02"),
  });

  const [apiURL, setApiURL] = useState(
    `http://localhost:3000/weather?location=${formData.location}&start_date=${formData.startDate}&end_date=${formData.endDate}`
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
      `http://localhost:3000/weather?location=${formData.location}&start_date=${formData.startDate}&end_date=${formData.endDate}`
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

  return (
    <div className="gridContainer">
      <label>Location:</label>

      <form onSubmit={handleSubmit}>
        <input
          type="string"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <br />
        <label>Start Date:</label>
        <DatePicker
          selected={formData.startDate}
          onChange={(date) => handleDateChange(date, "startDate")}
        />
        <br />
        <label>End Date:</label>
        <DatePicker
          selected={formData.endDate}
          onChange={(date) => handleDateChange(date, "endDate")}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setShowTable(true);
              setShowChart(false);
              setShowStats(false);
            }}
          >
            Show Table
          </button>

          <button
            onClick={() => {
              setShowChart(true);
              setShowTable(false);
              setShowStats(false);
            }}
          >
            Show Chart
          </button>

          <button
            onClick={() => {
              setShowStats(true);
              setShowChart(false);
              setShowTable(false);
            }}
          >
            Show Stats
          </button>

          {showTable && <Table data={weatherData}></Table>}

          {showChart && <Chart data={weatherData}></Chart>}

          {showStats && <Stats data={weatherData}></Stats>}
        </>
      )}
    </div>
  );
}

export default App;
