/* NextScale | Validação e envio do formulário */
'use strict';
(() => {
/* formulário */
const form = document.getElementById("form"), statusEl = document.getElementById("status");
const rules = {
  nome: v => v.trim().length >= 2 || "Informe seu nome.",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || "Informe um e-mail válido.",
  telefone: v => v.replace(/\D/g, "").length >= 10 || "Informe um telefone com DDD.",
  servico: v => !!v || "Escolha um tipo de serviço.",
  mensagem: v => v.trim().length >= 10 || "Descreva seu projeto em pelo menos 10 caracteres."
};
function check(el) {
  const r = rules[el.name](el.value), box = el.closest(".f");
  box.classList.toggle("bad", r !== true); box.classList.toggle("ok", r === true);
  box.querySelector(".err").textContent = r === true ? "" : r;
  return r === true;
}
form.querySelectorAll("input,select,textarea").forEach(el => el.addEventListener("blur", () => check(el)));
form.querySelectorAll("input,select,textarea").forEach(el => el.addEventListener("input", () => el.closest(".f").classList.contains("bad") && check(el)));
form.addEventListener("submit", async e => {
  e.preventDefault(); statusEl.className = "";
  const els = [...form.querySelectorAll("input,select,textarea")];
  const bad = els.filter(el => !check(el));
  if (bad.length) { bad[0].focus(); statusEl.textContent = ""; return; }
  const d = Object.fromEntries(new FormData(form));
  const txt = `Olá! Sou ${d.nome}.\nServiço: ${d.servico}\nE-mail: ${d.email}\nTelefone: ${d.telefone}\nProjeto: ${d.mensagem}`;
  if (!CONFIG.formEndpoint) {
    statusEl.className = "";
    statusEl.innerHTML = 'O envio automático ainda não está configurado. Para não perder sua mensagem, continue pelo WhatsApp com os dados já preenchidos.<br><a class="btn btn-p btn-s" target="_blank" rel="noopener" href="' + wa(txt) + '">Continuar no WhatsApp</a>';
    return;
  }
  const btn = form.querySelector("button[type=submit]"); btn.disabled = true; statusEl.textContent = "Enviando...";
  try {
    const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(d) });
    if (!res.ok) throw new Error(res.status);
    form.reset(); form.querySelectorAll(".f").forEach(f => f.classList.remove("ok", "bad"));
    statusEl.textContent = "Mensagem enviada. Entraremos em contato em breve.";
  } catch (err) {
    statusEl.className = "error";
    statusEl.innerHTML = 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.<br><a class="btn btn-p btn-s" target="_blank" rel="noopener" href="' + wa(txt) + '">Abrir WhatsApp</a>';
  } finally { btn.disabled = false; }
});
})();
