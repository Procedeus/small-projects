const colors = ['green', 'red', "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumber(length){
    return Math.floor(Math.random() * length);
}

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber(colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

