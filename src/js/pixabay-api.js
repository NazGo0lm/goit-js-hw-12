import axios from 'axios';

export async function getImages(query, currentPage) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';

    const params = new URLSearchParams({
        key: '44477511-7934322deb574a4a64d25451d',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 15,

    })
    
    const url = `${BASE_URL}${END_POINT}?${params}`;
    console.log(url);
    
    const options = {
        headers: {
            // 'Access-Control-Allow-Origin': '*', 
            "Content-Type": "application/json",

            /* 'X-RateLimit-Limit': '100',
            'X-RateLimit-Remaining': '99',
            'X-RateLimit-Reset': '0.6', */
    },
}
    
    const res = await axios.get(url, { options });
    return res.data;
    
    
    
    
    
    
    
    
    
    
    /* const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: '44477511-7934322deb574a4a64d25451d',
        q: auto,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 30,
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    console.log(url);

    const options = {
        headers: {
            // 'Access-Control-Allow-Origin': '*', 
            "Content-Type": "application/json",

            'X-RateLimit-Limit': '100',
            'X-RateLimit-Remaining': '99',
            'X-RateLimit-Reset': '0.6',
    },
}

    return fetch(url, {options})
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
                      }
        });*/
} 