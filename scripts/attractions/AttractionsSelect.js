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
    ${attractionCollection.map(attractionsObj => `
    <option value="${attractionsObj.id}">${attractionsObj.name}</option>
    `
    ).join("")}
    </select>
    `
}