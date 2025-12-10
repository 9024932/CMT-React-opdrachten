import { useEffect, useState } from "react";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("oslo");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "80f19dba95cd531ddb1f0ecb1ceeca21";

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const WeatherData = await response.json();
        if (!response.ok) {
          console.error("API error:", WeatherData);
          setWeather(null);
        } else {
          console.log(WeatherData);
          setWeather(WeatherData);
        }
      } catch (error) {
        console.error("Error fetching Weather:", error);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchInput.trim();
    if (trimmed) {
      setCity(trimmed);
      setSearchInput("");
    }
  };

  return (
    <section className="min-h-screen bg-blue-300 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSearchSubmit} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search City"
              name="search"
              onChange={handleInputChange}
              value={searchInput}
              className="flex-1 px-4 py-2 border-2 border-black rounded text-black"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 border-2 border-black text-black font-bold rounded"
            >
              Zoek
            </button>
          </div>
        </form>

        {loading ? (
          <div className="text-center text-black text-lg font-bold">
            <p>Het weer is aan het laden...</p>
          </div>
        ) : weather ? (
          <WeatherInfo
            city={weather.name}
            temp={weather.main?.temp}
            feels_like={weather.main?.feels_like}
            humidity={weather.main?.humidity}
            wind={weather.wind?.speed}
            description={weather.weather?.[0]?.main}
          />
        ) : (
          <div className="text-center text-black text-lg font-bold">
            <p>Geen weerdata gevonden</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
