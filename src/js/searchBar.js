const homeSearchItem = document.querySelector('.home-search-form-item');
const searchBtn = document.querySelector('.search-btn');
const searchBtnItem = document.querySelector('.search-btn button');
const searchHidden = document.querySelector('.search-hidden');
const personBtn = document.querySelector('.person');
const personDetail = document.querySelector('.person-detail');
const gusetTotal = document.querySelector('.person span');


searchBtnItem.addEventListener("click", (event) => {
    event.defaultPrevented();
})

homeSearchItem.addEventListener("click", (event) => {
    event.stopPropagation();
    searchBtn.style.width.toggle='75px';
    searchHidden.classList.toggle('hidden-none');
})


document.body.addEventListener("click", () => {
    searchBtn.style.width.toggle='26px';
    searchHidden.classList.add('hidden-none');
});



// Total Guest Number
function guestTotal(totalPerson) {
    if(totalPerson > 0) {
        gusetTotal.style.color="black";
        gusetTotal.style.fontWeight  = "600";
        gusetTotal.innerText = `게스트 ${totalPerson}명`;      
    } else if (totalPerson === 0) {
        gusetTotal.style.color="#777";
        gusetTotal.style.fontWeight  = "400";
        gusetTotal.innerText = '게스트 추가';   
    }
};

// 사람 0명 시 button disabled
function checkPersonBtn(personCnt) {
    if(+personCnt.parentNode.children[1].innerText === 0) {
        personCnt.parentNode.children[0].disabled  = true;
        personCnt.parentNode.children[0].style.cursor  = 'not-allowed';
        
    } else {
        personCnt.parentNode.children[0].disabled  = false;
        personCnt.parentNode.children[0].style.cursor  = 'pointer';
    }
}

// Person plus
const personPluses = document.querySelectorAll('.person-plus');
const personNums = document.querySelectorAll('.person-num'); // 총 인원 
let totalPerson = 0;

for(const personPlus of personPluses) {
    personPlus.addEventListener("click", () => {
        person = personPlus.previousElementSibling;
        personPlus.previousElementSibling.innerText = +person.innerText + 1;
        totalPerson += 1; // 총 인원 +=1
        guestTotal(totalPerson);
        checkPersonBtn(personPlus);
    })
}


// Person minus
const personMinuses = document.querySelectorAll('.person-minus');
for(const personMinus of personMinuses) {
    personMinus.addEventListener("click", () => {
        person = personMinus.nextElementSibling;
        personMinus.nextElementSibling.innerText = +person.innerText - 1;
        totalPerson -= 1; // 총 인원 -=1
        guestTotal(totalPerson);
        checkPersonBtn(personMinus);
    })
}


// personBtn
personBtn.addEventListener('click', () => {
    personDetail.classList.toggle('hidden-none');
})

