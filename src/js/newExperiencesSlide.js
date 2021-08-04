const collection = document.querySelector('.collection');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
collection.style.left = '0%';


function btnStyle() {
    if(parseInt(collection.style.left) === 0) {
        prevBtn.disabled = true;
        prevBtn.style.cursor  = 'not-allowed';
    }
    else {
        prevBtn.disabled = false;
        prevBtn.style.cursor  = 'pointer';
    }

    if(parseInt(collection.style.left) < -200) {
        nextBtn.disabled = true;
        nextBtn.style.cursor  = 'not-allowed';
    } else {
        nextBtn.disabled = false;
        nextBtn.style.cursor  = 'pointer';
    }
}



nextBtn.addEventListener('click', () => {    
    collection.style.left = `${parseInt(collection.style.left) - 35}%`;
    btnStyle()
})

prevBtn.addEventListener('click', () => {
    collection.style.left = `${parseInt(collection.style.left) + 35}%`;
    btnStyle()
})
