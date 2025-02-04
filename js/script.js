const ctx = document.getElementById("lineChart").getContext("2d");
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: " Temperature  (°C)",
      data: [10, 20, -10, 15, 30, 40],
      borderColor: "orange",
      backgroundColor: "orange",
      fill: false,
      tension: 0.4,
      pointStyle: "circle",
      pointRadius: 5,
      pointBackgroundColor: "orange",
    },
    {
      label: "Humidity   (%)",
      data: [20, 30, 40, 50, 30, 60],
      borderColor: "purple",
      backgroundColor: "purple",
      fill: false,
      tension: 0.4,
      pointStyle: "circle",
      pointRadius: 5,
      pointBackgroundColor: "purple",
    },
    {
      label: "Speed  (km) ",
      data: [-20, -5, 10, 20, 50, 30],
      borderColor: "gold",
      backgroundColor: "gold",
      fill: false,
      tension: 0.4,
      pointStyle: "circle",
      pointRadius: 5,
      pointBackgroundColor: "gold",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});

var dataNews = {
  status: "ok",
  totalResults: 18960,
  articles: [
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Anna Washenko",
      title:
        "Climate change increased the odds of Los Angeles' devastating fires, researchers say",
      description:
        "As Los Angeles reels from the loss of lives and homes to the Easton and Palisades fires, scientists are asking why the events of this January have been so catastrophic. Climate change very likely played a part in setting the stage that caused multiple fires t…",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_536e0a8e-3296-491a-bacc-d7326db44fc0",
      urlToImage: null,
      publishedAt: "2025-01-29T21:16:52Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+703 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "UK facing more high winds as Storm Herminia rolls in",
      description:
        "Fresh weather warnings come after a second person confirmed killed in Storm Éowyn over the weekend.",
      url: "https://www.bbc.com/news/articles/c23np9mx5k3o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/37f6/live/a3e6ec10-dbdd-11ef-b4e7-7d7e7f8869dd.jpg",
      publishedAt: "2025-01-26T12:52:03Z",
      content:
        "Lucy Clarke-Billings Helen Willetts More high winds and heavy rain are expected on Sunday as a new storm approaches the UK. The warning came as a 19-year-old man was confirmed to have died after … [+2843 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "The latest forecast covering the UK",
      description:
        "Darren Bett looks at the latest weather around the country.",
      url: "https://www.bbc.com/news/videos/cdr01jkp706o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/f411/live/3018c080-cc3b-11ef-9fd6-0be88a764111.jpg",
      publishedAt: "2025-01-06T14:38:25Z",
      content:
        "More than 100 flood warnings are in places across the country, with homes, businesses and roads being impacted.",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Thousands without water in Republic of Ireland",
      description:
        "Irish national weather forecaster Met Éireann has issued a fresh yellow warning for the Republic.",
      url: "https://www.bbc.com/news/articles/cr7vg535vvro",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4f5d/live/c6a1c070-cc3f-11ef-9d7a-e12c85b7e0a5.jpg",
      publishedAt: "2025-01-07T09:33:58Z",
      content:
        "A fresh weather warning has been issued for the Republic of Ireland About 10,000 customers in the Republic of Ireland are still without water as snow and icy weather conditions continue to grip much… [+4825 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "Tomasz Schafernaker",
      title:
        "UK weather in 2024: Torrential rain, battering storms, and a cool summer",
      description:
        "Tomasz Schafernaker looks back at this year's UK weather - from red warnings to Northern Lights.",
      url: "https://www.bbc.com/weather/articles/c1mrz200474o",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_weather/1200/cpsprodpb/e651/live/50167240-c6c5-11ef-9fd6-0be88a764111.jpg",
      publishedAt: "2024-12-31T02:02:01Z",
      content:
        "The end of November was marked by a brief but significant cold snap, delivering the season's first notable snowfall to parts of the UK, from Scotland to Devon. Temperatures dropped below -10C in so… [+912 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "Simon King",
      title: "Weather warning increased to amber ahead of Storm Éowyn",
      description:
        "Storm Éowyn will bring severe gales to parts of the UK on Friday with widespread disruption likely",
      url: "https://www.bbc.com/weather/articles/cr46z2dv606o",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_weather/1200/cpsprodpb/2251/live/26a2fd30-d894-11ef-9567-af1f21102465.jpg",
      publishedAt: "2025-01-22T11:41:35Z",
      content:
        'Storm Éowyn pronounced "ay-oh-win" and the fifth named storm of the season will undergo rapid development during Thursday as it moves across the Atlantic. It will be fuelled by a very powerful jet st… [+1997 chars]',
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Weather Watchers' images of snow and frost across UK",
      description:
        "The UK's coldest January night in 15 years saw temperatures in northern Scotland drop to -18.9C.",
      url: "https://www.bbc.com/news/articles/c15zgjjqpd8o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/14b3/live/1e138410-d019-11ef-9fd6-0be88a764111.jpg",
      publishedAt: "2025-01-11T13:55:47Z",
      content:
        "Much of the UK endured below freezing temperatures into Saturday morning, with snow, frost and ice pictured across the country. The UK had its coldest January night in 15 years on Friday, as tempera… [+185 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "What can we expect as Storm Éowyn hits UK?",
      description:
        "Numerous weather warnings have been issued by the Met Office including an amber wind warning.",
      url: "https://www.bbc.com/news/videos/c4gx245l9y2o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/2267/live/11b9a6c0-d908-11ef-a37f-eba91255dc3d.jpg",
      publishedAt: "2025-01-22T21:42:09Z",
      content:
        "With Storm Éowyn threatening to unleash severe gales forecasters have warned lives could be risk. Numerous weather warnings have been issued by the Met Office including an amber wind warning for par… [+359 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Matthew Gault",
      title:
        "Feds Say the Technology They Use to Control the Weather Doesn’t Work",
      description:
        "America spends millions on cloud seeding every year, with mixed results.",
      url: "https://gizmodo.com/feds-say-the-technology-they-use-to-control-the-weather-doesnt-work-2000544940",
      urlToImage:
        "https://gizmodo.com/app/uploads/2025/01/CloudSeedingIndia.jpg",
      publishedAt: "2025-01-02T19:25:32Z",
      content:
        "For as long as humans have suffered at the hands of the storms they have dreamed of controlling the weather. The United States, like all great empires lost to hubris, has long sought to manipulate th… [+4953 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Stay at home warnings as risk-to-life storm hits UK",
      description:
        "Red weather warnings have been issued for parts of the UK as Storm Éowyn is set to bring wind gusts of up to 100 mph.",
      url: "https://www.bbc.com/news/articles/c78x4503neyo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/8737/live/412ae7c0-d9df-11ef-bc01-8f2c83dad217.jpg",
      publishedAt: "2025-01-24T00:04:59Z",
      content:
        "Millions of people have been urged to stay at home on Friday as Storm Éowyn is set to bring potentially life-threatening winds to the north and west of the UK. Northern Ireland and parts of Scotland… [+4058 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Hiding in a tunnel - Chris Page on reporting on savage Storm Éowyn",
      description:
        "A look at how the BBC continued to report in extreme weather when it was clearly too dangerous to go out into the open.",
      url: "https://www.bbc.com/news/articles/c3rw914verzo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/189e/live/33e82960-da70-11ef-902e-cf9b84dc1357.jpg",
      publishedAt: "2025-01-24T15:59:11Z",
      content:
        "News stories about extreme weather affect millions of lives and that is reflected in huge audiences. For journalists they are challenging to cover. We have the task of putting out information and c… [+2119 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "Shireen Jordan",
      title: "Seven celestial events to look out for in 2025",
      description:
        "It is a brand new year and if you are a stargazer there are some wonderful celestial events for you to get excited about - weather permitting.",
      url: "https://www.bbc.com/weather/articles/cy470ye4wn8o",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_weather/1200/cpsprodpb/1fcf/live/9668b050-bc7a-11ef-a0f2-fd81ae5962f4.jpg",
      publishedAt: "2025-01-01T02:25:29Z",
      content:
        "There is one partial solar eclipse visible from the UK this year, on 29 March, when the Earth, Sun and Moon will be in alignment. This is when the Moon passes between the Earth and Sun, blocking a p… [+704 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title: "Houston weather: Severe weather chances on Sunday",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_241e4eb7-9eda-4ed2-8ec6-a565a48fcfb1",
      urlToImage: null,
      publishedAt: "2025-01-03T20:53:42Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title:
        "CARROT Weather Introduces CarPlay App and Automatic Live Activities",
      description:
        "The popular weather app CARROT Weather today was updated with two key new features: CarPlay support and automatic Live Activities. When accessed via CarPlay, CARROT Weather becomes a navigation app like Google Maps. You can enter your destination and rec…",
      url: "https://www.macrumors.com/2025/01/16/carrot-weather-carplay/",
      urlToImage:
        "https://images.macrumors.com/t/IeNKZZjSYTNhQcdjda23T8tUIT4=/1600x/article-new/2025/01/CARROT-Weather-Live-Activities.jpg",
      publishedAt: "2025-01-16T17:22:02Z",
      content:
        "The popular weather app CARROT Weather today was updated with two key new features: CarPlay support and automatic Live Activities. When accessed via CarPlay, CARROT Weather becomes a navigation app … [+1064 chars]",
    },
  ],
};

