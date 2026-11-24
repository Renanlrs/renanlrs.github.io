import{a as e,r as t}from"./marca-CmBGVO0B.js";var{vermelho:n,ouro:r,creme:i}=t.cores,a=`
#mp-abertura { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; background: #0d0203; transition: opacity 450ms ease; padding: 24px }
#mp-abertura.saindo { opacity: 0; pointer-events: none }
#mp-abertura .fundo { position: absolute; inset: 0; background: radial-gradient(58% 46% at 50% 42%, rgba(${e(n)},.5), transparent 70%), radial-gradient(36% 28% at 64% 60%, rgba(${e(r)},.16), transparent 70%) }
#mp-abertura .col { position: relative; display: flex; flex-direction: column; align-items: center }
#mp-abertura .marca { position: relative; width: clamp(236px, 68vw, 348px); aspect-ratio: 640 / 265; animation: mp-logo 1s cubic-bezier(.16,1,.3,1) both }
#mp-abertura .halo { position: absolute; inset: 6% -4%; border-radius: 50%; filter: blur(34px); background: radial-gradient(closest-side, rgba(${e(r)},.55), rgba(${e(n)},.5) 60%, transparent); animation: mp-halo 2s ease-in-out infinite }
#mp-abertura .mp-logo { width: 100%; filter: drop-shadow(0 18px 34px rgba(0,0,0,.55)) }
#mp-abertura .luz { position: absolute; inset: 0; overflow: hidden; -webkit-mask: url(${t.logoDisco}) center / contain no-repeat; mask: url(${t.logoDisco}) center / contain no-repeat }
#mp-abertura .luz::before { content: ""; position: absolute; top: -20%; bottom: -20%; left: 0; width: 34%; background: linear-gradient(100deg, transparent, rgba(255,255,255,.75) 50%, transparent); transform: translateX(-140%) skewX(-12deg); animation: mp-luz 2.2s .75s cubic-bezier(.4,0,.2,1) infinite }
#mp-abertura .desc { margin-top: 22px; display: flex; align-items: center; gap: 12px; font-family: Montserrat, system-ui, sans-serif; font-weight: 700; font-size: clamp(11px, 3.1vw, 13px); letter-spacing: .38em; text-transform: uppercase; color: ${r}; white-space: nowrap; animation: mp-desc .7s .6s cubic-bezier(.16,1,.3,1) both }
#mp-abertura .desc span { padding-left: .38em }
#mp-abertura .desc i { display: block; height: 1px; width: 36px; background: linear-gradient(90deg, transparent, ${r}); transform-origin: right; animation: mp-fio .6s .75s ease-out both }
#mp-abertura .desc i:last-child { background: linear-gradient(90deg, ${r}, transparent); transform-origin: left }
#mp-abertura .trilho { margin-top: 24px; height: 3px; width: 168px; overflow: hidden; border-radius: 9999px; background: rgba(255,255,255,.1); animation: mp-sub .5s 1s ease-out both }
#mp-abertura .barra { height: 100%; width: 45%; border-radius: 9999px; background: linear-gradient(90deg, ${n}, ${r}, ${i}); animation: mp-barra 1.3s .9s cubic-bezier(.65,0,.35,1) infinite }
@keyframes mp-logo { 0% { opacity: 0; transform: scale(.62) translateY(10px); filter: blur(8px) } 55% { opacity: 1; transform: scale(1.04); filter: blur(0) } 100% { transform: scale(1) } }
@keyframes mp-halo { 0%,100% { opacity: .5; transform: scale(.92) } 50% { opacity: .95; transform: scale(1.06) } }
@keyframes mp-luz { 0% { transform: translateX(-140%) skewX(-12deg) } 45%,100% { transform: translateX(420%) skewX(-12deg) } }
@keyframes mp-desc { from { opacity: 0; transform: translateY(10px); letter-spacing: .7em } to { opacity: 1; transform: none; letter-spacing: .38em } }
@keyframes mp-fio { from { transform: scaleX(0) } to { transform: scaleX(1) } }
@keyframes mp-sub { from { opacity: 0 } to { opacity: 1 } }
@keyframes mp-barra { from { transform: translateX(-110%) } to { transform: translateX(240%) } }
@media (prefers-reduced-motion: reduce) { #mp-abertura *, #mp-abertura *::before { animation: none !important } }
`,o=`<div class="fundo"></div><div class="col"><div class="marca"><div class="halo"></div><div class="mp-logo rapido"><img src="${t.logoDisco}" alt="${t.nome}"><div class="mp-orbita"><img src="${t.logoSetas}" alt=""></div></div><div class="luz"></div></div><div class="desc"><i></i><span>${t.descricao}</span><i></i></div><div class="trilho"><div class="barra"></div></div></div>`,s=`(function(){if(location.pathname!=="/")return;var s=document.createElement("style");s.textContent=${JSON.stringify(a)};document.head.appendChild(s);var d=document.createElement("div");d.id="mp-abertura";d.setAttribute("role","presentation");d.innerHTML=${JSON.stringify(o)};function sai(){d.classList.add("saindo");setTimeout(function(){d.remove()},450)}d.onclick=sai;setTimeout(sai,15000);document.body.appendChild(d)})();`;export{s as t};