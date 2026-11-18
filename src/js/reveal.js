/* NextScale | Animações de entrada (IntersectionObserver) */
'use strict';
(() => {
/* animações de entrada */
const rv = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  rv.forEach((el, i) => { el.style.transitionDelay = (i % 3) * 80 + "ms"; io.observe(el); });
} else rv.forEach(el => el.classList.add("in"));
})();
