const bestSection = document.querySelector('.olympic-items-best');
const bestItem = document.querySelectorAll('.olympic-items-best .olympic-article');
const slides = document.querySelector('.slides');
const bestPrev = document.querySelector('.bestPrev');
const bestNext = document.querySelector('.bestNext');
slides.style.left = '0'


function moveSlide(num) {
    if(num === '-3212px') {
        slides.style.left = 0;
    }
    if (num === '0px') {
        slides.style.left = '-3212px';
    }
}

bestNext.addEventListener('click', () => {
    if (slides.style.left === '-3212px') {
        slides.style.left = 0;
    } else {
        slides.style.left = `${parseInt(slides.style.left) - 1606}px`;
    }
})

bestPrev.addEventListener('click', () => {
    if (slides.style.left === '0px') {
        slides.style.left = '-3212px';
    } else {
        slides.style.left = `${parseInt(slides.style.left) + 1606}px`;
    }
})