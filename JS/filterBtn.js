const filterBtn = document.querySelector('.filter-btn');
const filterContainer = document.querySelector('.filter-container');
const closeButton = document.querySelector('.close-btn');
const dropShadow = document.querySelector('.drop')

filterBtn.addEventListener('click', () => {
    filterContainer.classList.add('open-transition');
    dropShadow.classList.add('drop-shadow');
});

const closeAside = () => {
    filterContainer.classList.remove('open-transition');
    dropShadow.classList.remove('drop-shadow');
};

dropShadow.addEventListener('click', () => {
    closeAside();
});

closeButton.addEventListener('click', () => {
    closeAside();
});
