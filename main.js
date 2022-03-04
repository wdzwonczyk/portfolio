"use strict"

//Navigation array
let navigation = [
    "About", 
    "Projects", 
    "Experience", 
    "My CV", 
    "Contact"
];

//My work experience array
let experience = [
    {
        company: "Bleau A/S",
        link: "https://bleau.dk/",
        startDate: "March 2021",
        startYear: 2021,
        finishDate: "August 2021",
        finishYear: 2021,
        position: "Student worker",
        logo: "img/bleau-logo.svg",
        duties: [
            "Platform redesigning",
            "Improving user experience",
            "Creating a platform design system",
            "Creating web components in TypeScript"
        ]
    },
    {
        company: "Bleau A/S",
        link: "https://bleau.dk/",
        startDate: "January 2021",
        startYear: 2021,
        finishDate: "March 2021",
        finishYear: 2021,
        position: "Intern",
        logo: "img/bleau-logo.svg",
        duties: [
            "Platform redesigning",
            "Improving user experience",
            "Creating a platform design system"
        ]
    },
    {
        company: "Salvatio Push",
        link: "https://salvatio.dk/",
        startDate: "April 2020",
        startYear: 2020,
        finishDate: "July 2020",
        finishYear: 2020,
        position: "Intern",
        logo: "img/salvatio-logo.png",
        duties: [
            "Creating the content for website, events and social media",
            "Improving website and its performance",
            "Improving SEO"
        ]
    }
];

const tl = new TimelineMax();
const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav__list");
const picOfMe = document.querySelector(".pic-me");
const mainHeading = document.querySelector("#main-heading");
const closeNavBtn = document.querySelector(".close-nav-btn");


//Append navigation items
function appendNav(){
    let htmlTemplate = "";

    for (const item of navigation) {
        htmlTemplate += `
        <li class="nav__list-item"><a href="#${item}">${item}</a></li>
        `
    }
    document.querySelector(".nav__list").innerHTML = htmlTemplate;
}

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav nav__list nav__list-item");

appendNav();

//Append contact section
function appendContact(){
    let htmlTemplate = /*html*/`
            <h3>Don't hestitate to contact me!</h3>
            <div class="contact-items">
                <a href="tel:+4591718714" class="contact-icon"><i class="fas fa-phone-alt"></i><span>+45 91 71 87 14</span></a>
                <a href="mailto: wdzwonek97@gmail.com" class="contact-icon"><i class="far fa-envelope"></i><span>wdzwonek97@gmail.com</span></a>
            </div>
            <div class="some-items">
                <a href="https://m.me/wojtek.dzwonczyk.7" target="_blank" class="some-icon"><i class="fab fa-facebook-messenger"></i></a>
                <a href="https://www.instagram.com/wojo.dz/" target="_blank" class="some-icon"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/wojciech-dzwo%C5%84czyk-772803197/" target="_blank" class="some-icon"><i class="fab fa-linkedin"></i></a>
            </div>
    `;
    document.querySelector(".contact").innerHTML = htmlTemplate;
}
appendContact();

function showNav(){
    document.querySelector(".nav").classList.remove('nav-close');
    document.querySelector(".nav").classList.add('nav-open');
    document.querySelector(".nav-mobile-container").style.display="none";
}

function hideNav(){
    document.querySelector(".nav").classList.remove('nav-open');
    document.querySelector(".nav").classList.add('nav-close');
    document.querySelector(".nav-mobile-container").style.display="flex";
}

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth < 774) {
	if (viewportWidth < 774) {
        hideNav();
		let navBtn = document.querySelector(".nav-mobile-btn");
        navBtn.addEventListener("click", showNav);

        let navLinks = document.getElementsByClassName("nav__list-item");
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].addEventListener("click", hideNav);
        }
	}
} else {
	console.log('Wide viewport');
    showNav();

    tl.fromTo(picOfMe, 1, {opacity: 0, x: "100%"}, {opacity: 1, x: "0%"})
    .fromTo(mainHeading, 1, {opacity: 0, x: "-100%"}, {opacity: 1, x: "0%"}, "-=1")
    .fromTo(nav, 0.5, {opacity: 0, x: "-50%"}, {opacity: 1, x: "0%"})
    .fromTo(logo, 0.5, {opacity: 0, x: "100%"}, {opacity: 1, x: "0%"}), "-=0.5";
    
}


