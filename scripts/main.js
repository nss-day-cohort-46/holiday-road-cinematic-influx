import { Park } from "./parks/Park.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import "./parks/ParkSelect.js";
import { ParkSelect } from "./parks/ParkSelect.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js";
import { EateriesSelect } from "./eateries/EateriesSelect.js";

useParks();
getParks();
ParkSelect();
getEateries();
useEateries();
EateriesSelect();
