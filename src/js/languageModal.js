const globe = document.querySelector('.language-select');
const langModal = document.querySelector('.lang-modal');

globe.addEventListener('click', () => {
    langModal.classList.toggle('show');
})



const overlay = langModal.querySelector('.lang-overlay');
const closeBtn =  langModal.querySelector('.lang-exit button');


const closeModal = () => {
    langModal.classList.add('show');
  }

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
