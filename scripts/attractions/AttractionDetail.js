import { useAttractions } from "./AttractionProvider.js"
import "./Attractions.js"

const contentContainer = document.querySelector(".attractionDetails")

export const AttractionDetail = (attractionObj) => {
    const attractionDetailHTMLrepresentation = `
    <div class="modal--parent" id="attraction__modal">
        <h3>Description</h3>
        <p>${attractionObj.description}</p>
        <h3>Location</h3>
        <p>${attractionObj.city}, ${attractionObj.state}</p>
        <button id="attractionmodal--close">Close</button>
    </div>
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

eventHub.addEventListener("click", event => {
    if (event.target.id === "attractionmodal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
}