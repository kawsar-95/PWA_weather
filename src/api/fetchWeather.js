import axios from 'axios'

const URL= 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY ='1c0d356c640b85c871581d7538b218dd'

export const fetchWeather = async (query)  => {
  const {data} = await axios.get(URL,{
    params:{
      q:query,
      units:'metric',
      APPID:API_KEY,
    }
  })
  return data
}