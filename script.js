// 🌙 Dark Mode Toggle
const darkBtn = document.getElementById("dark");

darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");

// Save user preference
if (document.body.classList.contains("dark")) {
localStorage.setItem("theme", "dark");
} else {
localStorage.setItem("theme", "light");
}
});

// Load saved theme
window.addEventListener("load", () => {
const theme = localStorage.getItem("theme");
if (theme === "dark") {
document.body.classList.add("dark");
}
});


// 🔝 Scroll to Top Button
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


// 🎯 Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();

const targetId = this.getAttribute("href");

if (targetId !== "#") {
document.querySelector(targetId).scrollIntoView({
behavior: "smooth"
});
}
});
});


// ✨ Button Ripple Effect
const buttons = document.querySelectorAll(".btn, .social-btn");

buttons.forEach(btn => {
btn.addEventListener("mousemove", (e) => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

btn.style.setProperty("--x", x + "px");
btn.style.setProperty("--y", y + "px");
});
});


// 🎬 Initialize AOS Animation
AOS.init({
duration: 1000,
once: true
});


// 💬 Hire Me Button Alert (you can replace with real form later)
const hireBtn = document.querySelector(".btn");

if (hireBtn) {
hireBtn.addEventListener("click", () => {
alert("Thanks for your interest! Contact me via email.");
});
}
