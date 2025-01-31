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
function validateForm() {
  let isValid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("sub").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("subjectError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").textContent = "Email is invalid";
    isValid = false;
  }

  if (phone !== "" && !/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number is invalid";
    isValid = false;
  }

  if (subject === "") {
    document.getElementById("subjectError").textContent = "Subject is required";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  return isValid;
}

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

  const placeName = document.createElement("h2");
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

const apiKey = "31b8d7e4ae5c4914bda173416252801";
const city = "Cairo";

// رابط API للطقس الحالي
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ar`;

// عنصر HTML لعرض بيانات الطقس
const weatherInfoElement = document.getElementById("weather-info");

// جلب بيانات الطقس من API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // استخراج البيانات المطلوبة
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;

    // عرض البيانات في الصفحة
    // weatherInfoElement.innerHTML = `
    //                 الحالة: ${condition}<br>
    //                 درجة الحرارة: ${temperature}°C<br>
    //                 الرطوبة: ${humidity}%<br>
    //                 سرعة الرياح: ${windSpeed} كم/ساعة
    //             `;
    console.log(data);
  })
  .catch((error) => {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
    weatherInfoElement.innerText =
      "فشل في تحميل بيانات الطقس. يرجى المحاولة مرة أخرى.";
  });
window.onload = function () {
  
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  var isDark = localStorage.getItem('darkMode');
  if (isDark === 'true') {
    enableDarkMode();
  }
};

function toggledarkmode() {
  var isDark = localStorage.getItem('darkMode');
  if (isDark === 'true') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  document.body.style.backgroundColor = "black";
  document.body.style.color = "#6b6b6b";
  localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  localStorage.removeItem('darkMode');
}
