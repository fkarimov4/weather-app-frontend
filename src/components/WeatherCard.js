export default function WeatherCard({ weather }) {
  return (
    <div className="bg-white flex flex-col items-center my-4 mx-auto p-8 text-center rounded-xl w-full">
      <h2 className="text-2xl">{weather.location.name}</h2>
      <img className="h-16 w-16" src={weather.current.condition.icon} alt={weather.current.condition.text} />
      <p className="text-5xl font-bold my-4">{weather.current.temp_f}°F</p>
      <p className="text-sm">{weather.current.temp_c}°C</p>
      <div></div>
    </div>
  );
}
