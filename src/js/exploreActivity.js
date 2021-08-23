const exploreActivity = document.querySelector('.explore-activity');

function render() {
    let template = `
        <h2 class="sub-heading">특별한 즐길 거리를 찾아보세요</h2>
        <div class="activity-items-container">
            {{__activity_type__}}
        </div>
    `;

    const activityItems = [['reco', '추천 컬렉션: 여행 본능을 깨우는 체험', '온라인 체험으로 집에서 랜선 여행을 즐기세요.'], ['online', '온라인 체험', '호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.'], ['nearby', '체험', '가까운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요.']];

    const activityList = [];

    for (let i = 0; i < activityItems.length; i++) {
        activityList.push(`
            <div class="activity-type">
                <img src="assets/img/activity/${activityItems[i][0]}-activity.jpg" alt="">
                <strong>${activityItems[i][1]}</strong>
                <span>${activityItems[i][2]}</span>
            </div>
        `);
    }

    template = template.replace('{{__activity_type__}}', activityList.join(''));

    exploreActivity.innerHTML = template;
}

render();