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


// 총 인원 표시
function guestTotal(totalPerson, infantCount) {
    if(infantCount > 0) { 
        gusetTotal.style.color="black";
        gusetTotal.style.fontWeight  = "600";
        gusetTotal.innerText = `게스트 ${adultCount+childrenCount}명, 어린이 ${infantCount}명`;      
    } else if (infantCount === 0 && totalPerson > 0) { // 유아 0명, 성인+어린이 1명 이상
        gusetTotal.style.color="black";
        gusetTotal.style.fontWeight  = "600";
        gusetTotal.innerText = `게스트 ${adultCount+childrenCount}명`;   
    } else if (infantCount === 0 && totalPerson === 0) { // 모두 0명
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
const adult = document.querySelector('.adult');

let adultCount = 0; // 성인
let childrenCount = 0; // 어린이
let infantCount = 0; // 유아

for(const personPlus of personPluses) {
    personPlus.addEventListener("click", () => {
        person = personPlus.previousElementSibling;
        person.innerText = +person.innerText + 1;

        if (personPlus.parentElement.previousElementSibling.className === 'adult') {
            adultCount = +person.innerText;
        } else if (personPlus.parentElement.previousElementSibling.className === 'children') {
            childrenCount = +person.innerText;
            if(childrenCount === 1 && adultCount === 0) {
                adultCount += 1;
                +adult.nextElementSibling.children[1].innerText++;
                adult.nextElementSibling.children[0].disabled  = false;
                adult.nextElementSibling.children[0].style.cursor  = 'pointer';
            }
        } else if (personPlus.parentElement.previousElementSibling.className === 'infants') {
            infantCount = +person.innerText;
            if(infantCount === 1 && adultCount === 0) {
                adultCount += 1;
                +adult.nextElementSibling.children[1].innerText++;
                adult.nextElementSibling.children[0].disabled  = false;
                adult.nextElementSibling.children[0].style.cursor  = 'pointer';
            }
        }
        guestTotal(adultCount+childrenCount, infantCount);
        checkPersonBtn(personPlus);
    })
}


// Person minus
const personMinuses = document.querySelectorAll('.person-minus');
for(const personMinus of personMinuses) {
    personMinus.addEventListener("click", () => {
        person = personMinus.nextElementSibling;

        if(person.parentElement.previousElementSibling.className === 'adult') {
            //어린이 1명 이상 || 유아 1명 이상 있을 시 성인 최소 인원 1명
            if (adultCount === 1 && childrenCount > 0) {
                adultCount = +person.innerText;
            } else if(adultCount === 1 && infantCount > 0) {
                adultCount = +person.innerText;
            } else {
                person.innerText = +person.innerText - 1;
                adultCount = +person.innerText;
            }
        } else if (person.parentElement.previousElementSibling.className === 'children') {
            person.innerText = +person.innerText - 1;
            childrenCount = +person.innerText;
        } else if (person.parentElement.previousElementSibling.className === 'infants') {
            person.innerText = +person.innerText - 1;
            infantCount= +person.innerText;
        }
        guestTotal(adultCount+childrenCount, infantCount);
        checkPersonBtn(personMinus);
    })
}

// personBtn
personBtn.addEventListener('click', () => {
    personDetail.classList.toggle('hidden-none');
})

