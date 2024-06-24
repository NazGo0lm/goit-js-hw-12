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

let query;

refs.imageSearchForm.addEventListener('submit', async e => {
    e.preventDefault();
    let query = e.target.elements.userData.value.trim();

    if (query === '') {
        refs.imageList.innerHTML = '';
        iziToast.error({
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
    refs.loadBtn.style.display = 'block';

    //refs.loading.style.display = 'none';








    
})

refs.loadBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    //let query = e.target.elements.userData.value.trim();
    refs.loading.style.display = 'block';
    refs.loadBtn.style.display = 'none';
    currentPage++;

    try {
        const data = await getImages(query, currentPage); 
        console.log(data);
        const markup = renderImages(data);
        refs.imageList.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        console.log('Error: ', error);
    }

    refs.loading.style.display = 'none';
    refs.loadBtn.style.display = 'block';
});







/* getImages(auto)
        .then(images => {
            if (images.hits.length === 0) {
                refs.imageList.innerHTML = '';
                return iziToast.warning({
                    title: 'Caution',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });


            } else {
                renderImages(images);

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
            }
        })
        .then(() => refs.loader.style.display = 'none')
        .catch(err => {
            console.log(err);
            refs.loader.style.display = 'none';
        }) */


/* 
refs.imageSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    auto = e.target.elements.userData.value;

    if (auto.trim() === '') {
        refs.imageList.innerHTML = '';
        return iziToast.info({
            message: 'You need to enter search request!',
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
    }

        refs.loader.style.display = 'block';

    getImages(auto)
        .then(images => {
            if (images.hits.length === 0) {
                refs.imageList.innerHTML = '';
                return iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    transitionIn: 'bounceInDown',
                    transitionOut: 'fadeOutDown',
                });
            } else {
                renderImages(images);

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
}            
        })
        .then(() => refs.loader.style.display = 'none')
        .catch(err => {
            console.log(err);
            refs.loader.style.display = 'none';
        });
    e.target.reset();
}) */
  


