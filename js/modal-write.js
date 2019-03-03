var writeLink =  document.querySelector('.write-us-js');
var writePopup = document.querySelector('.modal-write');
var writeClose = document.querySelector('.modal-write .modal-close');
var writeForm = document.querySelector('.modal-write-form');
var writeName = document.querySelector('[name=name]');
var writeEmail = document.querySelector('[name=email]');
var writeTextarea = document.querySelector('[name=text');
var overlayForm = document.querySelector('.overlay');

writeLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    writePopup.classList.remove('js-modal-error');
    writePopup.classList.add('modal-show');
    writeName.focus();
    overlayForm.classList.add('overlay-show');
});

writeClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    writePopup.classList.remove('modal-show');
    overlayForm.classList.remove('overlay-show');
    writePopup.classList.remove('js-modal-error');
});

overlayForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    writePopup.classList.remove('modal-show');
    writePopup.classList.remove('js-modal-error');
    overlayForm.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (writePopup.classList.contains('modal-show')) {
            writePopup.classList.remove('modal-show');
            writePopup.classList.remove('js-modal-error');
            overlayForm.classList.remove('overlay-show');
        }
    }
});

writeForm.addEventListener('submit', function (evt) {
    if (!writeName.value || !writeEmail.value || !writeTextarea.value) {
        evt.preventDefault();
        writePopup.classList.remove('js-modal-error');
        writePopup.offsetWidth = writePopup.offsetWidth;
        writePopup.classList.add('js-modal-error');
    }
});