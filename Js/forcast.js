
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