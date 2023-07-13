const reviews = [
    {
        id: 1,
        author: 'James Gun',
        job: 'Gamer',
        info: 'Murilo is the best man of the world :)',
        img: 'https://imgix.bustle.com/uploads/getty/2018/7/20/fcaadb68-9761-4ce9-aa69-8830f6f024c2-getty-859990040.jpg?w=800&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces'
    },
    {
        id: 2,
        author: 'Michael Scoot',
        job: 'Gerente',
        info: 'man of the world :)',
        img: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png'
    },
    {
        id: 2,
        author: 'Taylor Swift',
        job: 'Teologo',
        info: 'Good Guy :) Good Guy :) Good Guy :) Good Guy :) Good Guy :) Good Guy :) Good Guy :)',
        img: 'https://th.bing.com/th/id/OIP.kZKpVAuNhCxqfxrzS0oDgwHaKT?pid=ImgDet&rs=1'
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
    const item = reviews[person];
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
    img.src = item.img;
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