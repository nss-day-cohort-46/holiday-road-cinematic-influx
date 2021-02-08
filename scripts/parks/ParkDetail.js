import { useParks } from "./ParkProvider.js"
import "./Park.js"

const contentContainer = document.querySelector(".parkDetails")

export const ParkDetail = (parkObj) => {
    const parkDetailHTMLrepresentation = `
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
    `
    contentContainer.innerHTML = parkDetailHTMLrepresentation
}


const eventHub = document.querySelector(".container")


eventHub.addEventListener("DetailsClicked", event => {
    const selectedParkId = event.detail.parkId
    const parkArray = useParks()
    const selectedPark = parkArray.find((parkObj) => {
        return parkObj.id === selectedParkId
    })
    ParkDetail(selectedPark)
})