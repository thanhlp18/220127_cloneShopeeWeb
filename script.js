const carouselSldies = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

// Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const dotBtn = document.querySelectorAll('.carousel-btn__dot');

// Counter
let counter = 1;
let counterDot = 0;
const size = carouselImages[0].clientWidth;
carouselSldies.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
carouselSldies.style.transition = "transform 0.4s ease-in-out";


// Main animation function
function carouselTransition () {
    console.log(counter)
    console.log("counterDot" + counterDot)
    carouselSldies.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    if((counterDot > dotBtn.length - 1)) {
        counterDot = 0;
    } else if(counterDot < 0) {
        counterDot = 4;
    }
    for(let j = 0; j < dotBtn.length; j ++) {
        dotBtn[j].classList.remove("carousel-btn__dot--active")
    }
    dotBtn[counterDot].classList.add("carousel-btn__dot--active");
}


// Button
nextBtn.addEventListener('click', ()=>{
    carouselSldies.style.transition = "transform 0.4s ease-in-out";
    if(counter > carouselImages.length - 2) return;
    counter++;
    counterDot++;
    carouselTransition();
});
prevBtn.addEventListener('click', ()=>{
    carouselSldies.style.transition = "transform 0.4s ease-in-out";
    if(counter <= 0 ) return;
    counter--;
    counterDot--;
    carouselTransition();
});

carouselSldies.addEventListener('transitionend', ()=> {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSldies.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselTransition();
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSldies.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselTransition();
    }
})

// Dot button
for(let i = 0; i < dotBtn.length; i++) {
    dotBtn[i].addEventListener('click', ()=> {
        counterDot = i;
        counter = i+1;
        carouselTransition();
    })
}

// Auto transition
// setInterval(()=>{
//     counter++;
//     counterDot++;
//     if(counter > carouselImages.length - 1) counter = 0;
//     carouselSldies.style.transition = "transform 0.4s ease-in-out";
//     carouselTransition();
// }, 3000)