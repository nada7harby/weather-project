document.addEventListener('DOMContentLoaded', function() {
    const blogTitle = localStorage.getItem('blogTitle');
    const blogContent = localStorage.getItem('blogContent');
    const blogImage = localStorage.getItem('blogImage');
  
    if (blogTitle && blogContent && blogImage) {
      console.log()  
      document.getElementById('blog-title').innerText = blogTitle;
      document.getElementById('blog-content').innerText = blogContent;
      document.getElementById('blog-image').src = blogImage;
    } else {
      console.error('No blog data found.');
    }
  });
  const apiKey = 'b12959edcb9b40828f7ea8ae43ce86bb'; 
const query = 'weather'; 
const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&language=en&pageSize=10`;
var articles;
fetch(url)
.then(response => response.json())
.then(data => {
    var blogs = data.articles.slice(6,8);
    blogs.forEach(blog => {
      const blogHtml = document.createElement('div');
      const isoDate = blog.publishedAt;
      const normalDate = new Date(isoDate).toLocaleDateString();
      blogHtml.classList.add('blog-post' , 'py-3', 'd-flex', 'gap-3');
      blogHtml.innerHTML = `
       <div style="max-width : 100px; max-height : 100px;" class="blog-img">
                          <a   href="#">
                              <img  src="${blog.urlToImage}" alt="" class="img-fluid rounded-2 w-100">
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
});
 