const apiKey = "b12959edcb9b40828f7ea8ae43ce86bb";
const query = "weather";
const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&language=en&pageSize=14`;
var articles;

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    articles = data.articles.slice(1, 6);
    console.log(data.articles);
    const container = document.getElementById("news-container");
    articles.forEach((article) => {
      const articleHTML = document.createElement("div");
      articleHTML.classList.add(
        "element",
        "common-watcher",
        "gap-3",
        "d-flex",
        "flex-column",
        "flex-sm-row",
        "py-4"
      );
      articleHTML.innerHTML = `
        <figure style="max-width: 200px;">
          <img class="rounded w-100" src="${article.urlToImage}" alt="">
        </figure>
        <div class="img-info">
          <h4 class="move-head fw-bold">${article.title}</h4>
          <p>${article.description}</p>
          <a style="cursor : pointer;" data-title="${article.title}" data-content="${article.content}" data-image="${article.urlToImage}"  class="move-head fw-bold read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      `;
      document.getElementById("news-container").appendChild(articleHTML);
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
    var blogs = data.articles.slice(6, 8);
    var blogsUnder = data.articles.slice(8, 10);
    blogs.forEach((blog) => {
      const blogHtml = document.createElement("div");
      const isoDate = blog.publishedAt;
      const normalDate = new Date(isoDate).toLocaleDateString();
      blogHtml.classList.add("blog-post", "py-3", "d-flex", "gap-3");
      blogHtml.innerHTML = `
       <div style="max-width : 150px; max-height : 150px;" class="blog-img">
                          <a style="cursor : pointer;"  data-title="${
                            blog.title
                          }" data-content="${blog.content}" data-image="${
        blog.urlToImage
      }"  class=" imgPost">
                              <img  src="${
                                blog.urlToImage
                              }" alt="" class="img-fluid rounded-2 w-100 imgPost">
                          </a>
                        </div>
                        <div class="blog-details">
                          <h5 class="move-head fw-semibold small">
                              ${blog.title}
                          </h5>
                          <p class="grey-text small m-0">
                              ${normalDate}
                          </p>
                          <p class="grey-text small m-0">
                              ${blog.content.slice(0, 50)}
                          </p>
                        </div>
      `;
      document.getElementById("blog-posts").appendChild(blogHtml);
    });

    const imgPost = document.querySelectorAll(".imgPost");
    imgPost.forEach((link) => {
      link.addEventListener("click", function (e) {
        console.log(link);
        e.preventDefault();
        localStorage.setItem("blogTitle", link.getAttribute("data-title"));
        localStorage.setItem("blogContent", link.getAttribute("data-content"));
        localStorage.setItem("blogImage", link.getAttribute("data-image"));
        window.location.href = "blog.html";
      });
    });

    blogsUnder.forEach((blogUnder) => {
      console.log(blogUnder);
      // console.log(this)
      const blogsHtml2 = document.createElement("div");
      const isoDate = blogUnder.publishedAt;
      const normalDate = new Date(isoDate).toLocaleDateString();
      blogsHtml2.classList.add("blog-post", "py-3", "d-flex", "gap-3");
      blogsHtml2.innerHTML = `
       <div style="max-width : 150px; max-height : 150px;" class="blog-img">
                          <a   href="#">
                              <img  src="${
                                blogUnder.urlToImage
                              }" alt="" class="img-fluid rounded-2 w-100">
                          </a>
                        </div>
                        <div class="blog-details">
                          <h5 class="move-head fw-semibold small">
                              ${blogUnder.title}
                          </h5>
                          <p class="grey-text small m-0">
                              ${normalDate}
                          </p>
                          <p class="grey-text small m-0">
                              ${blogUnder.content.slice(0, 50)}
                          </p>
                        </div>
      `;

      document.getElementById("blog-posts-under").appendChild(blogsHtml2);
    });

    const blogPost = document.querySelectorAll(".blogPost");
    blogPost.forEach((link) => {
      link.addEventListener("click", function (e) {
        console.log(link);
        e.preventDefault();
        localStorage.setItem("blogTitle", link.getAttribute("data-title"));
        localStorage.setItem("blogContent", link.getAttribute("data-content"));
        localStorage.setItem("blogImage", link.getAttribute("data-image"));
        window.location.href = "blog.html";
      });
    });
  })
  .catch((error) => {
    console.error("Error:", error);

    articles = dataNews.articles.slice(1, 6);
    console.log(data.articles);
    const container = document.getElementById("news-container");
    articles.forEach((article) => {
      const articleHTML = document.createElement("div");
      articleHTML.classList.add(
        "element",
        "common-watcher",
        "gap-3",
        "d-flex",
        "flex-column",
        "flex-sm-row",
        "py-4"
      );
      articleHTML.innerHTML = `
        <figure style="max-width: 200px;">
          <img class="rounded w-100" src="${article.urlToImage}" alt="">
        </figure>
        <div class="img-info">
          <h4 class="move-head fw-bold">${article.title}</h4>
          <p>${article.description}</p>
          <a style="cursor : pointer;" data-title="${article.title}" data-content="${article.content}" data-image="${article.urlToImage}"  class="move-head fw-bold read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      `;
      document.getElementById("news-container").appendChild(articleHTML);
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
    var blogs = dataNews.articles.slice(6, 8);
    var blogsUnder = dataNews.articles.slice(8, 10);
    blogs.forEach((blog) => {
      const blogHtml = document.createElement("div");
      const isoDate = blog.publishedAt;
      const normalDate = new Date(isoDate).toLocaleDateString();
      blogHtml.classList.add("blog-post", "py-3", "d-flex", "gap-3");
      blogHtml.innerHTML = `
       <div style="max-width : 150px; max-height : 150px;" class="blog-img" data-title="${
         blog.title
       }" data-content="${blog.content}" data-image="${blog.urlToImage}" >
                          <a style="cursor : pointer;"  data-title="${
                            blog.title
                          }" data-content="${blog.content}" data-image="${
        blog.urlToImage
      }"  class=" imgPost">
                              <img  src="${
                                blog.urlToImage
                              }" alt="" class="img-fluid rounded-2 w-100 imgPost">
                          </a>
                        </div>
                        <div class="blog-details">
                          <h5 class="move-head fw-semibold small">
                              ${blog.title}
                          </h5>
                          <p class="grey-text small m-0">
                              ${normalDate}
                          </p>
                          <p class="grey-text small m-0">
                              ${blog.content.slice(0, 50)}
                          </p>
                        </div>
      `;
      document.getElementById("blog-posts").appendChild(blogHtml);
    });

    const imgPost = document.querySelectorAll(".imgPost");
    imgPost.forEach((link) => {
      link.addEventListener("click", function (e) {
        console.log(link);
        e.preventDefault();
        localStorage.setItem("blogTitle", link.getAttribute("data-title"));
        localStorage.setItem("blogContent", link.getAttribute("data-content"));
        localStorage.setItem("blogImage", link.getAttribute("data-image"));
        window.location.href = "blog.html";
      });
    });

    blogsUnder.forEach((blogUnder) => {
      console.log(blogUnder);
      // console.log(this)
      const blogsHtml2 = document.createElement("div");
      const isoDate = blogUnder.publishedAt;
      const normalDate = new Date(isoDate).toLocaleDateString();
      blogsHtml2.classList.add("blog-post", "py-3", "d-flex", "gap-3");
      blogsHtml2.innerHTML = `
       <div style="max-width : 150px; max-height : 150px;" class="blog-img" data-title="${
         blogUnder.title
       }" data-content="${blogUnder.content}" data-image="${
        blogUnder.urlToImage
      }" >
                          <a   href="#">
                              <img  src="${
                                blogUnder.urlToImage
                              }" alt="" class="img-fluid rounded-2 w-100">
                          </a>
                        </div>
                        <div class="blog-details">
                          <h5 class="move-head fw-semibold small">
                              ${blogUnder.title}
                          </h5>
                          <p class="grey-text small m-0">
                              ${normalDate}
                          </p>
                          <p class="grey-text small m-0">
                              ${blogUnder.content.slice(0, 50)}
                          </p>
                        </div>
      `;

      document.getElementById("blog-posts-under").appendChild(blogsHtml2);
    });

    const blogPost = document.querySelectorAll(".blog-img");
    blogPost.forEach((link) => {
      link.addEventListener("click", function (e) {
        console.log(link);
        e.preventDefault();
        localStorage.setItem("blogTitle", link.getAttribute("data-title"));
        localStorage.setItem("blogContent", link.getAttribute("data-content"));
        localStorage.setItem("blogImage", link.getAttribute("data-image"));
        window.location.href = "blog.html";
      });
    });
  });
window.onload = function () {
  // Ensure default background is white

  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  var isDark = localStorage.getItem("darkMode");
  if (isDark === "true") {
    enableDarkMode();
  }
};

function toggledarkmode() {
  var isDark = localStorage.getItem("darkMode");
  if (isDark === "true") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "#6b6b6b";
  localStorage.setItem("darkMode", "true");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  localStorage.removeItem("darkMode");
}
