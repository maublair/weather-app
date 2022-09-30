import { useState, React } from 'react'

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemperatures = () => setIsCelsius(!isCelsius)
  console.log(temperature)
  return (
    <article className='card'>
      <section className='weather__title'>
        <h1>Weather App</h1>
        <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
      </section>
      <section className='img__weather'>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt='' />
        <h3>Temperature</h3>
      </section>
      <section className='first__data'> {/* in 'first data' the climate data of the geolacized city is shown */}
        <h3>"{weather?.weather[0].description}"</h3>
        if(Weather)
        <ul>
          <li><span>Wind Speed</span> {weather?.wind.speed}m/s</li>
          <li><span>Clouds</span> {weather?.clouds.all}%</li>
          <li><span>Pressure</span> {weather?.main.pressure}hPa</li>
        </ul>
      </section>
      <section className='temperature__data'>
        <h2>{isCelsius ? `${temperature?.celsius} Cº` : `${temperature?.farenheit} Fº`}</h2>
        <button onClick={changeTemperatures}>
          {isCelsius ? 'Change to Fº' : 'Change to Cº'}
        </button>
      </section>
    </article>
  )
}
export default WeatherCard
