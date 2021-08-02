const profile = document.querySelector('.profile');
const profileDropdown = document.querySelector('.profile-dropdown');

profile.addEventListener('click', (event) => {
    event.stopPropagation();
    profileDropdown.classList.toggle('hidden');
})

document.body.addEventListener("click", () => {
    profileDropdown.classList.remove("hidden");
});