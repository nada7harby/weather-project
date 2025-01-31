
// 887e6bbe201889ebca380d3b230f07cd
const apiKey = "887e6bbe201889ebca380d3b230f07cd"; 



// ******************************* get today date (in right side) **************************************
const today = new Date().toLocaleDateString(); 
const todayPara = document.getElementById('today');

console.log(today); 
todayPara.innerHTML = today;



// // ******************************* handle select city **************************************

// const citiesUrl = "https://countriesnow.space/api/v0.1/countries"; 


// const selectCity = document.getElementById("city");


// // fetch cities and display it
// fetch(citiesUrl).then(res => res.json()).then(data => {
//   // console.log(data.data);
//   data.data.forEach(element => {
    
//     if(element.country === 'Egypt'){
//       // console.log(element);
//       console.log(element.cities);

//       element.cities.forEach(city => {
//         // console.log(city);
//         const option = document.createElement('option');
//         option.textContent = city;

//         selectCity.appendChild(option);
//       })
//     }
//   });

// }).catch(err => console.log("there is error : ",err));




// // city that user will select
// selectCity.addEventListener("change", (event) => {

//   const selectedCity = event.target.value;       // new city the user selected
  
//   if (selectedCity !== "Select City") {
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

//     fetch(weatherUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("City weather data not found!");
//         }
//         return response.json();
//       })
//       .then(data => {

//         updateWeatherUI(data);
//       })
//       .catch(error => console.error("Error fetching weather:", error));
//   }
// });




const citiesUrl = "https://countriesnow.space/api/v0.1/countries"; 
const selectCity = document.getElementById("city");
const countryLinks = document.querySelectorAll('.item a'); 

let countriesData = [];


fetch(citiesUrl)
  .then(res => res.json())
  .then(data => {
    countriesData = data.data; 
  })
  .catch(err => console.log("هناك خطأ: ", err));


  
function updateCities(countryName) {
  selectCity.innerHTML = `<option>Select City</option>`; 

  const country = countriesData.find(c => c.country.toLowerCase() === countryName.toLowerCase());

  console.log("country =====>");
  console.log(country);


  if (country) {
    country.cities.forEach(city => {
      const option = document.createElement('option');
      option.textContent = city;
      selectCity.appendChild(option);
    });
  }
}


countryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const countryName = link.getAttribute('data-country'); 
    updateCities(countryName);

    document.getElementById("forecast").scrollIntoView({ behavior: "smooth" });
  });
});




selectCity.addEventListener("change", (event) => {
  const selectedCity = event.target.value;    
  
  if (selectedCity !== "Select City") {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("City weather data not found!");
        }
        return response.json();
      })
      .then(data => {
        updateWeatherUI(data);
      })
      .catch(error => console.error("Error fetching weather:", error));
  }
});




// display data in ui
function updateWeatherUI(data) {


  // ************** temp & cond for selected city (in left side) ****************
  const temperatureElement = document.getElementById('currentTemp');
  const conditionElement = document.getElementById('currentCond');

  temperatureElement.textContent = `${data.main.temp}°C`;
  conditionElement.textContent = data.weather[0].description;


  // ************** 5 data for selected city (in left side) ****************
  const humidityElement = document.getElementById('humidity');
  const windElement = document.getElementById('wind');
  const rainElement = document.getElementById('rain');
  const sunriseElement = document.getElementById('sunrise');
  const sunsetElement = document.getElementById('sunset');

  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
  windElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;

  const rainChance = data.rain ? `${data.rain["1h"] || 0} mm` : "No Rain";
  rainElement.textContent = `Chance of Rain: ${rainChance}`;

  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  sunriseElement.textContent = `Sunrise: ${sunriseTime}`;
  sunsetElement.textContent = `Sunset: ${sunsetTime}`;

}



// *************************************** weekly weather *****************************************

const city = "Assiut"; 
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

fetch(forecastUrl).then(response => response.json()).then(data => {

    const dailyForecasts = extractDailyForecasts(data.list);

    updateWeeklyWeather(dailyForecasts);

  })
  .catch(error => console.error("Error fetching forecast data:", error));


// extract 7 days
function extractDailyForecasts(forecastList) {
  const dailyData = {};
  
  forecastList.forEach(entry => {

    const date = entry.dt_txt.split(" ")[0]; // extract only days
    if (!dailyData[date]) {
      dailyData[date] = {
        minTemp: entry.main.temp_min,
        maxTemp: entry.main.temp_max,
        icon: entry.weather[0].icon,
        day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
      };
    } else {
      dailyData[date].minTemp = Math.min(dailyData[date].minTemp, entry.main.temp_min);
      dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, entry.main.temp_max);
    }
  });

  return Object.values(dailyData).slice(0, 7); // return first 7 days
}


// update data in ui
function updateWeeklyWeather(forecastData) {
  const items = document.querySelectorAll("#weekly-weather .item");

  forecastData.forEach((day, index) => {
    if (items[index]) {
      const img = items[index].querySelector("img");
      const tempText = items[index].querySelectorAll("h4")[0];  
      const dayText = items[index].querySelectorAll("h4")[1]; 

      tempText.textContent = `${Math.round(day.maxTemp)}°C - ${Math.round(day.minTemp)}°C`;
      dayText.textContent = day.day;
    }
  });
}





// *************************************** go to top btn *****************************************
let goTopBtn = document.getElementById("go-to-top");


window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goTopBtn.style.display = "flex"; 
    } else {
        goTopBtn.style.display = "none"; 
    }
};

goTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


