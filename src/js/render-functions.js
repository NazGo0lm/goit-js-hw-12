import axios from 'axios';

const refs = {
imageSearchForm: document.querySelector('.search-form'),
imageSearchInput: document.querySelector('.search-input'),
submitButton: document.querySelector('.search-btn'),
imageList: document.querySelector('.images-list'),
}





export function renderImages(images) {
    if (!images || !images.hits) {
        return '';
    }
    return images.hits.map((image) => {
        return `<li class="images-list-item">
            <a class="img-link" href=${image.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${image.webformatURL} alt=${image.tags}></img></a>
            <ul class="img-dscr">
                <li class="img-data">
                    <p class="img-data-title">Likes</p>
                    <p class="img-data-numbers">${image.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Views</p>
                    <p class="img-data-numbers">${image.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Comments</p>
                    <p class="img-data-numbers">${image.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Downloads</p>
                    <p class="img-data-numbers">${image.downloads}</p>
                </li>
            </ul>
        </li>`;
    }).join('');
}
    //refs.imageList.innerHTML = markup; 

    /*
    webformatURL — посилання на маленьке зображення для списку карток у галереї
largeImageURL — посилання на велике зображення для модального вікна
tags — рядок з описом зображення. Підійде для атрибута alt
likes — кількість вподобайок
views — кількість переглядів
comments — кількість коментарів
downloads — кількість завантажень
    */
