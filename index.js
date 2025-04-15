/* empty css                      */import{a as p,S as y,i as c}from"./assets/vendor-BBsfN11L.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",h="49742699-859ed69688f97e3fc464fd8bc";function v(i){const r={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:r}).then(t=>(console.log(t),t.data)).catch(t=>{throw t})}const u=document.querySelector(".gallery"),l=document.querySelector(".loader");console.dir(l);function b(i){return i.map(({webformatURL:r,largeImageURL:t,tags:a,likes:e,views:o,comments:n,downloads:m})=>`<li class="gallery-item">
            <a href="${t}" class="gallery-link">
                <img class="gallery-img" src="${r}" alt="${a}" />
            </a>
            <div class="info">
                <div class="info-colum">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Views</p>
                    <p class="info-value">${o}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${n}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${m}</p>
                </div>
            </div>
        </li>`).join("")}function L(){u.innerHTML=""}function S(){l.style.display="block"}function d(){l.style.display="none"}const f=new URL("./img/icon-error.svg",import.meta.url).href,s=document.querySelector(".form");console.dir(s);const w=new y(".gallery a",{captionsData:"alt",captionDelay:250,enableKeyboard:!0});d();s.addEventListener("submit",q);function q(i){i.preventDefault();const r=s.elements["search-text"].value.trim();r&&(L(),S(),v(r).then(({hits:t})=>{if(t.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:f});return}u.innerHTML=b(t),w.refresh()}).catch(()=>{c.info({message:"Something went wrong!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:f})}).finally(()=>{d()}),s.reset())}
//# sourceMappingURL=index.js.map
