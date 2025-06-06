import axios from "axios"
const api_key = import.meta.env.VITE_SOME_KEY


// fix the API calling
const getWeather = (latlng) => {
    console.log('API W response!', latlng[0],' - ', latlng[1])
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}`)
    const final = request.then(response => response.data);
    console.log(final)
    return final 
}

export default{getWeather}
