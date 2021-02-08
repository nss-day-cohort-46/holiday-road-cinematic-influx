import { useAttractions } from "./AttractionProvider.js"
import "./Attractions.js"

const contentContainer = document.querySelector(".attractionDetails")

export const AttractionDetail = (attractionObj) => {
    const attractionDetailHTMLrepresentation = `
        <h3>Description</h3>
        <p>${attractionObj.description}</p>
        <h3>Location</h3>
        <p>${attractionObj.city}, ${attractionObj.state}</p>
    `
    contentContainer.innerHTML = attractionDetailHTMLrepresentation
}


const eventHub = document.querySelector(".container")


eventHub.addEventListener("AttractionDetailsClicked", event => {
    const selectedAttractionId = event.detail.attractionId
    const attractionArray = useAttractions()
    const selectedAttraction = attractionArray.find((attractionObj) => {
        return attractionObj.id === selectedAttractionId
    })
    AttractionDetail(selectedAttraction)
})

