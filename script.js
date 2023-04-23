window.onscroll = function(ev) {
    const line = document.getElementById('stiky-line');
    const lineA = document.getElementById('lineA');
    // let css_of_before = window.getComputedStyle(line, '::before');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        line.style.setProperty('--beforeDisplay', 'block');
        lineA.style.cursor = 'pointer';
        line.style.cursor = 'pointer';
        line.classList.add('lineAnimation');
        line.addEventListener('mouseover', () => line.classList.add('lineAnimationHover') )
        line.addEventListener('mouseout', () => line.classList.remove('lineAnimationHover') )

    } else {
        line.style.setProperty('--beforeDisplay', 'none')
        lineA.style.cursor = 'default';
        line.classList.remove('lineAnimation');
        lineA.addEventListener('mouseover', () => lineA.classList.remove('lineAnimationHover') )
    }
};

//Set nav-bar width to users inner width

const navBar = document.querySelector('.nav-bar');
const checkbox = document.querySelector('input[type=checkbox]');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    navBar.style.width = window.innerWidth + 'px';
  } else {
    navBar.style.width = 0;
  }
});



// Navigation animation

const welcomeSection = document.getElementById('homePage');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const servicesSection = document.getElementById('services');
const pageNavList = document.querySelectorAll(".page-navigation__item");


function updateSection(section) {
  const sectionTop = section.offsetTop;
  const sectionHeight = sectionTop + window.innerHeight;

  if(window.pageYOffset >= sectionTop && window.pageYOffset <= sectionHeight) {    
    for(let i=0; i<pageNavList.length; i++) {
      if(section.attributes[1].nodeValue == pageNavList[i].attributes[1].nodeValue) {
        pageNavList[i].classList.add('active');
      } else {
        pageNavList[i].classList.remove('active');
      }
    }
  }
}

window.addEventListener('scroll',() => updateSection(welcomeSection));
window.addEventListener('scroll',() => updateSection(aboutSection));
window.addEventListener('scroll',() => updateSection(portfolioSection));
window.addEventListener('scroll',() => updateSection(servicesSection));




