import { useParks, getParks } from "./ParkProvider.js"
import { Park } from "./Park.js"

const parksContainer = document.querySelector(".parkContainer")
const eventHub = document.querySelector(".container")

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

const contentTarget = document.querySelector(".previewContainer")


eventHub.addEventListener("change", changeEvent => {
 if (changeEvent.target.id === "parkSelect") {
     const selectedPark = changeEvent.target.value
     
     const customEvent = new CustomEvent("parkSelected", {
         detail: {
             selectedPark: selectedPark
         }
     })
console.log(customEvent)
     eventHub.dispatchEvent(customEvent)

 }
})
