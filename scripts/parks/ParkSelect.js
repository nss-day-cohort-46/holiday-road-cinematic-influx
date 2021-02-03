import {useParks, getParks} from "./ParkProvider.js"
import {Park} from "./Park.js"

const parksContainer = document.querySelector(".parkContainer")
const eventHub =  document.querySelector(".container")

//console.log(eventHub)

export const ParkSelect = () => {
    getParks()
    .then(() => {
        const parksArray = useParks()
        render(parksArray)
    })
}

const render = (parkCollection) => {
    parksContainer.innerHTML = `
    <select class="dropdown" id="parkSelect">
    <option value="0">Select A Park...</option>
    ${parkCollection.map(parksObj => `
    <option value="${parksObj.id}">${parksObj.fullName}</option>
    ` 
    ).join("")}
    </select>
    `
}