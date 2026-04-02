// =============================
// 🌙 DARK MODE (with save)
// =============================
const darkBtn = document.getElementById("dark");

darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");

// Save preference
localStorage.setItem(
"theme",
document.body.classList.contains("dark") ? "dark" : "light"
);
});

// Load saved theme
window.addEventListener("load", () => {
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
document.body.classList.add("dark");
}
});


// =============================
// 🔝 SCROLL TO TOP BUTTON
// =============================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

topBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});


// =============================
// 🎯 SMOOTH SCROLL NAVBAR
// =============================
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function (e) {
e.preventDefault();

const targetId = this.getAttribute("href");

if (targetId !== "#") {
document.querySelector(targetId).scrollIntoView({
behavior: "smooth"
});
}
});
});


// =============================
// ✨ BUTTON RIPPLE EFFECT
// =============================
const buttons = document.querySelectorAll(".btn, .social-btn, .project-btn");

buttons.forEach(btn => {
btn.addEventListener("mousemove", (e) => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

btn.style.setProperty("--x", x + "px");
btn.style.setProperty("--y", y + "px");
});
});


// =============================
// 🌌 CURSOR GLOW EFFECT
// =============================
document.addEventListener("mousemove", (e) => {
document.body.style.setProperty("--x", e.clientX + "px");
document.body.style.setProperty("--y", e.clientY + "px");
});


// =============================
// ⌨️ REAL TYPING EFFECT
// =============================
const text = "UX Designer & Developer";
let i = 0;
const speed = 70;

const typingElement = document.querySelector(".typing");

function typeEffect() {
if (i < text.length) {
typingElement.innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect, speed);
}
}

if (typingElement) {
typingElement.innerHTML = "";
typeEffect();
}


// =============================
// 🎬 SCROLL REVEAL ANIMATION
// =============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
sections.forEach(sec => {
const trigger = window.scrollY + window.innerHeight - 100;
if (trigger > sec.offsetTop) {
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}
});
});


// =============================
// 🎉 HIRE BUTTON INTERACTION
// =============================
const hireBtn = document.querySelector(".btn");

if (hireBtn) {
hireBtn.addEventListener("click", () => {
alert("Thanks for your interest! Contact me via email 😊");
});
}


// =============================
// ⚡ AOS INIT (if included)
// =============================
if (typeof AOS !== "undefined") {
AOS.init({
duration: 1000,
once: true
});
}
