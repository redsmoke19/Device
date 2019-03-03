var mapLink = document.querySelector('.main-company-map');
var mapPopup = document.querySelector('.modal-map');
var closePopup = document.querySelector('.modal-close');
var overlay = document.querySelector('.overlay');

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
    overlay.classList.add('overlay-show');
});

closePopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('modal-show')) {
            mapPopup.classList.remove('modal-show');
            overlay.classList.remove('overlay-show');
        }
    }
});

overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
});