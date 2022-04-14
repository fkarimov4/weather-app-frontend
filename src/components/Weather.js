import { useState } from "react";
import WeatherCard from "./WeatherCard";

export default function Weather() {
  const [userInput, setUserInput] = useState('');
  const [weather, setWeather] = useState();

  const handleGetWeather = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: userInput }),
    })
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section className="flex flex-col max-w-2xl bg-slate-100 p-8 mx-auto my-8 rounded-xl">
      <h1 className="font-bold text-xl mb-8">Weather App</h1>
      <form>
        <label className="flex flex-col">
          Search by city or ZIP Code
          <input
            type="text"
            placeholder="Enter city or ZIP Code"
            className="bg-white p-4 rounded-xl my-2"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-200 w-full py-4 rounded-xl text-blue-900 hover:bg-blue-400 hover:text-white transition-all font-bold"
          onClick={handleGetWeather}
        >
          Get Weather
        </button>
      </form>
      {!weather ? null : <WeatherCard weather={weather} />}
    </section>
  );
}
