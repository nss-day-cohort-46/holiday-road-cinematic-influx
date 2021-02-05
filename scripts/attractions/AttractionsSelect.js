import { getAttractions, useAttractions } from "./AttractionProvider.js";
import { Attraction } from "./Attractions.js";

const attractionContainer = document.querySelector(".attractionsContainer")
const eventHub = document.querySelector(".container")

export const AttractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractionArray = useAttractions()
            render(attractionArray)
        })
}

const render = (attractionCollection) => {
    attractionContainer.innerHTML = `
    <select class="dropdown" id="attractionSelect">
    <option value="0">Select An Attraction...</option>
    ${attractionCollection.map(attractionObj => `
    <option value="${attractionObj.name}">${attractionObj.name}</option>
    `
    ).join("")}
    </select>
    `
}

const contentTarget = document.querySelector(".previewContainer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "attractionSelect") {
        const selectedAttraction = changeEvent.target.value

        const customEvent = new CustomEvent("attractionSelected", {
            detail: {
                selectedAttraction: selectedAttraction
            }
        })
        console.log(customEvent)
        eventHub.dispatchEvent(customEvent)
    }
})