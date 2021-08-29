const colors = ['#14EDAA', '#8DED14', '#E38A20', '#ED148D', '#B743BD', '#19F6E9 ', '#F6ED19', '#197BF6'];

const btn = document.getElementById('btn');
const color = document.querySelector('#color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}