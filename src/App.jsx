import { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './components/WeatherCard'
import './style/App.css'
import Loader from './components/Loader'
import Message from './components/Message'

function App () {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const success = (pos) => {
      const objLatLong = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(objLatLong)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  // ---------------------- PETICIÓN DEL CLIMA --------------------------------------------

  useEffect(() => {
    if (coords) {
      const APIKEY = 'ee57c0e664e3b56917bf2e36dcc63263'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (((celsius * 9) / 5) + 32).toFixed(1)
          setTemperature({ celsius, farenheit })
          setWeather(res.data)
        })
        .catch(err => console.log(err))
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [coords])
  return (
    <>
      {(loading) ? (<Loader />) : (<div className='App'><Weather weather={weather} temperature={temperature} /></div>)}
    </>
  )
}

export default App
