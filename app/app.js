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
// const findActiveSection = sections.forEach(section => {
//     const position = section.getBoundingClientRect()

//     if (position.top <= 150 && position.bottom >= 150) {
//         // apply active state on current section and navLink
//         section.style.backgroundColor="pink"
//     } else {
//         section.style.backgroundColor="purple"
//     }
//     console.log(position)
// })

// document.addEventListener('scroll', findActiveSection)




document.addEventListener('scroll', function() {
   sections.forEach(section => {
    const position = section.getBoundingClientRect()
        
        if (position.top <= 150 && position.bottom >= 150) {
            // apply active state on current section and navLink
            section.style.backgroundColor="pink"
        } else {
            section.style.backgroundColor="purple"
        }
        console.log(position)
    })
})



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


