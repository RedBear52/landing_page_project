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
const navBar = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section')
console.log(sections)
console.log(navBar)


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// ------'ASSIGN STATE' HELPER FUNCTION------
document.addEventListener('scroll', function() {
   sections.forEach(section => {
    const position = section.getBoundingClientRect() 
        if (position.top <= 145 && position.bottom >= 150) {
            // apply active state on current section and navLink
            section.className='active-section'
            // styling here for now ... will need to move ALL styling to CSS 
            section.style.backgroundColor="maroon"
        } else {
            section.className='not-so-active-section'
            // styling here for now ... will need to move ALL styling to CSS 
            section.style.backgroundColor="inherit"
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
        // let navItemContent = document.innerHTML += `<a href="#${navItem.id}"><h3>${section.id}</h3></a>`
        const navMenuLink = document.createElement('li')
        navMenuLink.className = 'menu__link'
        navMenuLink.id = 'menu__link--' + section.id
        navBar.appendChild(navMenuLink).innerHTML += `<a href="#${section.id}"><h3>${section.id}</h3></a>`
       })
}
buildNavBar()




// Scroll to anchor ID using scrollTO event
// SEE CSS for scroll-behavior: I found (after much research and experimentation with the scroll() methods) that 
// the most elegant solution was one line of css ('scroll-behavior: smooth') added to the 'html' element.


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


