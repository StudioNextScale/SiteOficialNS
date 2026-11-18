/* NextScale | Menu mobile */
'use strict';
(() => {
/* menu mobile */
const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
const setMenu = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); };
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
})();
