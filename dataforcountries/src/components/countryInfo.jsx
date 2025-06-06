import { useEffect, useState } from 'react'
import WeatherInfo from "./weatherInfo"
import weatherService from '../services/weather'

const CountryInfo = ({country}) =>{

    const [weatherData, setweatherData] = useState(null)
    console.log(country.capitalInfo.latlng[0])

    useEffect(()=>{
        console.log('use Effect, country Info')
        weatherService.getWeather(country.capitalInfo.latlng)
            .then(returnedWeather => console.log('weather: ', returnedWeather))
    },[])


    return(
        <div>
            <h1>{country.name.common}</h1>
            <h2>{country.name.official}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} km²</p>
            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(lang =><li key={lang}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
            <WeatherInfo weatherData={weatherData}/>
        </div>
    )

} 

export default CountryInfo