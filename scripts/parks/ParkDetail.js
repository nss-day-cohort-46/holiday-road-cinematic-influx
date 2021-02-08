import { useParks } from "./ParkProvider.js"

const contentContainer = document.querySelector(".parkDetails")

export const ParkDetail = (parkObj) => {
    const parkDetailHTMLrepresentation = `
        <h1>${parkObj.fullName}</h1>
        <p>${parkObj.description}</p>
    `
    contentContainer.innerHTML = parkDetailHTMLrepresentation
}


const eventHub = document.querySelector(".container")


eventHub.addEventListener("DetailsClicked", event => {
    const selectedParkId = event.detail.parkId
    const parkArray = useParks()
    const selectedPark = parkArray.find((parkObj) => parkObj.id === selectedParkId)
    ParkDetail(selectedPark)
})