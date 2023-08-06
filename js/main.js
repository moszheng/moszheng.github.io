const bg_cover = document.getElementById("index_bg_cover");

const bg_image = [
    './img/01_gma29.jpg', 
    './img/02_gha56_01.png',
    './img/03_SWSX_01.jpg'
];

let index = 0;


setInterval(() => {
    
    bg_cover.style.backgroundImage = `url(${bg_image[index]})`;
    index = (index + 1) % bg_image.length;
    console.log(index)
}, 3500);