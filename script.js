const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let slideInterval;

/* Show Slide */
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
}

/* Next Slide */
function nextSlide() {
    let index = (currentSlide + 1) % slides.length;
    showSlide(index);
}

/* Prev Slide */
function prevSlide() {
    let index = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(index);
}

/* Auto Slide */
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

/* Event Listeners */
nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    });
});

/* Start */
startAutoSlide();




const card = document.getElementById("aboutCard");

// Disable 3D on touch devices
if (window.matchMedia("(pointer: fine)").matches) {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });

}






