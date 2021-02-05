
import { Park } from "./Park.js";

import { useParks, getParks } from "./ParkProvider.js";
import "./ParkSelect.js";

const eventHub = document.querySelector(".container")
const parkContainer = document.querySelector(".parkPreview")


// 
eventHub.addEventListener("parkSelected", changeEvent => {
    const selectedParkName = changeEvent.detail.selectedPark
    const parkArray = useParks() 
    const theSelectedPark = parkArray.find(
    (parksObj) => parksObj.id === selectedParkName)
    render(theSelectedPark) 
})

const render = (parksObj) => {
    const parkHTMLrepresentation = Park(parksObj) 
    parkContainer.innerHTML = `
    ${parkHTMLrepresentation}
    `

}




