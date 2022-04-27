// ----- MOBILE MENU -------------------------
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('#header nav .toggle')

// opening and closing the mobile menu
for (const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

// when the screen is larger than 1024px the mobile menu closes
window.onresize = function(){
  if (window.innerWidth > 1024 && nav.classList.contains('show')){
    nav.classList.remove('show')
  }
}

// when you click on the link closes the mobile menu
const linksMenu = document.querySelectorAll('.menu a')
for (const link of linksMenu) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// ----- SCROLL REVEAL -------------------------
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '25px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
    #home .text-home, #home .img-home,
    #discover .img-discover, #discover .text-discover,
    #news .dark-title, #news .view-posts, #news .main-post, #news .blog-post-single,
    #footer-one .about-us, #footer-one .sitemap, #footer-one .connect
`,
  { interval: 200 }
)


// Change page header when scrolling
const header = document.querySelector('header#header')
const navHeight = header.offsetHeight
changeHeaderWhenScroll()
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// ----- SCROLL PAGE -------------------------
const links = document.querySelectorAll('.menu a, .sitemap a')
for (const element of links){
  element.addEventListener('click', function(e){
    e.preventDefault()
    let href = element.getAttribute('href')
    if (href != ''){
      window.scroll({ 
        top: document.querySelector(href).offsetTop - navHeight,
        behavior: 'smooth' 
      });
    }
  })
}


// When scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})