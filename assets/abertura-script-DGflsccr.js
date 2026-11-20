var e=`(function(){if(location.pathname!=="/")return;var s=document.createElement("style");s.textContent=${JSON.stringify(`
#mp-abertura { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; background: #06142b; transition: opacity 450ms ease; padding: 24px }
#mp-abertura.saindo { opacity: 0; pointer-events: none }
#mp-abertura .fundo { position: absolute; inset: 0; background: radial-gradient(60% 50% at 50% 42%, rgba(7,82,155,.55), transparent 70%), radial-gradient(40% 35% at 62% 58%, rgba(233,43,130,.28), transparent 70%) }
#mp-abertura .col { position: relative; display: flex; flex-direction: column; align-items: center }
#mp-abertura .marca { position: relative; display: grid; place-items: center; width: clamp(136px, 40vw, 176px); aspect-ratio: 1 }
#mp-abertura .brilho { position: absolute; inset: 8px; border-radius: 9999px; filter: blur(28px); background: conic-gradient(from 200deg, #07529B, #E92B82, #07529B); animation: mp-brilho 1.8s ease-in-out infinite }
#mp-abertura .anel { position: absolute; inset: 0; border-radius: 9999px; background: conic-gradient(from 0deg, transparent 0 55%, #07529B 70%, #E92B82 92%, transparent 100%);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px)); mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
  animation: mp-anel-in .6s .15s ease-out both, mp-anel 2.4s .15s linear infinite }
#mp-abertura img { position: relative; width: 73%; height: 73%; border-radius: 22%; object-fit: contain; box-shadow: 0 20px 60px rgba(233,43,130,.35); animation: mp-icone .9s cubic-bezier(.16,1,.3,1) both }
#mp-abertura .nome { margin-top: 26px; font-family: Montserrat, system-ui, sans-serif; font-weight: 800; font-size: clamp(28px, 9vw, 40px); line-height: 1; color: #fff; white-space: nowrap; animation: mp-nome .7s .55s cubic-bezier(.16,1,.3,1) both }
#mp-abertura .nome b:first-child { color: #3d8fe0 } #mp-abertura .nome b:nth-child(2) { color: #E92B82 }
#mp-abertura .nome small { margin-left: 8px; vertical-align: middle; font-size: .36em; letter-spacing: .3em; color: rgba(255,255,255,.6) }
#mp-abertura .trilho { margin-top: 22px; height: 4px; width: 160px; overflow: hidden; border-radius: 9999px; background: rgba(255,255,255,.1); animation: mp-sub .5s 1s ease-out both }
#mp-abertura .barra { height: 100%; width: 45%; border-radius: 9999px; background: linear-gradient(90deg, #07529B, #E92B82); animation: mp-barra 1.3s .9s cubic-bezier(.65,0,.35,1) infinite }
@keyframes mp-icone { 0% { opacity: 0; transform: scale(.55) rotate(-8deg); filter: blur(6px) } 55% { opacity: 1; transform: scale(1.06) rotate(0); filter: blur(0) } 100% { transform: scale(1) } }
@keyframes mp-anel { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes mp-anel-in { from { opacity: 0; transform: scale(.7) } to { opacity: 1; transform: scale(1) } }
@keyframes mp-brilho { 0%,100% { opacity: .45; transform: scale(.9) } 50% { opacity: .9; transform: scale(1.08) } }
@keyframes mp-nome { from { opacity: 0; transform: translateY(14px); letter-spacing: .3em } to { opacity: 1; transform: none; letter-spacing: -.01em } }
@keyframes mp-sub { from { opacity: 0 } to { opacity: 1 } }
@keyframes mp-barra { from { transform: translateX(-110%) } to { transform: translateX(240%) } }
@media (prefers-reduced-motion: reduce) { #mp-abertura * { animation: none !important } }
`)};document.head.appendChild(s);var d=document.createElement("div");d.id="mp-abertura";d.setAttribute("role","presentation");d.innerHTML=${JSON.stringify(`<div class="fundo"></div><div class="col"><div class="marca"><div class="brilho"></div><div class="anel"></div><img src="/logo.png" alt="MenorPreço ERP"></div><div class="nome"><b>Menor</b><b>Preço</b><small>ERP</small></div><div class="trilho"><div class="barra"></div></div></div>`)};function sai(){d.classList.add("saindo");setTimeout(function(){d.remove()},450)}d.onclick=sai;setTimeout(sai,15000);document.body.appendChild(d)})();`;export{e as t};