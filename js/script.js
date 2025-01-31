
const ctx = document.getElementById('lineChart').getContext('2d');
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Content 1',
      data: [10, 20, -10, 15, 30, 40],
      borderColor: 'orange',
      backgroundColor: 'orange',
      fill: false,
      tension: 0.4, 
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: 'orange',
    },
    {
      label: 'Content 2',
      data: [20, 30, 40, 50, 30, 60],
      borderColor: 'purple',
      backgroundColor: 'purple',
      fill: false,
      tension: 0.4,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: 'purple',
    },
    {
      label: 'Content 3',
      data: [-20, -5, 10, 20, 50, 30],
      borderColor: 'gold',
      backgroundColor: 'gold',
      fill: false,
      tension: 0.4,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: 'gold',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom', 
    },
  },
  scales: {
    y: {
      beginAtZero: false, 
    },
  },
};

new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
});


const apiKey = 'b12959edcb9b40828f7ea8ae43ce86bb'; 
const query = 'weather'; 
const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&language=en&pageSize=14`;
var articles;

fetch("/data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(url)
    articles = data.articles.slice(0,5);
    console.log(data.articles);
    const container = document.getElementById('news-container');
      articles.forEach(article => {
      const articleHTML = document.createElement('div');
      articleHTML.classList.add('element', 'common-watcher', 'gap-3', 'd-flex', 'flex-column', 'flex-sm-row', 'py-4');
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
      document.getElementById('news-container').appendChild(articleHTML);
    });
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.setItem('blogTitle', link.getAttribute('data-title'));
        localStorage.setItem('blogContent', link.getAttribute('data-content'));
        localStorage.setItem('blogImage', link.getAttribute('data-image'));
        window.location.href = 'blog.html';
      });
    });
    var blogs = data.articles.slice(6,8);
    var blogsUnder = data.articles.slice(8,10);
    blogs.forEach(blog => {
      const blogHtml = document.createElement('div');
      const isoDate = blog.publishedAt;
      const normalDate = new Date(isoDate).toLocaleDateString();
      blogHtml.classList.add('blog-post' , 'py-3', 'd-flex', 'gap-3');
      blogHtml.innerHTML = `
       <div style="max-width : 150px; max-height : 150px;" class="blog-img">
                          <a style="cursor : pointer;"  data-title="${blog.title}" data-content="${blog.content}" data-image="${blog.urlToImage}"  class=" imgPost">
                              <img  src="${blog.urlToImage}" alt="" class="img-fluid rounded-2 w-100 imgPost">
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
                              ${blog.content.slice(0,50)}
                          </p>
                        </div>
      `
      document.getElementById('blog-posts').appendChild(blogHtml);
    })

    const imgPost = document.querySelectorAll('.imgPost');
    imgPost.forEach(link => {
      link.addEventListener('click', function(e) {
        console.log(link)
        e.preventDefault();
        localStorage.setItem('blogTitle', link.getAttribute('data-title'));
        localStorage.setItem('blogContent', link.getAttribute('data-content'));
        localStorage.setItem('blogImage', link.getAttribute('data-image'));
        window.location.href = 'blog.html';
      });
    });


    blogsUnder.forEach(blogUnder => {
      console.log(blogUnder)
      // console.log(this)
      const blogsHtml2 = document.createElement('div');
      const isoDate = blogUnder.publishedAt;
      const normalDate = new Date(isoDate).toLocaleDateString();
      blogsHtml2.classList.add('blog-post' , 'py-3', 'd-flex', 'gap-3');
      blogsHtml2.innerHTML = `
       <div style="max-width : 150px; max-height : 150px;" class="blog-img">
                          <a   href="#">
                              <img  src="${blogUnder.urlToImage}" alt="" class="img-fluid rounded-2 w-100">
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
                              ${blogUnder.content.slice(0,50)}
                          </p>
                        </div>
      `
      
      document.getElementById('blog-posts-under').appendChild(blogsHtml2);
    })



    const blogPost = document.querySelectorAll('.blogPost');
    blogPost.forEach(link => {
      link.addEventListener('click', function(e) {
        console.log(link)
        e.preventDefault();
        localStorage.setItem('blogTitle', link.getAttribute('data-title'));
        localStorage.setItem('blogContent', link.getAttribute('data-content'));
        localStorage.setItem('blogImage', link.getAttribute('data-image'));
        window.location.href = 'blog.html';
      });
    });


    //  articles.forEach(article => {
    //   const articleHTML = `
    //   <div class="element common-watcher gap-3 d-flex flex-column flex-sm-row py-4">
    //     <figure style="max-width : 200px ;">
    //          <img class="rounded w-100" src="${article.urlToImage}" alt="">
    //     </figure>
    //     <div class="img-info">
    //         <h4 class="move-head fw-bold">
    //             ${article.title}
    //         </h4>
    //         <p>${article.description}</p>
    //         <a href="${article.urlToImage
    //           }" class="move-head fw-bold">
    //             Read More
    //             <i class="fa-solid fa-arrow-right"></i> 
    //         </a>
    //     </div>
    //   </div>
    // `;
    // console.log(article.urlToImage)

    // container.innerHTML += articleHTML;
    //  });
    // console.log(article.title)
    // const container = document.getElementById('articles-container');
    // const articleEle = document.createElement('div');
    // articleEle.classList.add('article');
    // const title = document.createElement('h3');
    // title.textContent = article.title;
    // container.appendChild(title);
    // });
   
    
  })
  .catch(error => console.error('Error:', error));
  window.onload = function () {
    // Ensure default background is white
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
// function saveBlogData(ele) {
//   // const img = document.querySelector(`a[href="blog.html"] img[data-title][data-content]`);
  
//   // if (img) {
//   //     localStorage.setItem("blogImage", img.src);
//   //     localStorage.setItem("blogTitle", img.getAttribute("data-title"));
//   //     localStorage.setItem("blogContent", img.getAttribute("data-content"));
//   // }
//   // event.preventDefault();
//   console.log(ele);
//   var img = ele.querySelector('.img-data');
//   const imageUrl = img.src;
//   const title = img.getAttribute('data-title');
//   const content = img.getAttribute('data-content');

//   console.log("Image URL:", imageUrl);
//   console.log("Title:", title);
//   console.log("Content:", content);

//   localStorage.setItem()
// }