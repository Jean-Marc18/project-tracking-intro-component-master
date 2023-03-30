var toggle = document.querySelector('.responvIcon');
var ham = document.querySelector('.ham');
var clos = document.querySelector('.close')
var items = document.querySelector('.itemsContainer')

toggle.addEventListener('click', () => {
    ham.classList.toggle('active');
    clos.classList.toggle('active');
    items.classList.toggle('active')
})