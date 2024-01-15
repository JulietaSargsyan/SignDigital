//Set nav-bar width to users inner width

const navBar = document.querySelector('.nav-bar');
const checkbox = document.querySelector('input[type=checkbox]');
// const logo = document.querySelector('#logo');
// const logoImg = logo.firstElementChild;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    navBar.style.width = window.innerWidth + 'px';
    // logoImg.src = "./img/whiteLogo.png";
  } else {
    // logoImg.src = "./img/blacklogo.svg";
  }
});

const starImage = document.createElement("img");
starImage.src = "./img/whiteStar.png";
console.log(navBar.children[0].children[0]);

switch (true) {
  case window.location.href.includes('about.html'):
    navBar.children[0].children[0].appendChild(starImage);
    break;
  case window.location.href.includes('portfolio.html'):
    navBar.children[1].children[0].appendChild(starImage);
    break;
  case window.location.href.includes('services.html'):
    navBar.children[2].children[0].appendChild(starImage);
    break;
  case window.location.href.includes('contact.html'):
    navBar.children[3].children[0].appendChild(starImage);
    break;
  default:
    break;
}



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





// Cursor Animation 
const circle = document.querySelector('.cursor__circle');
const dot = document.querySelector('.cursor__dot');

window.addEventListener('mousemove', (e) => {
  circle.style.transform = `translate(${e.clientX-20}px, ${e.clientY-20}px)`;
  dot.style.transform = `translate(${e.clientX-4}px, ${e.clientY-4}px)`;
});


// Change logo color

