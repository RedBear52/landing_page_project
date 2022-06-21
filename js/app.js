// -----Global Variables----- //
const navBar = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section')
const fullVisibleNavBar = document.querySelector('.page__header')

/*---FUNCTIONS---*/ 
// -----Hide NavBar on Scroll Down----- //
function hideNavBar() {
    let prevScrollPosistion = window.scrollY

window.addEventListener('scroll', () => {
    if (prevScrollPosistion < window.scrollY) {
        fullVisibleNavBar.classList.add('invisible-navbar')
        } else {
            fullVisibleNavBar.classList.remove('invisible-navbar')
        }
        prevScrollPosistion = window.scrollY
    })
}

//------'Asign Active/Inactive State to Relevant Elements ------//
function assignState() {
    document.addEventListener('scroll', function() {
        sections.forEach(section => {
         const activeLink = navBar.querySelector(`[data-nav=${section.id}]`)
         const position = section.getBoundingClientRect() 
             if (position.top <= 185
                 && position.bottom >= 185) {
                 section.className = 'active'
                 activeLink.classList = 'active'
             } else {
                 section.className = 'not-so-active'
                 activeLink.classList = 'menu__link'
             } 
         }) 
     }) 
}

function arrowHandler() {
    document.addEventListener('scroll', function() {
        const setArrowState = document.getElementById('arrow-icon')
        const position = setArrowState.getBoundingClientRect()
        if (position.top >= 185) {
            setArrowState.className = 'active'
        } else {
            setArrowState.className = 'not-so-active'
        }
        console.log(position)
    })
}

//----- Dynamically Create NavigationBar/Menu -----//
function buildNavBar()  {
    sections.forEach(section => {
        const navMenuLink = document.createElement('li')
        navMenuLink.className = 'menu__link'
        navMenuLink.id = 'menu__link--' + section.id
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

//----- Function Invocations -----//
hideNavBar()
assignState()
arrowHandler()
buildNavBar()
