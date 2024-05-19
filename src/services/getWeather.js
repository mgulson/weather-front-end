const weatherURL = process.env.REACT_APP_WEATHER_APP_URL



async function getWeather({queryKey}){
  const [_key, { city,state }] = queryKey;
  const weatherURLGet = weatherURL + `?city=${city}&state=${state}`
  const response = await fetch(weatherURLGet)
  return response.json()
}



export { getWeather}