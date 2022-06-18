
/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section')

/**
 * End Global Variabless
 * Start Helper Functions
 * 
*/

// ----Hide Scroll Bar ---- //

    
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// let prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   let currentScrollPos = window.scrollY;
// console.log(currentScrollPos)

//   if (prevScrollpos > currentScrollPos) {
//     let visibleBar = document.getElementsByClassName('.page__header')
//     visibleBar.className = 'active'
//   } else if (prevScrollpos > currentScrollPos) { 
//     visibleBar.className = 'not-so-active'

//   }
//   prevScrollpos = currentScrollPos;
// }  
// console.log(prevScrollpos)

// ------'ASSIGN STATE' HELPER FUNCTION------
document.addEventListener('scroll', function() {
   sections.forEach(section => {
    let activeLink = navBar.querySelector(`[data-nav=${section.id}]`)
    const position = section.getBoundingClientRect() 
        if (position.top <= 145 && position.bottom >= 150) {
            section.className = 'active'
            activeLink.classList = 'active'
        } else {
            section.className='not-so-active'
            activeLink.classList = 'menu__link'
        } 
    })
})  

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar()  {
    sections.forEach(section => {
        const navMenuLink = document.createElement('li')
        navMenuLink.className = 'menu__link'
        navMenuLink.id = 'menu__link--' + section.id
        // navMenuLink.setAttribute('data-nav', section.id)
        navBar.appendChild(navMenuLink).innerHTML += 
        ` 
        <a href="#${section.id}">
            <button data-nav="${section.id}">
                <h3>${section.id.toUpperCase()}</h3>
            </button>
        </a>
        `
       })
}
buildNavBar()



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


