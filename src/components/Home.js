import { React, useState, useEffect} from 'react';
import { getWeather } from '../services/getWeather'
import Forecast from './Forecast'
import './Home.css'

function Home() {
  const [currWeather, setCurrWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  async function fetchWeatherData() {
    let response = await getWeather(city, state);
    response = await response.json();
    console.log(response);
    if(response.current){
      setCurrWeather(response.current);
    }
    if(response.daily && response.daily.length > 5){
      setForecast(response.daily);
    }
  }


  async function handleSubmit(event) {
    event.preventDefault()
    console.log('hello')
    await fetchWeatherData()
  }

  function convertKelvin(temp) {
    return roundToTwo(((temp - 273.15) * 9/5) + 32)
  }

  function roundToTwo(num) {
    return Number(num.toFixed(2));
  }
  // implement polling
  useEffect(() => {
    if (city && state) {
      fetchWeatherData();

      const intervalId = setInterval(() => {
        fetchWeatherData();
      }, 600000);

      return () => clearInterval(intervalId);
    }
  }, [city, state]); 

  return (
    <>
      <div className='weather-container'>
        <h1 className='weather-heading'>Weather App</h1>
        <form className='weather-form' onSubmit={handleSubmit}>
          <label>City</label>
          <input
            type="text"
            value={city}
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}

          />
          <label>State</label>
          <input
            type="text"
            value={state}
            placeholder="Enter State"
            onChange={(e) => setState(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <div>
          
          {currWeather && currWeather.weather.length > 0 && (
            <>
            <h3>Current Weather</h3>
            <span>{(currWeather.weather)[0].main}</span>
            <br></br>
            <span>{String(convertKelvin(currWeather.temp)) + ' degrees'}</span>
            </>
          )}
        </div>
        
        <div>
          { forecast && (
            <Forecast weatherData={forecast}/>

          )}
        </div>
      </div>
    </>
  );
};

export default Home;