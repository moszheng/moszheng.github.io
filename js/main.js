const bg_cover = document.getElementsById("index_bg_overlay");

const bg_image = [
    './img/01_gma29.jpg', 
    './img/02_gha56_01.png'];

let index = 0;

setInterval(() => {

    console.log(bg_cover)
    bg_cover.style.backgroundImage = url(bg_image[index]);

    index = (index + 1) % colors.length;
    console.log(index)
}, 500);