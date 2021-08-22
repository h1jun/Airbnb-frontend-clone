const profile = document.querySelector('.profile');
const profileDropdown = document.querySelector('.profile-dropdown');

function render() {
    let template = `
        <ul>
            {{__profile_dropdown__}}
        </ul>
    `;

    const profileMenu = ['회원가입','로그인', '숙소 호스팅 되기', '체험 호스팅 되기', '도움말']

    const menuItem = profileMenu.map(element => `
        <li class="dropdown-item">
            <a href="" class="dropdown-link">${element}</a>
        </li>
    `);
  
    template = template.replace('{{__profile_dropdown__}}', menuItem.join(''))
    profileDropdown.innerHTML = template;
}

profile.addEventListener('click', (event) => {
    event.stopPropagation();
    profileDropdown.classList.toggle('hidden');
})

document.body.addEventListener("click", () => {
    profileDropdown.classList.add("hidden");
});

render();