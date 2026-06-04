function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}
// script.js
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'flex'; // Show the dropdown
}
function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'none'; // Hide the dropdown
}
// Typewriter Effect
const texts = [
"AI Developer",
"Full Stack Developer",
"Machine Learning Engineer",
"Generative AI Enthusiast",
"FastAPI Developer",
"React Developer"
];

let index = 0;
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.querySelector(".dynamic-text").innerHTML += text.charAt(i);
        setTimeout(() => {
            typeWriter(text, i + 1, fnCallback);
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 400);
    }
}
function startTextAnimation(i) {
    if (typeof texts[i] == 'undefined') {
        setTimeout(() => {
            startTextAnimation(0);
        }, 2000);
    } else {
        typeWriter(texts[i], 0, () => {
            document.querySelector(".dynamic-text").innerHTML = '';
            startTextAnimation(i + 1);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    startTextAnimation(0);
});
// Hamburger menu toggle
const hamburgerBtn = document.querySelector('.hamburg');
const cancelBtn = document.querySelector('.cancel');

if(hamburgerBtn){
    hamburgerBtn.addEventListener('click', hamburg);
}

if(cancelBtn){
    cancelBtn.addEventListener('click', cancel);
}
function hamburg() {
    document.querySelector('.dropdown').classList.toggle('show');
}
function cancel() {
    document.querySelector('.dropdown').classList.remove('show');
}
// Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        const targetId = link.getAttribute('href');

        const targetElement =
        document.querySelector(targetId);

        if(targetElement){

            e.preventDefault();

            targetElement.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});
// Scroll-to-top button functionality
const scrollButton = document.querySelector('.back-to-top');

if(scrollButton){

    window.addEventListener('scroll', () => {

        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ){
            scrollButton.style.display = 'inline-flex';
        }else{
            scrollButton.style.display = 'none';
        }

    });

    scrollButton.addEventListener('click', (e) => {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}
// Form submission handling
const contactForm = document.querySelector('.contact form');

if(contactForm){

    contactForm.addEventListener('submit', function() {

        setTimeout(() => {

            alert("Thank you! Your message has been sent successfully.");

            contactForm.reset();

        }, 1000);

    });

}
// Get all navigation links
const navLinks = document.querySelectorAll('.links a');
// Function to add the 'active' class based on the section in view
function activateNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}
function openModal() {
    document.getElementById('cvModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('cvModal').style.display = 'none';
}
// Add scroll event listener
window.addEventListener('scroll', activateNavLink);

function openCertModal() {
    document.getElementById("certModal").style.display = "block";
}

function closeCertModal() {
    document.getElementById("certModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("certModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
}