let levels = ["😁", "😊", "😐", "😷", "🤢", "💀"];

function Card({ data }) {
    let city = data.location.name;
    let country = data.location.country;
    let temperature = data.current.temp_c;
    let weather = data.current.condition.icon;
    let aqi = data.current.air_quality.pm10.toFixed(2);
    let levelIdx = Math.ceil(aqi / 50) - 1;


    return (
        <div className="card">
            <h1>{`${city}, ${country}`}</h1>
            <div>
                <h3>{`Temperature: ${temperature}°C`}</h3>
                <img src={weather} alt="☀️" />
            </div>
            <p>{`Air Quality Index: ${aqi} ${levels[levelIdx]}`}</p>
        </div>
    );
}

export default Card;
