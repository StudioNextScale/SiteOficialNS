/* NextScale | Cards do portfólio */
'use strict';
(() => {
/* portfólio */
const grid = document.getElementById("portfolio");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shot = '<div class="shot" aria-hidden="true"><i></i><i></i><i></i><i></i><div>Imagem do projeto</div></div>';
const cats = ["Sistema", "Site", "Tráfego pago"];
if (PROJECTS.length) {
  grid.innerHTML = PROJECTS.map(p => `<article class="card rv">${p.imagem ? `<img src="${esc(p.imagem)}" alt="${esc(p.titulo)}" loading="lazy" style="border-radius:14px;margin-bottom:20px;aspect-ratio:16/10;object-fit:cover;width:100%">` : shot}<span class="cat">${esc(p.categoria)}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.descricao)}</p><a class="btn btn-g btn-s" href="${esc(p.url)}" target="_blank" rel="noopener">Ver projeto</a></article>`).join("");
} else {
  grid.innerHTML = cats.map(c => `<article class="card rv">${shot}<span class="cat">${c}</span><h3>Seu projeto pode estar aqui</h3><p>Espaço reservado para um projeto real de ${c.toLowerCase()} da NextScale.</p><a class="btn btn-g btn-s" href="#contato">Quero começar o meu</a></article>`).join("");
}
})();
