
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const optionsElement = $$('.option__item');
const extendsElement = $$('.extention__list');
const progressBars = $$('.skill__progress-bar');
const skillSections = $('.skill__section');
const tabs = $$('.extention__sayings-tab');
const taskbar = $('.option__wrapper');
const sliders = $$('.extention__sayings-slider');
const prevBtn = $('.extention__sayings-slider-prev');
const nextBtn = $('.extention__sayings-slider-next')

Array.from(optionsElement).forEach((option, index) => {
    const extendElement = extendsElement[index];

    option.onclick = function() {
        clickTop();

        $('.option__item.active').classList.remove('active')
        $('.extention__list.active').classList.remove('active')
        
        console.log(this, extendElement)
        this.classList.add('active');
        extendElement.classList.add('active')
    }
})

function clickTop() {
    document.documentElement.scrollTop = 294;
}

// Skill Progress Bar
function showProgress() {
    Array.from(progressBars).forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
        progressBar.style.transition = 'all 0.4s linear';
    })
}

function hideProgress() {
    Array.from(progressBars).forEach(progressBar => {
        progressBar.style.opacity = 0;
        progressBar.style.width = 0;
        progressBar.style.transition = 'all 0.2s linear';
    })
}

window.addEventListener('scroll', () => {
    const progressBarPosition = skillSections.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(progressBarPosition < screenPosition) {
        showProgress();
    } else {
        hideProgress();
    }
})

window.onscroll = function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop > 294) {
        taskbar.style.position = 'fixed';
        taskbar.style.top = 0;
        taskbar.style.width = '164px';
        taskbar.style.marginTop = '40px';
        taskbar.style.transition = 'all 0.3s linear';
    } else {
        taskbar.style.position = 'static';
        taskbar.style.marginTop = '30px';
        taskbar.style.transition = "all 0.2s linear";
    }
}

currIndex = 0;
Array.from(tabs).forEach((tab, index) => {
    const slider = sliders[index]

    tab.onclick = function() {
        currIndex = index;
        $('.extention__sayings-tab.active').classList.remove('active');
        $('.extention__sayings-slider.active').classList.remove('active');
    
        this.classList.add('active');
        slider.classList.add('active');
    }
})

prevBtn.addEventListener('click', () => {
    tabs[currIndex].classList.remove('active');
    sliders[currIndex].classList.remove('active');

    if(currIndex > 0) {
        currIndex--;
    }
    else {
        currIndex = sliders.length-1;
    }

    tabs[currIndex].classList.add('active');
    sliders[currIndex].classList.add('active');
})

nextBtn.addEventListener('click', () => {
    tabs[currIndex].classList.remove('active');
    sliders[currIndex].classList.remove('active');

    if(currIndex < sliders.length-1) {
        currIndex++;
    } else {
        currIndex = 0;
    }

    tabs[currIndex].classList.add('active');
    sliders[currIndex].classList.add('active');  
})

function playSlider() {
    tabs[currIndex].classList.remove('active');
    sliders[currIndex].classList.remove('active');

    if(currIndex < sliders.length-1) {
        currIndex++;
    } else {
        currIndex = 0;
    }

    tabs[currIndex].classList.add('active');
    sliders[currIndex].classList.add('active'); 
}

setInterval(playSlider, 5000)
