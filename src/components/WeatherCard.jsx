import { useState, React } from 'react'
import { BsCloudsFill } from 'react-icons/bs'
import { WiNightAltCloudyWindy } from 'react-icons/wi'
import { GiPressureCooker } from 'react-icons/gi'
import { FaTemperatureHigh } from 'react-icons/fa'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { TbTemperatureFahrenheit } from 'react-icons/tb'

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemperatures = () => setIsCelsius(!isCelsius)
  const imgF = <TbTemperatureFahrenheit />
  console.log(temperature)
  return (
    <article className='card'>
      <section className='weather__title'>
        <h1 className='weather__app'>Weather App</h1>
        <h2 className='weather__app'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
      </section>
      <section className='img__weather'>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt='' />
      </section>
      <section className='first__data'> {/* in 'first data' the climate data of the geolacized city is shown */}
        <h3 className='description'>{weather?.weather[0].description}</h3>
        <ul className='list__data'>
          <li><span><WiNightAltCloudyWindy />  Wind Speed: <br /></span> {weather?.wind.speed}m/s</li>
          <li><span><BsCloudsFill />  Clouds: <br /></span> {weather?.clouds.all}%</li>
          <li><span><GiPressureCooker />  Pressure: <br /></span> {weather?.main.pressure}hPa</li>
        </ul>
      </section>
      <section className='temperature__data'>
        <h3 className='description'>Temperature <br /><br /> <FaTemperatureHigh /></h3>
        <h2>{isCelsius ? `${temperature?.celsius} Cº` : `${temperature?.farenheit} Fº`}</h2>
        <button onClick={changeTemperatures}>
          {isCelsius ? 'Change to Fº' : 'Change to Cº'}
        </button>
      </section>
    </article>
  )
}
export default WeatherCard
