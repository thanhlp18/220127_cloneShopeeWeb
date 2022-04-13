// Slider control
const carouselBtns = document.querySelectorAll('.carousel-btn__dot');
const carouselItem = document.querySelectorAll('.full-home-banners__list li');
const carouselSlides = document.querySelector('.full-home-banners__list');
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

// variable
const size = carouselItem[0].clientWidth;
let counter = 1;
let dotCoutner = 0;

//carouse transform
carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';




function carouselInfinityControl() {
    for(let i = 0; i < carouselItem.length; i++) {

    }
}

function carouselTransition() {
    if(counter >= carouselItem.length) {
        counter = 1;
    } else if(counter < 0) {
        counter = 5 
    }
    carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

carouselSlides.addEventListener('transitionend', ()=> {

    if(carouselItem[counter].id === 'lastClone'){
        carouselSlides.style.transition = 'none';
        counter = carouselItem.length - 2;
        carouselTransition();
    }
    if(carouselItem[counter].id === 'firstClone'){
        carouselSlides.style.transition = 'none';
        counter = carouselItem.length - counter;
        carouselTransition();
    }
})

// Dots active 
function carouselDotActive() {
    if(dotCoutner >= 5) {
        dotCoutner = 0;
    } else if(dotCoutner < 0) {
        dotCoutner = 4;
    }
    for(let j = 0; j< carouselBtns.length; j++){
        if(carouselBtns[j].classList.contains('carousel-btn__dot--active')){
            carouselBtns[j].classList.remove('carousel-btn__dot--active')
        };
    }
    carouselBtns[dotCoutner].classList.add('carousel-btn__dot--active');
}

// Control slider with dots
for(let i = 0; i < carouselBtns.length; i++){
    carouselBtns[i].addEventListener('click',()=>{
        carouselSlides.style.transition = "transform 0.4s ease-in-out";
        dotCoutner = i;
        counter = i + 1;
        carouselDotActive();
        console.log(counter)
        carouselTransition();
    })
}

// Control slider with btn
prevBtn.addEventListener('click', ()=>{
    counter--;
    dotCoutner--;
    carouselSlides.style.transition = "transform 0.4s ease-in-out";
    carouselDotActive() 
    carouselTransition();
})

nextBtn.addEventListener('click', ()=>{
    counter++;
    dotCoutner++;
    carouselSlides.style.transition = "transform 0.4s ease-in-out";
    carouselDotActive() 
    carouselTransition();
})

// Auto slider
setInterval(()=>{
    counter++;
    dotCoutner++;
    carouselSlides.style.transition = "transform 0.4s ease-in-out";
    carouselDotActive();
    carouselTransition();
},3000);