import{a as h,i as d,S as m}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list");function u(o){return!o||!o.hits?"":o.hits.map(e=>`<li class="images-list-item">
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
        </li>`).join("")}async function p(o,e){const r="https://pixabay.com",s="/api/",a=new URLSearchParams({key:"44477511-7934322deb574a4a64d25451d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}),i=`${r}${s}?${a}`,l={headers:{"Content-Type":"application/json"}};return(await h.get(i,{options:l})).data}const t={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader"),loading:document.querySelector(".loading"),loadBtn:document.querySelector(".load-more-btn")};t.loader.style.display="none";let n=1,c=1;const f=15;let g;t.imageSearchForm.addEventListener("submit",async o=>{o.preventDefault();let e=o.target.elements.userData.value.trim();if(g=e,e==="")return t.imageList.innerHTML="",t.loader.style.display="none",t.loadBtn.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});t.loader.style.display="block",n=1;try{const r=await p(e,n);if(c=Math.ceil(r.total/f),c===0)return t.imageList.innerHTML="",t.loader.style.display="none",t.loadBtn.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});const s=u(r);t.imageList.innerHTML=s,new m(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}catch{}o.target.reset(),t.loader.style.display="none",t.loadBtn.style.display="block",y()});t.loadBtn.addEventListener("click",async o=>{o.preventDefault(),t.loading.style.display="block",t.loadBtn.style.display="none",n++;try{const e=await p(g,n),r=u(e);t.imageList.insertAdjacentHTML("beforeend",r),new m(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh(),b()}catch(e){console.log("Error: ",e)}t.loading.style.display="none",y()});function y(){n>=c?(t.loadBtn.style.display="none",n===c&&d.info({message:"We're sorry, but you've reached the end of search results."})):t.loadBtn.style.display="block"}function b(){const e=t.imageList.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
