const profile = document.querySelector('.profile');
const profileDropdown = document.querySelector('.profile-dropdown');

profile.addEventListener('click', () => {
    profileDropdown.classList.toggle('hidden');
})