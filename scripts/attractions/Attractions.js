import "./AttractionDetail.js"

export const Attraction = (attractionObj) => {
    return `
    <h2 class="attractionName">Attraction Name: ${attractionObj.name}</h2>
    <button id="attraction--${attractionObj.id}" class="attractionButton">Details</button>
    `
}



const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("attraction--")) {
        const [prefix, attractionId] = event.target.id.split("--")
        const customEvent = new CustomEvent("AttractionDetailsClicked", {
            detail: {
                attractionId: parseInt(attractionId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})