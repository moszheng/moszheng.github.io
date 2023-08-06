const bg_cover = document.getElementById("index_bg_overlay")[0];

// 定義需要更改的樣式顏色陣列
const bg_image = [
    './img/01_gma29.jpg', 
    './img/02_gha56_01.png'];

// 設定定時器，每500毫秒更換一次樣式
let index = 0;

setInterval(() => {

    
    bg_cover.style.backgroundImage = url(bg_image[index]);

    index = (index + 1) % colors.length;

}, 500);