window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth < 774) {
        hideNav();
		let navBtn = document.querySelector(".nav-mobile-btn");
        navBtn.addEventListener("click", showNav);

        let navLinks = document.getElementsByClassName(".link");
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].addEventListener("click", hideNav, false);
        }

        const width = document.querySelector('.projects-item').offsetWidth;
        console.log(width);
        document.querySelector('.projects').style.setProperty('grid-auto-rows', `${width}px` );
        
	} else {
		console.log('Wide viewport');
        showNav();

        tl.fromTo(picOfMe, 1, {opacity: 0, x: "100%"}, {opacity: 1, x: "0%"})
        .fromTo(mainHeading, 1, {opacity: 0, x: "-100%"}, {opacity: 1, x: "0%"}, "-=1")
        .fromTo(nav, 0.5, {opacity: 0, x: "-50%"}, {opacity: 1, x: "0%"})
        .fromTo(logo, 0.5, {opacity: 0, x: "100%"}, {opacity: 1, x: "0%"}), "-=0.5";
        
	}
}, false);

closeNavBtn.addEventListener("click", hideNav);


//Append experience section
function appendExperience(){
    let experienceTemplate = "";
    let verticalLine = `
        <div class="center-line"></div>
    `;
    console.log("experience");
    for (const item of experience) {
        experienceTemplate += `
            <div class="row">
                <img src="${item.logo}" class="icon" alt="${item.company} logo">
                <article>
                    <h4><a href="${item.link}" target="_blank">${item.company}</a></h4>
                    <div class="details">
                        <p class="position"><i class="far fa-user"></i>${item.position}</p>
                        <p class="date"><i class="far fa-clock"></i>${item.startDate} - ${item.finishDate}</p>
                        <ul>
                            ${appendExperienceDuties(item)}
                        </ul>
                    </div>
                </article>
            </div> 
        `;        
    }
    document.querySelector(".wrapper").innerHTML = verticalLine + experienceTemplate;
}

//Append duties at work
function appendExperienceDuties(company){
    let dutiesTemplate = "";
    let duties = [];
    for (const duty of company.duties) {
        console.log(duty);
        dutiesTemplate += `<li>${duty}</li>`;
        console.log(dutiesTemplate);
    }
    return dutiesTemplate;
}

appendExperience();

//Append My CV section
function appendCV(){
    let htmlTemplate = `
    <h2>Get my CV</h2>
    <a href="Wojciech Dzwonczyk - CV.pdf"><button class="download-btn"><i class="fab fa-facebook-messenger"></i></button></a>
    `;

    document.querySelector(".cv-page").innerHTML = htmlTemplate;
}

appendCV();

// Get all the elements to be parallaxed
const parallaxElements = document.querySelectorAll('.parallax');

// The parallax function
const parallax = elements => {
		if ('undefined' !== elements && elements.length > 0) {
			elements.forEach( element => {
				let y = window.innerHeight - element.getBoundingClientRect().top;
				if (y > 0) {
					element.style.transform = 'translate3d(-50%, -' + (0.15 * y) + 'px ,0)';
				}
			})
		}
	}

//If element is in viewport, set its position
parallax(parallaxElements)

//Call the function on scroll
window.onscroll = () => {
		parallax(parallaxElements)
}

//Function opens clicked project
function openProject(id){
    const project = document.getElementById(id);
    const projectId = document.getElementById(id).getAttribute("id");
    console.log("Parameter: "+id);
    console.log("Project: "+projectId);
    // console.log("Parameter: "+id);

    if(id == projectId){
        project.classList.add('open');
    }
}

//Close project section details
function hideProject(){
    const projectsModule = document.querySelectorAll(".project");
    for (const projectModule of projectsModule) {
        projectModule.classList.remove('open');
    }
    console.log("close project");
}

let projects = document.getElementsByClassName("projects-item");
//let project = document.getElementById("kunste-project");
//project.addEventListener("click", openProject(project));

for (const project of projects) {
    project.addEventListener("click", openProject(project));
}

