const API_KEY = 'bb2006d9d3454578be1a99cfad65913d';

document.addEventListener('DOMContentLoaded', () => {
    const header = createHeader();
    const hero = createHero();
    const content = document.getElementById('content');

    content.appendChild(header);
    content.appendChild(hero);
})


async function displayGifs(searchValue) {

    const img = document.getElementById('imageEl');

    if (searchValue) {
        img.src = '';
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchValue}`, {mode: 'cors'});
    
        const data = await response.json();
        img.src = data.data.images.original.url;
    }
    else {
        img.src = '';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`, {mode: 'cors'});

        const data = await response.json();
        img.src = data.data.images.original.url;
    }
}


function createHeader() {
    const header = document.createElement('header');
    const input = document.createElement('input');
    input.setAttribute('id', 'searchBar');
    input.placeholder = 'Search Gifs';

    const searchBtn = document.createElement('button');
    searchBtn.setAttribute('id', 'searchBtn');
    searchBtn.textContent = 'Search';
    searchBtn.addEventListener('click', () => {
        const searchValue = document.getElementById('searchBar').value;
        displayGifs(searchValue).catch(err => alert(`Gifs Not Found: ${searchValue}`));
    })

    header.appendChild(input);
    header.appendChild(searchBtn);

    return header;
}


function createHero() {
    const main = document.createElement('main');
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'imgDiv')
    const img = document.createElement('img');
    img.setAttribute('id', 'imageEl');
    imgDiv.appendChild(img)

    const randomImgBtn = document.createElement('button');
    randomImgBtn.setAttribute('id', 'randomImgBtn');
    randomImgBtn.addEventListener('click', () => {
        displayGifs().catch(err => alert('Something went wrong.'))
    });
    randomImgBtn.textContent = 'Random Gif'

    main.appendChild(imgDiv);
    main.appendChild(randomImgBtn)

    return main;
}