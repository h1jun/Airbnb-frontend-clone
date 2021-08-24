const footerLink = document.querySelector('.footer-link');

function render() {
    let template = `
        <div class="footer-container">
            {{__footer-item__}}
        </div>
    `;
    
    const footerTitle = [['into', '소개'], ['community', '커뮤니티'], ['hosting','호스팅하기'], ['support', '에어비앤비 지원']];
    
    const footerList = []
    for (let i = 0; i < footerTitle.length; i++) {
        footerList.push(` 
            <div class="footer-item footer-${footerTitle[i][0]}">
                <h3>${footerTitle[i][1]}</h3>
                <ul>
                    {{__${footerTitle[i][0]}__}}
                </ul>
            </div>
        `);
    } 

    template = template.replace('{{__footer-item__}}', footerList.join(''));
    
    // 1.
    const info = ['에어비앤비 이용 방법', '뉴스룸', '에어비앤비 2021', '투자자 정보', '에어비앤비 플러스', '에어비앤비 Luxe', '호텔투나잇', '에어비앤비 비즈니스 프로그램', '호스트 분들이 있기에 가능합니다.', '채용정보', '창립자 편지']
    
    const infoList = info.map(element => `
        <li><a href="#">${element}</a></li>
    `);

    template = template.replace('{{__into__}}', infoList.join(''));

    // 2.
    const community = ['다양성 및 소속감', '접근성', '에어비앤비 에소시에이트', '구호 인력을 위한 숙소', '게스트 추천', 'Airbnb.org'];
    
    const communityList = community.map(element => `
        <li><a href="#">${element}</a></li>
    `);

    template = template.replace('{{__community__}}', communityList.join(''));

    // 3.
    const hosting = ['숙소 호스팅', '온라인 체험 호스팅하기', '체험 호스팅하기', '책임감 있는 호스팅', '자료 센터', '커뮤니티 센터'];
    
    const hostingList = hosting.map(element => `
        <li><a href="#">${element}</a></li>
    `);

    template = template.replace('{{__hosting__}}', hostingList.join(''));

    // 4.
    const support = ['에어비앤비의 코로나19 대응 방안', '도움말 센터', '예약 취소 옵션', '에어비앤비 이웃 민원 지원', '신뢰와 안전'];
    const supportList = support.map(element => `
        <li><a href="#">${element}</a></li>
    `);

    template = template.replace('{{__support__}}', supportList.join(''));

    footerLink.innerHTML = template;
}

render();