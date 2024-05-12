
function Forecast({weatherData}){
  return(
    <div>
    {
      weatherData.slice(1,6).map((weather, index) => (
        <div key={index}>
        <h3>{new Date(weather.dt * 1000).toDateString()}</h3>
        <p>Weather: {weather.summary}</p>
        </div>
      )
      )
    }
    </div>
  )
}


export default Forecast