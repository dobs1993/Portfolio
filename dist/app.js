// Up Animation of Cards
const cards = document.querySelectorAll('.feature-box');

cards.forEach(function(card) {
    card.addEventListener('mouseover', function () {
        card.classList.add('up');
    card.addEventListener('animationend', function(){
        card.classList.remove('up')
        card.style.backgroundColor = "rgba(6, 124, 202, 0.7)"
        card.style.color = "white"
        card.style.border = "5px solid rgba(100, 255, 218, 0.3)"
    })
    }, { once: true })
})

// Rocket Animation

window.addEventListener('scroll', function(){
    let rocket = document.querySelector('.rocket');
    let introPosition = rocket.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 3;

    if (introPosition < screenPosition) {
        rocket.classList.add("moveRocket");
    }
})

// Header - Circle Color Changers

const circle1 = document.querySelector('.header__circle--1');
let circle2 = document.querySelector('.header__circle--2');
const circle3 = document.querySelector('.header__circle--3');
const header = document.querySelector('.header');

circle1.addEventListener('click', function(){
    header.style.background = '#cc00ffaf'
})

circle2.addEventListener('click', function(){
    header.style.background = 'rgb(0, 153, 117)'
})

circle3.addEventListener('click', function(){
    header.style.background = `url('../dist/images/header-gif.gif') no-repeat center center/cover`
})

header.addEventListener('click', function(){
    header.style.background = `url('../dist/images/header-gif.gif') no-repeat center center/cover`
},true)


// More Projects Section - Open Up

const moreProjects = document.querySelector('.more-projects')
const toggler = document.querySelector('.toggler')

moreProjects.addEventListener('click', function(){
    toggler.click()
})

// More Projects Section - Drop Down

const projects = document.querySelectorAll('.project')
const dropdown_lists = document.querySelectorAll('.drop-item')

projects.forEach(function (projects_current, index) {
    projects_current.addEventListener('click', function () {
        dropdown_lists[index].classList.toggle('active');
    });
});
