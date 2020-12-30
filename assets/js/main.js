import { backgroundImages } from './images.js';

const imageContainer = document.querySelector('.image__container');
const title = document.querySelector('.title');
const imageCounter = document.querySelector('.image__counter');
const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const dotCounter = document.querySelector('.dot__counter');
let i = 0;

const dotCreate = () => {
    for (let j = 0; j < backgroundImages.length; j += 1) {
        dotCounter.insertAdjacentHTML("afterbegin",
            `<i class="fa fa-circle"></i>`);
    }
}
dotCreate();

const dots = Array.from(document.querySelectorAll('.fa-circle'));

const dotCount = () => {
    for (let j = 0; j < backgroundImages.length; j += 1) {
        dots[j].classList.remove('active__image');
    }
    dots[i].classList.add('active__image');
};

const dotClick = () => {
    for (let j = 0; j < backgroundImages.length; j += 1) {
    dots[j].addEventListener ('click', () => {
        i = j;
        showImage();
    })
}
}
dotClick();

const fade = () => {
    for (let j = 0; j < backgroundImages.length; j += 1) {
        imageContainer.classList.add('fade');
    }
}


const showImage = () => {
    
    imageContainer.style.backgroundImage = backgroundImages[i].img;
    fade();
    title.textContent = backgroundImages[i].title;
    imageCounter.textContent = `${i + 1}/${backgroundImages.length}`;
    dotCount();
}
showImage();


const showImageNext = () => {
    
    if (i < backgroundImages.length - 1) {
        i++;
    } else {
        i = 0;
    }
    showImage();
}


const backImage = () => {

    if (i == 0) {
        i = backgroundImages.length - 1;
    } else {
        i--;
    }
    showImage();
}

setInterval(showImageNext, 3000);

const paginationRight = () => {
    rightArrow.addEventListener('click', () => {
        showImageNext();
    })
}
paginationRight();

const paginationLeft = () => {
    leftArrow.addEventListener('click', () => {
        backImage();
    })
}
paginationLeft();