const btn = document.querySelector('.modal__auth');
const frmp = document.querySelector('.form__phone');
function swa(){
    if(frmp.value){
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
        frmp.style.border = 'none';
    }else{
        frmp.style.border = '1px solid red';
    }
}
function swa2(){
	btn.style.visibility = 'hidden';
	btn.style.opacity = '0';
}

$(document).ready(function () {
    
    var mySwiper = new Swiper ('.swiper-container', {
        allowTouchMove: false,
    loop: true,
    navigation: {
        nextEl: ".slider__button1, .slider__button2, .slider__button3",
    }
    })
});