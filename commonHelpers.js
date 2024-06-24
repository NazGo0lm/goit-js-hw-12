import{a as m,i as u,S as p}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list");function c(o){return!o||!o.hits?"":o.hits.map(e=>`<li class="images-list-item">
            <a class="img-link" href=${e.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${e.webformatURL} alt=${e.tags}></img></a>
            <ul class="img-dscr">
                <li class="img-data">
                    <p class="img-data-title">Likes</p>
                    <p class="img-data-numbers">${e.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Views</p>
                    <p class="img-data-numbers">${e.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Comments</p>
                    <p class="img-data-numbers">${e.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Downloads</p>
                    <p class="img-data-numbers">${e.downloads}</p>
                </li>
            </ul>
        </li>`).join("")}async function d(o,e){const s="https://pixabay.com",i="/api/",t=new URLSearchParams({key:"44477511-7934322deb574a4a64d25451d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}),a=`${s}${i}?${t}`;console.log(a);const n={headers:{"Content-Type":"application/json"}};return(await m.get(a,{options:n})).data}const r={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader"),loading:document.querySelector(".loading"),loadBtn:document.querySelector(".load-more-btn")};r.loader.style.display="none";let l=1,g;r.imageSearchForm.addEventListener("submit",async o=>{o.preventDefault();let e=o.target.elements.userData.value.trim();e===""&&(r.imageList.innerHTML="",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})),r.loader.style.display="block",l=1;try{const s=await d(e,l),i=c(s);r.imageList.innerHTML=i,new p(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}catch{}o.target.reset(),r.loader.style.display="none",r.loadBtn.style.display="block"});r.loadBtn.addEventListener("click",async o=>{o.preventDefault(),r.loading.style.display="block",r.loadBtn.style.display="none",l++;try{const e=await d(g,l);console.log(e);const s=c(e);r.imageList.insertAdjacentHTML("beforeend",s)}catch(e){console.log("Error: ",e)}r.loading.style.display="none",r.loadBtn.style.display="block"});
//# sourceMappingURL=commonHelpers.js.map
