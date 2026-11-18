/* NextScale | Links de contato (WhatsApp, Instagram, e-mail) */
const wa = t => "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(t || CONFIG.waMessage);
document.querySelectorAll("[data-wa]").forEach(a => a.href = wa());
document.querySelectorAll("[data-ig]").forEach(a => a.href = "https://instagram.com/" + CONFIG.instagram);
document.querySelectorAll("[data-mail]").forEach(a => a.href = "mailto:" + CONFIG.email);
document.querySelectorAll("[data-t]").forEach(el => {
  const k = el.dataset.t;
  el.textContent = k === "mail" ? CONFIG.email : k === "ig" ? "@" + CONFIG.instagram : "Conversar agora";
});
