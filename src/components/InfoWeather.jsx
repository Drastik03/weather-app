/* eslint-disable react/prop-types */
function InfoWeather({ weatherData }) {
  return (
    <div className="mt-1 mb-8 flex justify-center">
  <div className="max-w-4xl w-full">
    <h2 className="text-3xl font-bold mb-4 text-center">Weather Information</h2>
    {weatherData ? (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">General</h3>
            <div className="w-20 h-20 mx-auto mb-2">
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
                width="100"
                className="mx-auto"
              />
            </div>
            <p className="mb-2">Location: {weatherData.name}</p>
            <p className="mb-2">Visibility: {weatherData.visibility} meters</p>
            <p>Cloudiness: {weatherData.clouds.all}%</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Temperature</h3>
            <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(1)} °C</p>
            <p>Feels like: {(weatherData.main.feels_like - 273.15).toFixed(1)} °C</p>
            <p>Min Temperature: {(weatherData.main.temp_min - 273.15).toFixed(1)} °C</p>
            <p>Max Temperature: {(weatherData.main.temp_max - 273.15).toFixed(1)} °C</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Wind</h3>
            <p>Speed: {weatherData.wind.speed} m/s</p>
            <p>Degree: {weatherData.wind.deg}°</p>
            <p>Gust: {weatherData.wind.gust} m/s</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Other</h3>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
        </div>
      </section>
    ) : (
      <p className="text-2xl text-center">Loading...</p>
    )}
  </div>
</div>


  );
}

export default InfoWeather;
