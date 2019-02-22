//jshint ignore: start

const wrapper = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger__menu');
const navigation = document.querySelector('.navigation');
const navigationLink = document.querySelectorAll('.navigation__link');
const container = document.querySelector('.container');
const monthHolder = document.querySelector('#daymonth');
const yearHolder = document.querySelector('#year');

var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

monthHolder.innerHTML = months[month];
yearHolder.innerHTML = year;

wrapper.addEventListener('click', function(){
    menu.classList.toggle('animate');
    navigation.classList.toggle('is-visible');
    container.classList.toggle('active');
});

navigationLink.forEach(element => {
    element.addEventListener('click', function(){
        menu.classList.toggle('animate');
        navigation.classList.toggle('is-visible');
        container.classList.toggle('active');
    });
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    offset: 40
});