/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sections = document.querySelectorAll('section');
let data ='';
for(let i=0;i<sections.length;i++){
data+=`<li><a class ="menu__link" href="#section${i+1}">Section${i+1}</a></li>`
}
document.querySelector("#navbar__list").innerHTML=data ;

const menuLinks = document.querySelectorAll('.menu__link');
let links = [...menuLinks];

links.map(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        console.log(targetId);
        const targetElement = document.querySelector(targetId);
        console.log(targetElement);
        console.log(link);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('scroll', makeActive);


function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= window.innerHeight / 2 && box.bottom >= window.innerHeight / 2) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }

}

const btns = document.querySelectorAll('button');
let arrBtn = [...btns];
arrBtn.map(btn => {
    btn.onclick = function ReadMore() {
        if(btn.textContent=="Read More"){
            btn.previousElementSibling.classList.remove("readMore");
            btn.textContent="Read Less";
           
        }
        else
      {
        btn.previousElementSibling.classList.add("readMore");
            btn.textContent="Read More";
           
      }
    }
});

 
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


