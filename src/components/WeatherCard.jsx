import { useState, React } from 'react'

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemperatures = () => setIsCelsius(!isCelsius)
  console.log(temperature)
  return (
    <article className='card'>
      <h1>Weather App</h1>
      <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
      <section>
        <img src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` : ''} alt='' />
        <h3>Temperature</h3>
      </section>
      <section>
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span>Wind Speed</span> {weather?.wind.speed}m/s</li>
          <li><span>Clouds</span> {weather?.clouds.all}%</li>
          <li><span>Pressure</span> {weather?.main.pressure}hPa</li>
        </ul>
      </section>
      <h2>{ isCelsius ? `${temperature?.celsius} Cº` : `${temperature?.farenheit} Fº`}</h2>
      <button onClick={changeTemperatures}>
        {isCelsius ? 'Change to Fº' : 'Change to Cº'}
      </button>
    </article>
  )
}
export default WeatherCard
