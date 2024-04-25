import React, {} from "react";

function Table({data}){

    

    if (Object.keys(data).length === 0) return;

    const {time, temperature, humidity} = data;


    return (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {time.map((t, index) => (
              <tr key={index}>
                <td>{t}</td>
                <td>{temperature[index]}</td>
                <td>{humidity[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

//Prop types thingys here

export default Table;