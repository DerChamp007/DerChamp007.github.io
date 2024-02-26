document.addEventListener('DOMContentLoaded', () => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

const slider1 = document.querySelector("#image-comparison1 > .slider");
const beforeImage1 = document.querySelector("#image-comparison1 > .before-image");
const sliderLine1 = document.querySelector("#image-comparison1 > .slider-line");
const sliderIcon1 = document.querySelector("#image-comparison1 > .slider-icon");

slider1.addEventListener("input", e =>{
    let sliderValue = e.target.value + "%";

    beforeImage1.style.width = sliderValue;
    sliderLine1.style.left = sliderValue;
    sliderIcon1.style.left = sliderValue;
});

const slider2 = document.querySelector("#image-comparison2 > .slider");
const beforeImage2 = document.querySelector("#image-comparison2 > .before-image");
const sliderLine2 = document.querySelector("#image-comparison2 > .slider-line");
const sliderIcon2 = document.querySelector("#image-comparison2 > .slider-icon");

slider2.addEventListener("input", e =>{
    let sliderValue = e.target.value + "%";

    beforeImage2.style.width = sliderValue;
    sliderLine2.style.left = sliderValue;
    sliderIcon2.style.left = sliderValue;
});

const slider3 = document.querySelector("#image-comparison3 > .slider");
const beforeImage3 = document.querySelector("#image-comparison3 > .before-image");
const sliderLine3 = document.querySelector("#image-comparison3 > .slider-line");
const sliderIcon3 = document.querySelector("#image-comparison3 > .slider-icon");

slider3.addEventListener("input", e =>{
    let sliderValue = e.target.value + "%";

    beforeImage3.style.width = sliderValue;
    sliderLine3.style.left = sliderValue;
    sliderIcon3.style.left = sliderValue;
});


let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[slideIndex].classList.add('active');
}
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));