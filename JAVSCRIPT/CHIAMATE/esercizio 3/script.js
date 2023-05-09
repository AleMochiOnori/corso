const container = document.querySelector(".container")
let res
let widgetContainer

async function getWeather(){
    const data = await fetch("http://api.weatherapi.com/v1/current.json?key=c5f04aebf6394b3b85b104127232604&q=London&aqi=no")
    res = await data.json()
    widgetContainer = document.createElement("div") 
    widgetContainer.innerHTML = `
    <div class="uppercontent">
       <div class="leftContent">
       ${res.location.name.toUpperCase()}
       </div>
       <div class="rightContent">
          <div class="gradi">
            ${res.current.temp_c}
          </div>
          <div class = "lastUpdate">
           Last Update : <br> ${res.current.last_updated}
          </div>
       </div>
    </div>
    <div class="lowerContent">
        <img src="${res.current.is_day ? res.current.condition.icon : "/JAVSCRIPT/CHIAMATE/esercizio 3/assets/weather/64x64/night/1113.png"}">
        <p>${res.current.condition.text}</p>
    </div>
    `
    container.appendChild(widgetContainer)
    widgetContainer.classList.add("widgetContainer")
}

getWeather()
