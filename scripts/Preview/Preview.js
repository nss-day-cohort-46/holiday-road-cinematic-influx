import { Park } from "../parks/Park.js";

import { useParks, getParks } from "../parks/ParkProvider.js";
import "../parks/ParkSelect.js";
import { eateries } from "../eateries/Eateries.js";
import { useEateries, getEateries } from "../eateries/EateryProvider.js";
import "../eateries/EateriesSelect.js";

const eventHub = document.querySelector(".container");
const parkContainer = document.querySelector(".parkPreview");

//
eventHub.addEventListener("parkSelected", (changeEvent) => {
  const selectedParkName = changeEvent.detail.selectedPark;
  const parkArray = useParks();
  const theSelectedPark = parkArray.find(
    (parksObj) => parksObj.id === selectedParkName
  );
  renderPark(theSelectedPark);
});

const renderPark = (parksObj) => {
  const parkHTMLrepresentation = Park(parksObj);
  parkContainer.innerHTML = `
    ${parkHTMLrepresentation}
    `;
};

const eateriesContainer = document.querySelector(".eateriesPreview");

eventHub.addEventListener("eateriesSelected", (changeEvent) => {
  const selectedEateriesName = changeEvent.detail.selectedPark;
  const eateriesArray = useEateries();
  const theSelectedEateries = eateriesArray.find(
    (eateriesObj) => eateriesObj.id === selectedEateriesName
  );
  renderEateries(theSelectedEateries);
});

const renderEateries = (eateriesObj) => {
  const eateriesHTMLRepresentation = Eateries(eateriesObj);
  eateriesContainer.innerHTML = `
  ${eateriesHTMLRepresentation}
  `;
};
