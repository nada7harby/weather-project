var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 4,
    },
  },
});

const data = [
  {
    place: "New York City",
    date: "2024-01-23",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/01_img.webp",
  },
  {
    place: "Paris City",
    date: "2024-05-25",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/02-img.webp",
  },
  {
    place: "Canada",
    date: "2024-03-08",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/03_img.webp",
  },
  {
    place: "London",
    date: "2024-06-15",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/04_img.webp",
  },
  {
    place: "Tokyo",
    date: "2024-07-10",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/05_img.webp",
  },
  {
    place: "Dubai",
    date: "2024-08-20",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/01_img.webp",
  },
  {
    place: "Sydney",
    date: "2024-09-05",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/04_img.webp",
  },
  {
    place: "Berlin",
    date: "2024-10-12",
    image:
      "https://lucidoutsourcing.com/demo/weathermate-multipage/assets/city-slider/03_img.webp",
  },
];
const swiperNews = document.getElementById("swiper-wrapper");

data.forEach((item) => {
  const card = document.createElement("div");
  card.className = "swiper-slide";

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.place;

  const placeName = document.createElement("h4");
  placeName.textContent = item.place;

  const date = document.createElement("p");
  date.textContent = ` ${item.date}`;
  const container = document.createElement("div");
  container.className = "decr";
  container.appendChild(placeName);
  container.appendChild(date);
  card.appendChild(container);
  card.appendChild(image);
  swiperNews.appendChild(card);
});

const apiKey = "31b8d7e4ae5c4914bda173416252801"; // استبدل بمفتاح API الخاص بك
const city = "Asyut"; // المدينة المطلوبة
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&lang=ar`;

const weatherForecastElement = document.getElementById("weather-forecast");

// جلب بيانات الطقس
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const forecastDays = data.forecast.forecastday;

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
          <div class="col-3 mt-3">
                    <div class="card rounded-4">
                        <img src="${weatherImage}" class="image">
                        <div class="text-center fs-2 bold">
                            <p id="top">${maxTemp}°C / ${minTemp}°C</p>
                        </div>
                        <div class="text-center fs-4">
                            <p>${date.slice(0, 3)}</p>
                        </div>

                    </div>
                </div>
      `;

      // إضافة البطاقة إلى الصفحة
      weatherForecastElement.innerHTML += card;
    });
  })
  .catch((error) => {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
    weatherForecastElement.innerHTML =
      '<p class="text-danger">فشل في تحميل بيانات الطقس. يرجى المحاولة مرة أخرى.</p>';
  });


const weatherForecastElementhour = document.getElementById(
  "weatherForecastElementhour"
);

// جلب بيانات الطقس
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const current = data.current;
    const forecast = data.forecast.forecastday[0]; 
    const astro = forecast.astro; 

    // بيانات الرطوبة
    const humidityCard = `
        <div class="col p-0">
          <div class="text-center fs-3 bold">
            <p>${current.temp_c} &deg;c</p>
          </div>
          <img src="images/weather-icon-1.png" class="imagethree" />
          <div class="text-center fs-5">
            <p>Humidity ${current.humidity}%</p>
          </div>
        </div>
      `;

    // بيانات الرياح
    const windCard = `
        <div class="col p-0">
          <div class="text-center fs-3 bold">
            <p>${current.temp_c} &deg;c</p>
          </div>
          <img src="images/weather-icon-2.png" class="imagethree" />
          <div class="text-center fs-5">
            <p>Wind: ${current.wind_kph} km/h ${current.wind_dir}</p>
          </div>
        </div>
      `;

    // بيانات فرصة هطول الأمطار
    const chanceOfRainCard = `
        <div class="col p-0">
          <div class="text-center fs-3 bold">
            <p>${current.temp_c} &deg;c</p>
          </div>
          <img src="images/weather-icon-3.png" class="imagethree" />
          <div class="text-center fs-5">
            <p>Chance of Rain ${forecast.day.daily_chance_of_rain}%</p>
          </div>
        </div>
      `;

    // بيانات شروق الشمس
    const sunriseCard = `
        <div class="col p-0">
          <div class="text-center fs-3 bold">
            <p>${current.temp_c} &deg;c</p>
          </div>
          <img src="images/weather-icon-4.png" class="imagethree" />
          <div class="text-center fs-5">
            <p>Sunrise ${astro.sunrise}</p>
          </div>
        </div>
      `;

    // بيانات غروب الشمس
    const sunsetCard = `
        <div class="col p-0">
          <div class="text-center fs-3 bold">
            <p>${current.temp_c} &deg;c</p>
          </div>
          <img src="images/weather-icon-5.png" class="imagethree" />
          <div class="text-center fs-5">
            <p>Sunset ${astro.sunset}</p>
          </div>
        </div>
      `;

    // إضافة جميع البطاقات إلى الصفحة
    weatherForecastElementhour.innerHTML =
      humidityCard + windCard + chanceOfRainCard + sunriseCard + sunsetCard;
  })
  .catch((error) => {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
    weatherForecastElement.innerHTML =
      '<p class="text-danger">فشل في تحميل بيانات الطقس. يرجى المحاولة مرة أخرى.</p>';
  });
