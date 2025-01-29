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
const city = "Cairo"; // المدينة المطلوبة
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

//   <div class="col-md-3 mb-4">
//   <div class="card rounded-4 shadow-sm">
//       <div class="card-body text-center">
//           <img src="${icon}" alt="${condition}" class="mb-3">
//           <h5 class="card-title">${date}</h5>
//           <p class="card-text">${condition}</p>
//           <p class="card-text">${maxTemp}°C / ${minTemp}°C</p>
//       </div>
//   </div>
// </div>

const weatherForecastElementhour = document.getElementById(
  "weatherForecastElementhour"
);

// جلب بيانات الطقس
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const hourlyForecast = data.forecast.forecastday[0].hour; // بيانات كل ساعة لليوم الحالي

    // عرض توقعات الطقس كل 4 ساعات
    for (let i = 0; i < hourlyForecast.length; i += 4) {
      const hourData = hourlyForecast[i];
      const time = new Date(hourData.time).toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const temp = hourData.temp_c;
      const humidity = hourData.humidity;
      const condition = hourData.condition.text.toLowerCase(); // حالة الطقس بأحرف صغيرة

      // تحديد الصورة بناءً على حالة الطقس
      let weatherImage = "images/weather-icon-1.png"; // الصورة الافتراضية (مشمس)
      if (condition.includes("رياح") || condition.includes("windy")) {
        weatherImage = "images/fi5.png"; // صورة الرياح
      } else if (condition.includes("ممطر") || condition.includes("rain")) {
        weatherImage = "images/fi5.png"; // صورة المطر
      }

      // إنشاء الهيكل لكل فترة
      const card = `
        <div class="col p-0">
          <div class="text-center fs-3 bold">
            <p>${temp} &deg;c</p>
          </div>
          <img src="${weatherImage}" class="imagethree" />
          <div class="text-center fs-5">
            <p>Humidity ${humidity}%</p>
          </div>
        </div>
      `;

      // إضافة الهيكل إلى الصفحة
      weatherForecastElementhour.innerHTML += card;
    }
  })
  .catch((error) => {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
    weatherForecastElement.innerHTML =
      '<p class="text-danger">فشل في تحميل بيانات الطقس. يرجى المحاولة مرة أخرى.</p>';
  });
