export const Weather = (weatherObj) => {
    return `
    <div class="weatherCard">
    <h3 class="temp">Temp:</h3>
    <p>${weatherObj.temp.day}°F</p>
    </div>
    `
}