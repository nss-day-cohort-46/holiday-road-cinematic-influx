import { useAttractions, getAttractions } from "./AttractionProvider.js";
import { Attraction } from "./Attractions.js";
import "./AttractionsSelect.js";

const eventHub = document.querySelector(".container")
const attractionContainer = document.querySelector(".attractionPreview")

eventHub.addEventListener("attractionSelected", changeEvent => {
    const selectedAttractionName = changeEvent.detail.selectedAttraction
    const attractionArray = useAttractions()
    const theSelectedAttraction = attractionArray.find(
        (attractionObj) => attractionObj.name === selectedAttractionName)
    render(theSelectedAttraction)
})

const render = (attractionObj) => {
    const attractionHTMLrepresentation = Attraction(attractionObj)
    attractionContainer.innerHTML = `
    ${attractionHTMLrepresentation}
    `
}