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
const navBarMenu = document.getElementById('navbar__list'); // empty unordered list
const navBarMenuSections = [...document.querySelectorAll('section')]; // creates an array and add items to it for each section in the document
let navBarMenuItems = navBarMenuSections.length;
const listSections = document.querySelectorAll('section'); // section elements
const listlinks = document.querySelectorAll('.navbar__menu a'); // links in the navbar
/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav

const dynamicNavBar = function(){ // function to dynamically add items to the nav bar list
    for (navBarMenuSection of navBarMenuSections) {

        navBarMenuSectionName = navBarMenuSection.getAttribute('data-nav');
        
        navBarMenuSectionLink = navBarMenuSection.getAttribute('id');
        
        navBarMenuListItem = document.createElement('li');

        navBarMenuListItem.innerHTML = `<a class='menu__link' href='#${navBarMenuSectionLink}'>${navBarMenuSectionName}</a>`;

        navBarMenu.appendChild(navBarMenuListItem);
    };
};


// Add class 'active' to section when near top of viewport

const sectionInViewport = function(view){ // determine if section is near top of viewport

    let sectionxy = view.getBoundingClientRect();

    return(sectionxy.top >= 0);
};

const addActiveClass = function(){ // function to add active class to viewed section
    for (navBarMenuSection of navBarMenuSections){
        if(sectionInViewport(navBarMenuSection)){
            if(!navBarMenuSection.classList.contains('your-active-class')){
                navBarMenuSection.classList.add('your-active-class');
            };
        } else {
            navBarMenuSection.classList.remove('your-active-class');
        };
    };
};


// Scroll smoothly to section on anchor click

const smoothScroll = function(){
document.querySelectorAll('.menu__link').forEach(anchor => { // selects all anchors with class='menu__link'
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
};
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

dynamicNavBar();

// Scroll to section on link click

smoothScroll();

// Set sections as active

document.addEventListener('scroll', addActiveClass);

/* End of Code :) */