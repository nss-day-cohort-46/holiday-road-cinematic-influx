import { useParks } from "./ParkProvider.js"
import "./Park.js"

const contentContainer = document.querySelector(".parkDetails")

export const ParkDetail = (parkObj) => {
    const parkDetailHTMLrepresentation = `
    <div class="modal--parent" id="attraction__modal">
        <h3>Description</h3>
        <p>${parkObj.description}</p>
        <h3>Operating Hours</h3>
        <p>Sunday:${parkObj.operatingHours[0].standardHours.sunday}</p>
        <p>Monday:${parkObj.operatingHours[0].standardHours.monday}</p>
        <p>Tuesday:${parkObj.operatingHours[0].standardHours.tuesday}</p>
        <p>Wednesday:${parkObj.operatingHours[0].standardHours.wednesday}</p>
        <p>Thursday:${parkObj.operatingHours[0].standardHours.thursday}</p>
        <p>Friday:${parkObj.operatingHours[0].standardHours.friday}</p>
        <p>Saturday:${parkObj.operatingHours[0].standardHours.saturday}</p>
        <h3>Location</h3>
        <p>${parkObj.addresses[0].city}, ${parkObj.addresses[0].stateCode}</p>
        <button id="parkmodal--close">Close</button>
        </div>
        `
    contentContainer.innerHTML = parkDetailHTMLrepresentation
}


const eventHub = document.querySelector(".container")


eventHub.addEventListener("ParkDetailsClicked", event => {
    const selectedParkId = event.detail.parkId
    const parkArray = useParks()
    const selectedPark = parkArray.find((parkObj) => {
        return parkObj.id === selectedParkId
    })
    ParkDetail(selectedPark)
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "parkmodal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
}