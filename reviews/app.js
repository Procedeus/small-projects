const reviews = [
    {
        id: 1,
        author: 'James Gun',
        job: 'Gamer',
        info: 'Murilo is the best man of the world :)'
    },
    {
        id: 2,
        author: 'Master Yi',
        job: 'Samurai',
        info: 'man of the world :)'
    },
    {
        id: 2,
        author: 'Christ',
        job: 'Teologo',
        info: 'man of the world :)'
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});

function showPerson(person){
    console.log(reviews[person]);
    const item = reviews[person];
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info
}

prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

nextBtn.addEventListener("click", () => {
    if(currentItem < reviews.length - 1){
        currentItem++;
        showPerson(currentItem);
    }
    else{
        currentItem = 0;
        showPerson(currentItem);
    }
})

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})