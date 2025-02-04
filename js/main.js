// 887e6bbe201889ebca380d3b230f07cd
const apiKey = "887e6bbe201889ebca380d3b230f07cd";

// ******************************* get today date (in right side) **************************************

const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString("en-GB", { month: "short" });

const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}`;
document.getElementById("today").innerHTML = formattedDate;

// todayPara.innerHTML = formattedDate;

// // ******************************* handle select city **************************************

const citiesUrl = "https://countriesnow.space/api/v0.1/countries";

const selectCity = document.getElementById("city");

// fetch cities and display it
fetch(citiesUrl)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.data);
    data.data.forEach((element) => {
      if (element.country === "Egypt") {
        // console.log(element);
        console.log(element.cities);

        element.cities.forEach((city) => {
          // console.log(city);
          const option = document.createElement("option");
          option.textContent = city;

          selectCity.appendChild(option);
        });
      }
    });
  })
  .catch((err) => console.log("there is error : ", err));

// // city that user will select
selectCity.addEventListener("change", (event) => {
  var selectedCity = event.target.value; // new city the user selected

  if (selectedCity !== "Select City") {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City weather data not found!");
        }
        return response.json();
      })
      .then((data) => {
        updateWeatherUI(data);
      })
      .catch((error) => console.error("Error fetching weather:", error));
  }
});

// const citiesUrl = "https://countriesnow.space/api/v0.1/countries";
// const selectCity = document.getElementById("city");

// fetch(citiesUrl)
//   .then((res) => res.json())
//   .then((data) => {
//     const countriesData = data.data;

//     // مسح الخيارات الحالية في القائمة المنسدلة
//     selectCity.innerHTML = `<option>Select City</option>`;

//     // إضافة أسماء البلدان كخيارات في القائمة المنسدلة
//     countriesData.forEach((country) => {
//       const option = document.createElement("option");
//       option.textContent = country.country; // اسم البلد
//       option.value = country.country; // قيمة البلد
//       selectCity.appendChild(option);
//     });
//   })
//   .catch((err) => console.log("هناك خطأ: ", err));

// // display data in ui
function updateWeatherUI(data) {
  // ************** temp & cond for selected city (in left side) ****************
  const temperatureElement = document.getElementById("currentTemp");
  const conditionElement = document.getElementById("currentCond");

  temperatureElement.textContent = `${data.main.temp}°C`;
  conditionElement.textContent = data.weather[0].description;

  // ************** 5 data for selected city (in left side) ****************
  const humidityElement = document.getElementById("humidity");
  const windElement = document.getElementById("wind");
  const rainElement = document.getElementById("rain");
  const sunriseElement = document.getElementById("sunrise");
  const sunsetElement = document.getElementById("sunset");

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

var selectedCity = "Assiut";
const city = "Assiut";
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

fetch(forecastUrl)
  .then((response) => response.json())
  .then((data) => {
    const dailyForecasts = extractDailyForecasts(data.list);

    updateWeeklyWeather(dailyForecasts);
  })
  .catch((error) => console.error("Error fetching forecast data:", error));

// extract 7 days
function extractDailyForecasts(forecastList) {
  const dailyData = {};

  forecastList.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0]; // extract only days
    if (!dailyData[date]) {
      dailyData[date] = {
        minTemp: entry.main.temp_min,
        maxTemp: entry.main.temp_max,
        icon: entry.weather[0].icon,
        day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
      };
    } else {
      dailyData[date].minTemp = Math.min(
        dailyData[date].minTemp,
        entry.main.temp_min
      );
      dailyData[date].maxTemp = Math.max(
        dailyData[date].maxTemp,
        entry.main.temp_max
      );
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

      tempText.textContent = `${Math.round(day.maxTemp)}°C - ${Math.round(
        day.minTemp
      )}°C`;
      dayText.textContent = day.day;
    }
  });
}

// *************************************** go to top btn *****************************************
let goTopBtn = document.getElementById("go-to-top");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
};

goTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const apiKey2 = "b12959edcb9b40828f7ea8ae43ce86bb";
const query = "weather";
const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey2}&language=en&pageSize=10`;
var articles;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    articles = data.articles.slice(2, 5);
    console.log(data.articles);
    const container = document.getElementById("news-container");
    articles.forEach((article) => {
      const articleHTML = document.createElement("div");
      articleHTML.classList.add("col-lg-4");
      articleHTML.innerHTML = `

<div class="card">
          <img class="card-img-top" src="${article.urlToImage}" />
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">By Sarah Lee • October 10, 2024</p>
            <p class="card-text">
             ${article.description}
            </p>
          <a style="cursor : pointer;" data-title="${article.title}" data-content="${article.content}" data-image="${article.urlToImage}"  class="btn move-head fw-bold read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
            </a>
          </div>
</div>
      `;
      document.getElementById("blog-posts").appendChild(articleHTML);
    });
    const readMoreLinks = document.querySelectorAll(".read-more");
    readMoreLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.setItem("blogTitle", link.getAttribute("data-title"));
        localStorage.setItem("blogContent", link.getAttribute("data-content"));
        localStorage.setItem("blogImage", link.getAttribute("data-image"));
        window.location.href = "blog.html";
      });
    });
  })
  .catch((error) => console.error("Error:", error));
window.onload = function () {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  var isDark = localStorage.getItem("darkMode");
  if (isDark === "true") {
    enableDarkMode();
  }
};

const apiKey3 = "31b8d7e4ae5c4914bda173416252801"; // استبدل بمفتاح API الخاص بك
const city2 = "Asyut"; // المدينة المطلوبة
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey3}&q=${city2}&days=7&lang=ar`;

const weatherForecastElement = document.getElementById("weather-forecast");

// جلب بيانات الطقس
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const forecastDays = data.forecast.forecastday;
    var delay = 100;
    // عرض توقعات الطقس لكل يوم
    forecastDays.forEach((day) => {
      const date = new Date(day.date).toLocaleDateString("en-US", {
        weekday: "long",
      });
      const icon = day.day.condition.icon;
      const condition = day.day.condition.text;
      const maxTemp = day.day.maxtemp_c;
      const minTemp = day.day.mintemp_c;

      let weatherImage = "images/fi3.png"; // الصورة الافتراضية (مشمس)
      if (condition.includes("رياح") || condition.includes("windy")) {
        weatherImage = "images/fi5.png"; // صورة الرياح
      } else if (condition.includes("ممطر") || condition.includes("rain")) {
        weatherImage = "images/fi5.png"; // صورة المطر
      }

      // إنشاء بطاقة لكل يوم
      const card = `
       


                   <div
              class="item d-flex flex-column justify-content-between align-items-center p-4 bg-light"
            >
              <img src="${weatherImage}" />
              <h4>${maxTemp}°C / ${minTemp}°C</h4>
              <h4>${date.slice(0, 3)}</h4>
            </div>
      `;

      // إضافة البطاقة إلى الصفحة
      weatherForecastElement.innerHTML += card;
      delay += 200;
    });
  })
  .catch((error) => {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
    weatherForecastElement.innerHTML =
      '<p class="text-danger">فشل في تحميل بيانات الطقس. يرجى المحاولة مرة أخرى.</p>';
  });
