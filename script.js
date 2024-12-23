const hamburger = document.getElementById('ham')
const navs = document.getElementById('navs')

hamburger.addEventListener('click',()=>{
    navs.classList.toggle('open')
    hamburger.classList.toggle('active')
})