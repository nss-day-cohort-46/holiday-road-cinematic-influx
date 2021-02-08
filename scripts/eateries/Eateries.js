import "./EateriesDetail.js"

export const Eateries = (eateriesObj) => {
  return `
  <h2 class="eateriesName">Eateries Name: ${eateriesObj.businessName}</h2>
  <button id="eateries--${eateriesObj.id}" class="eateriesButton">Details</button>
  `
}


const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("eateries--")) {
     
    const [prefix, eateriesId] = event.target.id.split("--")
    const customEvent = new CustomEvent("EateriesDetailsClicked", {
      detail: {
        eateriesId: parseInt(eateriesId)
      }
    })
    eventHub.dispatchEvent(customEvent)
  }
})