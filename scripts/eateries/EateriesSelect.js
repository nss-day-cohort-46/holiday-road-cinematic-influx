import { useEateries, getEateries } from "./EateryProvider.js";
import { eateries } from "./Eateries.js";

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
    <option value="${eateriesObj.id}">${eateriesObj.businessName}</option>
    `
      )
      .join("")}
    </select>
    `;
};
