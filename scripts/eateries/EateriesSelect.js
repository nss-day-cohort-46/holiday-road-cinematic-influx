import { useEateries, getEateries } from "./EateryProvider.js";
// import { Eateries } from "./Eateries.js";

const eateriesContainer = document.querySelector(".eateriesContainer");
const eventHub = document.querySelector(".container");

//console.log(eventHub)

export const EateriesSelect = () => {
  getEateries().then(() => {
    const eateriesArray = useEateries();
    render(eateriesArray);
  });
};

const render = (eateriesCollection) => {
  eateriesContainer.innerHTML = `
    <select class="dropdown" id="eateriesSelect">
    <option value="0">Select A Place to Fill your Face...</option>
    ${eateriesCollection
      .map(
        (eateriesObj) => `
    <option value="${eateriesObj.businessName}">${eateriesObj.businessName}</option>
    `
      )
      .join("")}
    </select>
    `;
};

eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "eateriesSelect") {
    const selectedEateries = changeEvent.target.value;

    const customEvent = new CustomEvent("eateriesSelected", {
      detail: {
        selectedEateries: selectedEateries,
      },
    });
    console.log(customEvent);
    eventHub.dispatchEvent(customEvent);
  }
});
