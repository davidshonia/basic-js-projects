const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

btn = document.getElementById('btn');
color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let randomColor = colors[randomNumber()]
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function randomNumber(){
    return Math.floor(Math.random()*colors.length);
}