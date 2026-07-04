// =====================================
// NovaTech Studio
// script.js
// =====================================

// عناصر اصلی
const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");
const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const loader = document.querySelector(".loader");
const cursorGlow = document.querySelector(".cursor-glow");

// =========================
// Loader
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 800);

});

// =========================
// Sticky Header
// =========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// =========================
// Mobile Menu
// =========================

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});
// =========================
// Dark Mode
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// =========================
// Back To Top
// =========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// Reveal Animation
// =========================

const reveals = document.querySelectorAll("section");

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

            section.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// =========================
// FAQ
// =========================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("i");

        if (answer.style.display === "block") {

            answer.style.display = "none";

            icon.classList.replace("fa-minus", "fa-plus");

        } else {

            answer.style.display = "block";

            icon.classList.replace("fa-plus", "fa-minus");

        }

    });

});

// =========================
// Typing Effect
// =========================

const typingText = document.getElementById("typing-text");

const words = [

"وب سایت",

"فروشگاه اینترنتی",

"اپلیکیشن",

"رابط کاربری"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingText.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            charIndex = 0;

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


// =========================
// Counter
// =========================

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(update,20);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

runCounter();


// =========================
// Cursor Glow
// =========================

document.addEventListener("mousemove",(e)=>{
    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});
// =========================
// Particles Background
// =========================

particlesJS("particles-js",{

  particles:{

    number:{value:60},

    color:{value:"#2563eb"},

    shape:{type:"circle"},

    opacity:{value:0.5},

    size:{value:3},

    line_linked:{

      enable:true,

      distance:150,

      color:"#3b82f6",

      opacity:0.3,

      width:1

    },

    move:{

      enable:true,

      speed:2

    }

  },

  interactivity:{

    events:{

      onhover:{enable:true,mode:"grab"}

    }

  },

  retina_detect:true

});
