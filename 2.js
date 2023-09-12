const track2 = document.querySelector('.noticias__track');
const slides2 = Array.from(track2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;

const setSlidePosition2 = (slide2, index2) => {
    slide2.style.left = slideWidth2 * index2 + 'px';
};
slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
    track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';
    currentSlide2.classList.remove('slide-atual');
    targetSlide2.classList.add('slide-atual');
    track2.classList.add('transitioning');
    setTimeout(() => {
        track2.classList.remove('transitioning');
    }, 500);
};

let slideInterval2 = setInterval(moveToNextSlide2, 3000);

function moveToNextSlide2() {
    const currentSlide2 = track2.querySelector('.slide-atual');
    const currentIndex2 = slides2.findIndex(slide2 => slide2 === currentSlide2);
    const nextIndex2 = (currentIndex2 + 1) % slides2.length;
    const nextSlide2 = slides2[nextIndex2];

    moveToSlide2(track2, currentSlide2, nextSlide2);
}

track2.addEventListener('mouseover', () => {
    clearInterval(slideInterval2);
});

track2.addEventListener('mouseout', () => {
    slideInterval2 = setInterval(moveToNextSlide2, 4000);
});

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    track.classList.add('transitioning');
    setTimeout(() => {
    track.classList.remove('transitioning');
    }, 500);
    
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};


const hideShowArrows = ( prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.add('is-hidden');
        nextButton.classList.add('is-hidden');
    }
}

let slideInterval = setInterval(moveToNextSlide, 3000);

function moveToNextSlide() {
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];
    const nextDot = dots[nextIndex];

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
}

track.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

track.addEventListener('mouseout', () => {
    slideInterval = setInterval(moveToNextSlide, 4000);
});

prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener('click', () => {
    moveToNextSlide();
});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
