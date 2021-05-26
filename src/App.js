import React, { useRef, useState } from "react";
import "./App.css";
import Card from './Card';

function App() {
    const inputRef = useRef();
    const [data, setData] = useState({});
    const [loading, setloading] = useState(false);

    async function getWeatherData(location) {
        let url = "https://api.weatherapi.com/v1/current.json?key=fab3bbca9c9247758cb115449211504";
        url += `&q=${location}&aqi=yes`;
        url = url.replace(/\s/g, "+");

        try {
            let promise = await fetch(url);
            let data = await promise.json();
            setData(data);
            setloading(true);
          } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <div className="search-section">
                <h1>Weather and Pollution Info</h1>
                <div className="form">
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input type="text" ref={inputRef} />
                    </div>
                    <input
                        type="submit"
                        value="Get Info"
                        id="info-btn"
                        onClick={() => {
                          getWeatherData(inputRef.current.value);
                          inputRef.current.value = "";
                        }}
                    />
                </div>
            </div>
            {data.error ? <h1>Error</h1> : (loading && <Card data={data} />)}
        </div>
    );
}

export default App;
