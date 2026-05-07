/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('scroll', function () {

    const nav = document.getElementById('mainNav');

    if(window.scrollY > 50){
        nav.style.backgroundColor = '#000';
    } else {
        nav.style.backgroundColor = 'rgba(0,0,0,0.8)';
    }

});