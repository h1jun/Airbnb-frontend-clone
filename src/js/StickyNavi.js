const covidInfo = document.querySelector('.covid-info');
const covidInfoHeight = covidInfo.clientHeight;
const headContainer = document.querySelector('.header-container');
const homeSearch = document.querySelector('.home-search');
const logoImg = document.querySelector('.header-logo img');
const headerCenter = document.querySelector('.header-center');
const headerCenterFix = document.querySelector('.header-center-fix');

function onScroll() {
    const scrollPosition = pageYOffset;
    if (covidInfoHeight <= scrollPosition) {
        headContainer.classList.remove('row')
        homeSearch.classList.add('visibility-hidden');
        headerCenter.classList.add('hidden-none');
        headerCenterFix.classList.remove('fix-hidden');
        logoImg.src = 'assets/img/logo-color.png'
        headContainer.classList.add('fix');

    } else {
        headContainer.classList.remove('fix');
        logoImg.src = 'assets/img/logo.png'
        headerCenter.classList.remove('hidden-none');
        headerCenterFix.classList.add('fix-hidden');
        homeSearch.classList.remove('visibility-hidden');
        headContainer.classList.add('row');
    }
}

document.addEventListener('scroll', onScroll, { passive: true });
