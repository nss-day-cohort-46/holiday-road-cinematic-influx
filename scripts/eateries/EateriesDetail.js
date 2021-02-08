import {useEateries} from "./EateryProvider.js"
import "./Eateries.js"

const contentContainer = document.querySelector(".eateriesDetails")

export const EateriesDetail = (eateriesObj) => {
    const eateriesDetailHTMLrepresentation = `
    <h3>Description</h3>
    <p>${eateriesObj.description}</p>
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