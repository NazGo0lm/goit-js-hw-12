import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderImages } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";

const refs = {
    imageSearchForm: document.querySelector('.search-form'),
    imageSearchInput: document.querySelector('.search-input'),
    submitButton: document.querySelector('.search-btn'),
    imageList: document.querySelector('.images-list'),
    loader: document.querySelector('.loader'),
    loading: document.querySelector('.loading'),
    loadBtn: document.querySelector('.load-more-btn'),
}

refs.loader.style.display = 'none';
let currentPage = 1;
let maxPage = 1;
const perPage = 15;

let queryGlobal;

refs.imageSearchForm.addEventListener('submit', async e => {
    e.preventDefault();
    let query = e.target.elements.userData.value.trim();
    queryGlobal = query;
    if (query === '') {
        refs.imageList.innerHTML = '';
        refs.loader.style.display = 'none';
        refs.loadBtn.style.display = 'none';
        return iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'bottomRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
    }
    refs.loader.style.display = 'block';
    currentPage = 1;

    try {
        
        const data = await getImages(query, currentPage);
        //console.log(data.total)
        maxPage = Math.ceil(data.total / perPage);
        //console.log(maxPage)

        if (maxPage === 0) {
            refs.imageList.innerHTML = '';
            refs.loader.style.display = 'none';
            refs.loadBtn.style.display = 'none';
            return iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'bottomRight',
            transitionIn: 'bounceInDown',
                transitionOut: 'fadeOutDown',
            
        });
        }
        
        const markup = renderImages(data);
         refs.imageList.innerHTML = markup;

        const lightbox = new SimpleLightbox('.images-list-item a', {
            captions: true,
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
            animationSpeed: 300,
            widthRatio: 1,
            heightRatio: 0.95,
            disableRightClick: true,
        });
        lightbox.refresh();
    } catch (error) {
        // Обробка помилок, якщо потрібно
    }
    e.target.reset();
    refs.loader.style.display = 'none';
    //noLoadBtn()
    
    refs.loadBtn.style.display = 'block';
    
            noLoadBtn()
            //console.log(currentPage)
            //console.log(maxPage)
        







    
})

refs.loadBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    //let query = e.target.elements.userData.value.trim();
    refs.loading.style.display = 'block';
    refs.loadBtn.style.display = 'none';
    currentPage++;

    try {
        const data = await getImages(queryGlobal, currentPage); 
        //console.log(data);
        
        const markup = renderImages(data);
        refs.imageList.insertAdjacentHTML('beforeend', markup);

        const lightbox = new SimpleLightbox('.images-list-item a', {
            captions: true,
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
            animationSpeed: 300,
            widthRatio: 1,
            heightRatio: 0.95,
            disableRightClick: true,
        });
        lightbox.refresh();
        skipOldElement()
    } catch (error) {
        console.log('Error: ', error);
    }

    refs.loading.style.display = 'none';
    //refs.loadBtn.style.display = 'block';


  
            noLoadBtn()
            //console.log(currentPage)
            //console.log(maxPage)
        
     
});



function noLoadBtn() {
  if (currentPage >= maxPage) {
    refs.loadBtn.style.display = 'none';

    if (currentPage === maxPage) {
      iziToast.info({
        /* title: 'The End!', */
        message: "We're sorry, but you've reached the end of search results.",
      });
    } 
  } 
  else {
    refs.loadBtn.style.display = 'block';
  }
}


function skipOldElement() {
  const liElem = refs.imageList.children[0];
  const height = liElem.getBoundingClientRect().height;

  scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}

