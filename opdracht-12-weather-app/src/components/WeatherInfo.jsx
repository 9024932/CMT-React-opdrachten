const WeatherInfo = ({ city, temp, feels_like, humidity, wind, description }) => {
  const getWeatherIcon = (desc) => {
    if (!desc) return "🌤️";
    const d = desc.toLowerCase();
    if (d.includes("cloud")) return "☁️";
    if (d.includes("rain")) return "🌧️";
    if (d.includes("snow")) return "❄️";
    if (d.includes("clear") || d.includes("sunny")) return "☀️";
    if (d.includes("wind")) return "💨";
    if (d.includes("fog")) return "🌫️";
    if (d.includes("thunder")) return "⛈️";
    return "🌤️";
  };

  return (
    <div className="border-4 border-black p-6 bg-white rounded">
      {/* Header with Icon */}
      <div className="flex items-center justify-between mb-4">
        <div>
          {city && <h2 className="text-2xl font-bold">{city}</h2>}
          <p className="text-sm text-black mt-1">{description || "Weather"}</p>
        </div>
        <div className="text-5xl">{getWeatherIcon(description)}</div>
      </div>

      {/* Main Temperature */}
      <div className="text-center mb-4 pb-4 border-b-2 border-black">
        <div className="text-4xl font-bold">{Math.floor(temp)}°C</div>
        <div className="text-sm text-black mt-2">Feels like {Math.floor(feels_like)}°C</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 border-2 border-black rounded bg-blue-200">
          <span className="block text-xs font-bold">Gevoels Temp</span>
          <span className="block text-lg font-bold mt-1">{Math.floor(feels_like)}°C</span>
        </div>

        <div className="p-3 border-2 border-black rounded bg-green-200">
          <span className="block text-xs font-bold">Vochtigheid</span>
          <span className="block text-lg font-bold mt-1">{Math.floor(humidity)}%</span>
        </div>

        <div className="p-3 border-2 border-black rounded bg-purple-200">
          <span className="block text-xs font-bold">Windsnelheid</span>
          <span className="block text-lg font-bold mt-1">{Math.floor(wind)} m/s</span>
        </div>

        <div className="p-3 border-2 border-black rounded bg-orange-200">
          <span className="block text-xs font-bold">Temperatuur</span>
          <span className="block text-lg font-bold mt-1">{Math.floor(temp)}°C</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;