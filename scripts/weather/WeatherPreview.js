import {useWeather,getWeather} from "./WeatherProvider.js"
import {useParks,  getParks} from "../parks/ParkProvider.js"
import {Weather} from "./Weather.js"

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".weatherPreview")


eventHub.addEventListener("parkSelected", changeEvent => {
    const selectedParkId = changeEvent.detail.selectedPark
    const parkArray = useParks()
    const theSelectedPark =  parkArray.find(parkObj => parkObj.id === selectedParkId)
    getWeather(theSelectedPark.latitude,theSelectedPark.longitude).then(()=> {
        const weather =useWeather()
        console.log(weather)
          render(weather)
    })
})

  

  const render = (weatherObj) => {
    const weatherHTMLRepresentation = weatherObj.map(weather => Weather(weather)).join("")
    weatherContainer.innerHTML += `
    ${weatherHTMLRepresentation}
    

    
      
`
  }
