const slide = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    } else {
        slide[0].classList.add('current');
    }
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    } else {
        slide[(slide.length)-1].classList.add('current')
    }
}

//button events
next.addEventListener('click', e => {nextSlide()});
prev.addEventListener('click', e => {prevSlide()});