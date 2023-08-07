const bg_cover = document.getElementById("index_bg_cover");

const bg_image = [
    './img/01_gma29.jpg', 
    './img/03_SWSX_01.jpg',
    './img/05_GMA32_01.png',
    './img/04_KK_01.png',
    './img/02_gha56_01.png',
];

let index = 0;


setInterval(() => {
    
    bg_cover.style.backgroundImage = `url(${bg_image[index]})`;
    index = (index + 1) % bg_image.length;
    
}, 3500);

// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbwzJZ2vywOdfJsfRp_I8FFWYnI3avEc5gima4S_T21h8lz9L7cS4oDh1rAbPjNp5KqedA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})