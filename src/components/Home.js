import { React, useState} from 'react';
import { getWeather } from '../services/getWeather'
import Forecast from './Forecast'
import './Home.css'

function Home() {
  const [currWeather, setCurrWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [city, setCity] = useState('');
  const [state, setState] = useState('');


  async function handleSubmit(event) {
    event.preventDefault()
    console.log('hello')
    let response = await getWeather(city, state)
    response = await response.json()
    console.log(response)
    if(response.current && response.current.weather.length > 0){
      setCurrWeather(response.current.weather[0])
    }

    if(response.daily && response.daily.length > 5){
      setForecast(response.daily)
    }
  }


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
          <h3>Current Weather</h3>
          {currWeather && currWeather.main && (
            <p>Curr Weather: {currWeather.main}</p>
          
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