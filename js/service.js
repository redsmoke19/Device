var services = document.querySelectorAll('.service-info');
var servicesNav = document.querySelector('.service-list');
var servicesTab = document.querySelectorAll('.service-item');

servicesNav.addEventListener('click', function(evt) {
    evt.preventDefault();
    var r = evt.target;
    if (r.classList.contains('service-link')) {
        for (var i = 0; i < services.length; i++) {
            services[i].classList.remove('service-info__current');
            servicesTab[i].classList.remove('service-link__current');
        }
        var t = r.parentElement;
        var s = '.service-information-' + r.id.split('-')[0];
        var serviceInfo = document.querySelector(s);
        serviceInfo.classList.add('service-info__current');
        t.classList.add('service-link__current');
    }
});


