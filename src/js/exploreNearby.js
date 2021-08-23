const exploreNearby = document.querySelector('.explore-nearby');

function render() {
    let template = `
        <h2 class="sub-heading">가까운 여행지 둘러보기</h2>

        <div class="explore-citys">
            {{__city_info__}}
        </div>    
    `;

    const cityInfo = [['seoul', '서울', '3.5'], ['busan', '부산', '4.5'], ['yangyang', '양양', '1.5'], ['sokcho', '속초', '1.5'], ['goseong', '고성', '2'], ['wanju', '완주', '5'], ['daegu', '대구', '3.5'], ['jeonju', '전주', '5']];

    const cityList = [];
    for (let i = 0; i < cityInfo.length; i++) {
        cityList.push(`
            <div class="city-name ${cityInfo[i][0]}">
                <a href="#">
                    <img src="assets/img/citys/${cityInfo[i][0]}.jpg">
                    <div>
                        <strong>${cityInfo[i][1]}</strong>
                        <span>차로 ${cityInfo[i][2]}시간 거리</span>
                    </div>
                </a>
            </div>
        `);
    }

    template = template.replace('{{__city_info__}}', cityList.join(''));

    exploreNearby.innerHTML = template;
}

render();