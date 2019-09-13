const first = document.querySelector('#first');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;
//set first img opacity
imgs[0].style.opacity = opacity

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(event) {
 //reset opacity
 imgs.forEach(img => (img.style.opacity = 1));
 // change first image to src of clicked image
 first.src = event.target.src;
 //add fade in class
 first.classList.add('fade-in');
 //remove fad in class after 0.5 sec
 setTimeout(() => first.classList.remove('fade-in'), 500);
 //change the opacity to opacity var
 event.target.style.opacity = opacity;

}