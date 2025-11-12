const openBtn = document.getElementById("openBtn");
const frontCard = document.getElementById("frontCard");
const insideCard = document.getElementById("insideCard");
const bgm = document.getElementById("bgm");

const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentPage = 0;

openBtn.addEventListener("click", () => {
  frontCard.classList.add("fade-out");
  setTimeout(() => {
    frontCard.style.display = "none";
    insideCard.classList.remove("hidden");
    bgm.play().catch(() => {});
  }, 1000);
});

function updatePages() {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === currentPage);
  });
}
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) currentPage++;
  updatePages();
});
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) currentPage--;
  updatePages();
});
updatePages();

/* -------------------------------
   ✨ Falling Hearts & Stars Effect
--------------------------------*/
const scene = document.querySelector(".card-scene");

function createFallingElement() {
  const el = document.createElement("span");
  const isStar = Math.random() < 0.4; // 40% stars, 60% hearts
  el.textContent = isStar ? "★" : "❤";
  el.classList.add("falling");

  // Randomize color tones
  const pinks = ["#ffb6d9", "#ff94c2", "#ff80b3", "#ffcce0", "#ff99cc"];
  el.style.color = pinks[Math.floor(Math.random() * pinks.length)];

  // Random position, size, and duration
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = Math.random() * 20 + 10 + "px";
  el.style.animationDuration = Math.random() * 4 + 4 + "s";
  el.style.opacity = Math.random() * 0.8 + 0.2;

  scene.appendChild(el);

  // Remove after animation
  setTimeout(() => {
    el.remove();
  }, 8000);
}

// Create continuous rain
setInterval(createFallingElement, 300);

// Extra sparkle burst on open
openBtn.addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createFallingElement, i * 100);
  }
});
