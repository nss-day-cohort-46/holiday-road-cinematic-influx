import "./ParkDetail.js"

export const Park = (parkObj) => {
    return `
    <h2 class="parkName">Park Name: ${parkObj.fullName}</h2>
    <button id="parks--${parkObj.id}" class="parkButton">Details</button>
    `
}


//come back and check if id is what i need to use in the button



const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("parks--")) {
        const [prefix, parkId] = event.target.id.split("--")
        const customEvent = new CustomEvent("DetailsClicked", {
            detail: {
                parkId: parkId
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})