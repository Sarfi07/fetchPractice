const API_KEY = 'bb2006d9d3454578be1a99cfad65913d';

// todo
    // some message while the image is loading
    // styling

document.addEventListener('DOMContentLoaded', () => {
    const header = createHeader();
    const hero = createHero();
    const content = document.getElementById('content');

    content.appendChild(header);
    content.appendChild(hero);
})

function handleRandomImg() {
    // const searchValue = document.getElementById('searchBar').value;
    const img = document.getElementById('imageEl');
    const main = document.querySelector('main');
    img.src = '';

    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`, {mode: 'cors'})
    .then(resp => resp.json())
    .then(resp => {
        return resp.data.images.original.url;
    })
    .then(url => {
        img.src = url;
    })
    .catch(err => alert(`Gifs Not Found: ${searchValue}`))
}


function handleSearch() {
    const searchValue = document.getElementById('searchBar').value;
    const img = document.getElementById('imageEl');
    const main = document.querySelector('main');
    img.src = '';

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchValue}`, {mode: 'cors'})
    .then(resp => resp.json())
    .then(resp => {
        return resp.data.images.original.url;
    })
    .then(url => {
        img.src = url;
    })
    .catch(err => alert(`Gifs Not Found: ${searchValue}`))
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
        handleSearch()
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
    randomImgBtn.addEventListener('click', () => handleRandomImg());
    randomImgBtn.textContent = 'Random Gif'

    main.appendChild(imgDiv);
    main.appendChild(randomImgBtn)

    return main;
}