const elements = document.querySelectorAll('.element')
const observer = new IntersectionObserver(function(entries , observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            // console.log(entries);
            // console.log(observer);
            entry.target.classList.add('element-show');
            observer.unobserve(entry.target);
        }
    });
} , {threshold : 0.1}) ;
// observer.observe(target);
elements.forEach(function(ele){
    observer.observe(ele);
})




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
