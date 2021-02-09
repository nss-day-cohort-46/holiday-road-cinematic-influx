import { useEateries } from "./EateryProvider.js"
import "./Eateries.js"

const contentContainer = document.querySelector(".eateriesDetails")

export const EateriesDetail = (eateriesObj) => {
    const eateriesDetailHTMLrepresentation = `
    <div class="modal--parent" id="attraction__modal">
    <h3>Description</h3>
    <p>${eateriesObj.description}</p>
    <button id="eaterymodal--close">Close</button>
    </div>
   `
    contentContainer.innerHTML = eateriesDetailHTMLrepresentation
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("EateriesDetailsClicked", event => {
    const selectedEateriesID = event.detail.eateriesId
    const eateriesArray = useEateries()
    const selectedEateries = eateriesArray.find((eateriesObj) => {

        return eateriesObj.id === selectedEateriesID
    })
    EateriesDetail(selectedEateries)
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "eaterymodal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
}