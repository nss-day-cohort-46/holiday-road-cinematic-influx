import {defaultKey} from "../Settings.js"

let forecast = []

export const useWeather = () =>{
 return forecast.slice()
}



export const getWeather = (lat,lon)  => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${defaultKey.weatherKey}`)
    .then(response => response.json())
    .then(parsedForcast => {
        forecast = parsedForcast.daily
    })
}


// make fetch call to open weather, fetch call needs lat, long. set parameter as lat, long.
// parse data
//store data in storeWeather
// create  export function to use weather
// export fetch call
