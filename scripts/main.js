import "./parks/ParkSelect.js";
import { ParkSelect } from "./parks/ParkSelect.js";
import { EateriesSelect } from "./eateries/EateriesSelect.js";
import { AttractionSelect } from "./attractions/AttractionsSelect.js";
import "./parks/ParkPreview.js";
import "./eateries/EateriesPreview.js";
import "./attractions/AttractionPreview.js";
import { getWeather, useWeather } from "./weather/WeatherProvider.js";
import "./weather/WeatherPreview.js"


ParkSelect();
EateriesSelect();
AttractionSelect();
// getWeather("81.06", "91.07")
//  getWeather("37.5858662","-85.67330523")



