import{S as L,a as b,i as h}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v=document.querySelector(".image-form"),f=document.querySelector(".image-input"),p=document.querySelector(".image-list"),a=document.querySelector("#loader-span"),n=document.querySelector(".button");let i=1,l=40,d,m=new L(".image-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});v.addEventListener("submit",S);n.addEventListener("click",q);const w=b.create({baseURL:"https://pixabay.com/api/",params:{key:"41498783-400257af4926549016a2deb3f",language:"en",type:"photo",orientation:"horizontal",safesearch:!0}});async function S(r){try{r.preventDefault(),p.innerHTML="",i=1,d=f.value.trim(),a.classList.replace("is-hidden","loader");const t=await y({q:d,page:i,per_page:l});if(t.totalHits===0)return a.classList.replace("loader","is-hidden"),n.classList.replace("load-btn","is-hidden"),h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});g(t.hits),m.refresh(),a.classList.replace("loader","is-hidden"),n.classList.replace("is-hidden","load-btn"),f.value=""}catch(t){console.error(t)}}async function q(){try{a.classList.replace("is-hidden","loader"),i++;const r=await y({q:d,page:i,per_page:l});if(i>=Math.ceil(r.totalHits/l))return a.classList.replace("loader","is-hidden"),n.classList.replace("load-btn","is-hidden"),h.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"});g(r.hits),m.refresh(),a.classList.replace("loader","is-hidden"),window.scrollBy(0,p.firstChild.getBoundingClientRect().height*2)}catch(r){console.error(r)}}async function y(r){try{return(await w.get("",{params:r})).data}catch(t){console.error(t)}}function g(r=[]){const t=r.map(s=>`<a href="${s.largeImageURL}"
            <li class="photo-card">
            <img class="photo" src="${s.webformatURL}" alt="${s.tags}">
            <div class="card-container">
            <p>Likes</p>
            <p>Views</p>
            <p>Comments</p>
            <p>Downloads</p>
            </div>
            <div class="card-container">
            <p>${s.likes}</p>
            <p>${s.views}</p>
            <p>${s.comments}</p>
            <p>${s.downloads}</p>
            </div>
            </li>
            </a>`).join("");p.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
