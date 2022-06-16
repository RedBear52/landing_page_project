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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Iterate over 'sections' NodeLIst and return section positions
const findActiveSection = sections.forEach(section => {
    const position = section.getBoundingClientRect()
    if (position.top && position.left <= )
})
// for (let i =0; i < sections.length; i++) {
//     sections[i].addEventListener('mouseenter', function() {
//         sections[i].style.backgroundColor="pink"
//     })
// }



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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


