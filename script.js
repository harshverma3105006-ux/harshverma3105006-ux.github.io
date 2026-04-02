// =====================
// 🌙 DARK MODE (SAVE)
// =====================
const darkBtn = document.getElementById("dark");

if (darkBtn) {
darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark") ? "dark" : "light"
);
});
}

// Load saved theme
window.addEventListener("load", () => {
if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark");
}
});


// =====================
// 🔽 SKILL ACCORDION
// =====================
const skillBtns = document.querySelectorAll(".skill-btn");

skillBtns.forEach(btn => {
btn.addEventListener("click", () => {
const content = btn.nextElementSibling;

// Close others
document.querySelectorAll(".skill-content").forEach(c => {
if (c !== content) c.style.display = "none";
});

// Toggle current
content.style.display =
content.style.display === "block" ? "none" : "block";
});
});


// =====================
// ⌨️ TYPING EFFECT
// =====================
const text = "UX Designer & Developer";
let i = 0;
const speed = 80;
const typing = document.querySelector(".typing");

function typeEffect() {
if (typing && i < text.length) {
typing.innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect, speed);
}
}

if (typing) {
typing.innerHTML = "";
typeEffect();
}


// =====================
// 🔝 SCROLL TO TOP
// =====================
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.display = "none";

window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

topBtn.onclick = () => {
window.scrollTo({ top: 0, behavior: "smooth" });
};


// =====================
// 🎯 SMOOTH SCROLL NAV
// =====================
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function (e) {
e.preventDefault();

const id = this.getAttribute("href");

if (id !== "#") {
document.querySelector(id).scrollIntoView({
behavior: "smooth"
});
}
});
});


// =====================
// ✨ BUTTON HOVER EFFECT
// =====================
document.querySelectorAll(".project-btn, .btn").forEach(btn => {
btn.addEventListener("mouseover", () => {
btn.style.transform = "scale(1.1)";
});
btn.addEventListener("mouseout", () => {
btn.style.transform = "scale(1)";
});
});


// =====================
// 🌌 CURSOR GLOW
// =====================
document.addEventListener("mousemove", (e) => {
document.body.style.background =
`radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #1abc9c22, #0f172a)`;
});


// =====================
// 🎉 HIRE BUTTON ALERT
// =====================
const hireBtn = document.querySelector(".btn");

if (hireBtn) {
hireBtn.addEventListener("click", () => {
alert("Thanks! Contact me via Email 😊");
});
}
