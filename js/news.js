var news;

fetch("/data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    // console.log(url)
    news = data.articles.slice(1,4);
    
    console.log(news.articles);
    // const container = document.getElementById('news-container');
    //   articles.forEach(article => {
    //   const articleHTML = document.createElement('div');
    //   articleHTML.classList.add('element', 'common-watcher', 'gap-3', 'd-flex', 'flex-column', 'flex-sm-row', 'py-4');
    //   articleHTML.innerHTML = `
    //     <figure style="max-width: 200px;">
    //       <img class="rounded w-100" src="${article.urlToImage}" alt="">
    //     </figure>
    //     <div class="img-info">
    //       <h4 class="move-head fw-bold">${article.title}</h4>
    //       <p>${article.description}</p>
    //     </div>
    //   `;
    //   document.getElementById('news-container').appendChild(articleHTML);
    // });
    // const readMoreLinks = document.querySelectorAll('.read-more');
    // readMoreLinks.forEach(link => {
    //   link.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     localStorage.setItem('blogTitle', link.getAttribute('data-title'));
    //     localStorage.setItem('blogContent', link.getAttribute('data-content'));
    //     localStorage.setItem('blogImage', link.getAttribute('data-image'));
    //     window.location.href = 'blog.html';
    //   });
    // });
    var newsRow_1 = document.getElementById("news-row-1");
    var newsRow_2 = document.getElementById("news-row-2");
    var newsRow_3 = document.getElementById("news-row-3");
    var newsRow_4 = document.getElementById("news-row-4");
    news.forEach(oneNews => {
        console.log(oneNews);
        var parentDiv = document.createElement('div');
        parentDiv.classList.add('col');
        var newsHtml = document.createElement('div');
        newsHtml.classList.add('card', 'shadow-sm' , 'main-card');
        parentDiv.appendChild(newsHtml);
        newsHtml.innerHTML = `
         <img src="${oneNews.urlToImage}" alt="" width="100%" height="225">
                            <div class="card-body">
                                <a href="#" class="main-links">${oneNews.title}</a>
                                <p>By John Doe • September 28, 2024</p>
                                <p class="card-text">${oneNews.content.slice(0,100)}....</p>
                                <div style="cursor : pointer;" class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a
                                        data-title="${oneNews.title}"
                                        data-content="${oneNews.content}"
                                        data-image="${oneNews.urlToImage}"
                                        class="main-links read-more">Read More <i
                                                class="fa-solid fa-arrow-right"></i></a>
                                    </div>

                                </div>
                            </div>
        `
        newsRow_1.appendChild(parentDiv);
    });
    news = data.articles.slice(4,7);
    news.forEach(oneNews => {
        console.log(oneNews);
        var parentDiv = document.createElement('div');
        parentDiv.classList.add('col');
        var newsHtml = document.createElement('div');
        newsHtml.classList.add('card', 'shadow-sm' , 'main-card');
        parentDiv.appendChild(newsHtml);
        newsHtml.innerHTML = `
         <img src="${oneNews.urlToImage}" alt="" width="100%" height="225">
                            <div class="card-body">
                                <a href="#" class="main-links">${oneNews.title}</a>
                                <p>By John Doe • September 28, 2024</p>
                                <p class="card-text">${oneNews.content.slice(0,100)}....</p>
                                <div style="cursor : pointer;" class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a 
                                        data-title="${oneNews.title}"
                                        data-content="${oneNews.content}"
                                        data-image="${oneNews.urlToImage}"
                                        class="main-links read-more">Read More <i
                                                class="fa-solid fa-arrow-right"></i></a>
                                    </div>

                                </div>
                            </div>
        `
        newsRow_2.appendChild(parentDiv);
    });
    news = data.articles.slice(7,10);
    news.forEach(oneNews => {
        console.log(oneNews);
        var parentDiv = document.createElement('div');
        parentDiv.classList.add('col');
        var newsHtml = document.createElement('div');
        newsHtml.classList.add('card', 'shadow-sm' , 'main-card');
        parentDiv.appendChild(newsHtml);
        newsHtml.innerHTML = `
         <img src="${oneNews.urlToImage}" alt="" width="100%" height="225">
                            <div class="card-body">
                                <a href="#" class="main-links">${oneNews.title}</a>
                                <p>By John Doe • September 28, 2024</p>
                                <p class="card-text">${oneNews.content.slice(0,100)}....</p>
                                <div style="cursor : pointer;" class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a   
                                        data-title="${oneNews.title}"
                                        data-content="${oneNews.content}"
                                        data-image="${oneNews.urlToImage}"
                                        class="main-links read-more">Read More <i
                                                class="fa-solid fa-arrow-right"></i></a>
                                    </div>

                                </div>
                            </div>
        `
        newsRow_3.appendChild(parentDiv);
    });

    news = data.articles.slice(9,12);
    news.forEach(oneNews => {
        console.log(oneNews);
        var parentDiv = document.createElement('div');
        parentDiv.classList.add('col');
        var newsHtml = document.createElement('div');
        newsHtml.classList.add('card', 'shadow-sm' , 'main-card');
        parentDiv.appendChild(newsHtml);
        newsHtml.innerHTML = `
         <img src="${oneNews.urlToImage}" alt="" width="100%" height="225">
                            <div class="card-body">
                                <a href="#" class="main-links">${oneNews.title}</a>
                                <p>By John Doe • September 28, 2024</p>
                                <p class="card-text">${oneNews.content.slice(0,100)}....</p>
                                <div style="cursor : pointer;" class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a 
                                        data-title="${oneNews.title}"
                                        data-content="${oneNews.content}"
                                        data-image="${oneNews.urlToImage}"
                                        class="main-links read-more">Read More <i
                                                class="fa-solid fa-arrow-right"></i></a>
                                    </div>

                                </div>
                            </div>
        `
        newsRow_4.appendChild(parentDiv);
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
