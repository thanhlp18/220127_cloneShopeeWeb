// Category
const catBtnRight = document.getElementById('full-home-caterogy__control-right');
const catBtnLeft = document.getElementById('full-home-caterogy__control-left');
const caterogyList = document.querySelector('.full-home-category__list');

// Control category
catBtnLeft.addEventListener('click', ()=>{
    caterogyList.style.transform = 'translateX(0)';
})
catBtnRight.addEventListener('click', ()=>{
    caterogyList.style.transform = 'translateX(-23.0769%)';
})

// Flash sale
const flashSaleBtnRight = document.getElementById('flash-sale-overview__control-right');
const flashSaleBtnLeft = document.getElementById('flash-sale-overview__control-left');
const flashSaleList = document.querySelector('.flash-sale-overview__list');

// Control flashSale
flashSaleBtnLeft.addEventListener('click', ()=>{
    flashSaleList.style.transform = 'translateX(0)';
})
flashSaleBtnRight.addEventListener('click', ()=>{
    flashSaleList.style.transform = 'translateX(-50%)';
})