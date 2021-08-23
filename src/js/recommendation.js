const recommendation = document.querySelector('.recommend-type');

function render() {
    let template = `
        <h2 class="sub-heading">어디에서나, 여행은 살아보는 거야!</h2>
        
        <div class="recommend-type-items">
            {{__recommend_items__}}
        </div>
    `;

    const typeItems = [['nature', '자연생활을 만끽할 수 있는 숙소'], ['special', '독특한 공간'], ['whole-rent', '집 전체'], ['pet-friendly', '반려동물 동반 가능']];

    const typeList = [];
    for (let i = 0; i < typeItems.length; i++) {
        typeList.push(`
            <div class="type-box">
                <img src="assets/img/type/${typeItems[i][0]}-type.jpg">
                <strong>${typeItems[i][1]}</strong>
            </div>
        `);
    }

    template = template.replace('{{__recommend_items__}}', typeList.join(''));

    recommendation.innerHTML = template;
}

render();