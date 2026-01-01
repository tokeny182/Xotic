/* script.js — Blacket Interactivity */

/* ------------------------------
   Fake Login + Register System
   (Front‑end only — no backend)
--------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-box form");
  const registerForm = document.querySelector(".register-box form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Logged in! (Fake login — GitHub Pages can't store accounts)");
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created! (Fake register — no data is saved)");
    });
  }
});

/* ------------------------------
   Search Bar (blooks.html)
--------------------------------*/

const searchInput = document.querySelector(".search-bar input");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const packs = document.querySelectorAll(".pack-section .pack");

    packs.forEach(pack => {
      const title = pack.querySelector("h3").textContent.toLowerCase();
      pack.style.display = title.includes(term) ? "block" : "none";
    });
  });
}

/* ------------------------------
   Instant Open Toggle (market)
--------------------------------*/

const toggle = document.querySelector(".toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    toggle.textContent =
      toggle.textContent.includes("Off")
        ? "Instant Open: On"
        : "Instant Open: Off";
  });
}

/* ------------------------------
   Pack Click (market)
--------------------------------*/

const packs = document.querySelectorAll(".pack");

packs.forEach(pack => {
  pack.addEventListener("click", () => {
    alert(`Opening ${pack.textContent}... (fake animation)`);
  });
});

/* ------------------------------
   Bazaar Listings Click
--------------------------------*/

const listings = document.querySelectorAll(".listing");

listings.forEach(listing => {
  listing.addEventListener("click", () => {
    const item = listing.querySelector(".item").textContent;
    alert(`You selected: ${item}`);
  });
});
