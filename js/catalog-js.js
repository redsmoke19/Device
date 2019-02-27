var shopLink = document.querySelector('.shop-link-js');
var shopCatalog = document.querySelector('.main-nav-catalog');

shopLink.addEventListener('mouseenter', function (evt) {
  evt.preventDefault();
  shopCatalog.classList.add('main-nav-catalog__show');
});

shopCatalog.addEventListener('mouseleave', function () {
  shopCatalog.classList.remove('main-nav-catalog__show');
});

shopLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  shopCatalog.classList.toggle('main-nav-catalog__show');
});
