const weatherURL = process.env.REACT_APP_WEATHER_APP_URL



function getWeather(city, state){
  const weatherURLGet = weatherURL + `?city=${city}&state=${state}`
  return fetch(weatherURLGet)
}



export { getWeather}