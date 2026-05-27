$(document).ready(() => {
    let slides = $('.slide');
    let current = 0;

    setInterval(() => {
        slides.eq(current).removeClass('active');
        current++;

        if(current >= slides.length){
            current = 0;
        }

        slides.eq(current).addClass('active');

    }, 5000);

});