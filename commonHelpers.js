import{S as g,a as L,i as p}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const b=document.querySelector(".image-form"),u=document.querySelector(".image-input"),y=document.querySelector(".image-list"),a=document.querySelector("#loader-span"),l=document.querySelector(".button");let i=1,d=40,f=new g(".image-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});b.addEventListener("submit",w);const v=L.create({baseURL:"https://pixabay.com/api/",params:{key:"41498783-400257af4926549016a2deb3f",language:"en",type:"photo",orientation:"horizontal",safesearch:!0}});async function w(s){try{s.preventDefault(),y.innerHTML="",i=1;const t=u.value.toString();a.classList.replace("is-hidden","loader");const r=await m({q:t,page:i,per_page:d});if(r.totalHits===0)return a.classList.replace("loader","is-hidden"),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});h(r.hits),f.refresh(),a.classList.replace("loader","is-hidden"),l.classList.replace("is-hidden","load-btn"),u.value="",l.addEventListener("click",n);async function n(){a.classList.replace("is-hidden","loader"),i++;const e=await m({q:t,page:i,per_page:d});if(i>=Math.ceil(e.totalHits/d))return a.classList.replace("loader","is-hidden"),l.classList.replace("load-btn","is-hidden"),p.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"});h(e.hits),f.refresh(),a.classList.replace("loader","is-hidden")}}catch(t){console.error(t)}}async function m(s){try{return(await v.get("",{params:s})).data}catch(t){console.error(t)}}function h(s=[]){const t=s.map(r=>`<a href="${r.largeImageURL}"
            <li class="photo-card">
            <img class="photo" src="${r.webformatURL}" alt="${r.tags}">
            <div class="card-container">
            <p>Likes</p>
            <p>Views</p>
            <p>Comments</p>
            <p>Downloads</p>
            </div>
            <div class="card-container">
            <p>${r.likes}</p>
            <p>${r.views}</p>
            <p>${r.comments}</p>
            <p>${r.downloads}</p>
            </div>
            </li>
            </a>`);y.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
