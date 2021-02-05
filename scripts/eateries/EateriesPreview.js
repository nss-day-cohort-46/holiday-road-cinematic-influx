import { Eateries } from "./Eateries.js";
import { useEateries, getEateries } from "./EateryProvider.js";
import "./EateriesSelect.js";

const eventHub = document.querySelector(".container");
const eateriesContainer = document.querySelector(".eateriesPreview");

eventHub.addEventListener("eateriesSelected", (changeEvent) => {
  const selectedEateriesName = changeEvent.detail.selectedEateries;
  const eateriesArray = useEateries();
  const theSelectedEateries = eateriesArray.find(
    (eateriesObj) => eateriesObj.businessName === selectedEateriesName
  );
  render(theSelectedEateries);
});

const render = (eateriesObj) => {
  const eateriesHTMLRepresentation = Eateries(eateriesObj);
  eateriesContainer.innerHTML = `
  ${eateriesHTMLRepresentation}
  `;
};
