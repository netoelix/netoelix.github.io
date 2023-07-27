if (!localStorage.getItem('placar')) {
  localStorage.setItem('placar', 0);
}
const findDiv = document.getElementById('balls');
const changeTextRGB = document.getElementById('rgb-color');
const scoreGame = document.getElementById('score');
let score = parseInt(localStorage.getItem('placar'));
scoreGame.innerText = `Placar: ${score}`;
let colorOne;
let colorTwo;
let colorThree;

const createBall = () => {
  for (let index = 0; index < 6; index += 1) {
    const newDiv = document.createElement('div');
    const newBoll = document.createElement('div');
    const newText = document.createElement('p');
    newDiv.className = 'groupBall';
    newBoll.className = 'ball';
    newText.id = 'answer';
    findDiv.appendChild(newDiv);
    newDiv.appendChild(newBoll);
    newDiv.appendChild(newText);

    chooseColor(newBoll);
  }
};
createBall();

const changeColorCircle = document.querySelectorAll('.ball');
const changeTextAnswer = document.querySelectorAll('#answer');

const randomNumber = () => {
  colorOne = Math.trunc(Math.random() * 256);
  colorTwo = Math.trunc(Math.random() * 256);
  colorThree = Math.trunc(Math.random() * 256);
};

const changeColor = () => {
  const winColor = Math.trunc(Math.random() * 6);
  for (let index = 0; index < changeColorCircle.length; index += 1) {
    randomNumber();
    if (winColor === index) {
      changeTextRGB.innerText = `(${colorOne}, ${colorTwo}, ${colorThree})`;
      changeColorCircle[index].className = 'ball winer';
    }
    changeColorCircle[index].style.backgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
    changeTextAnswer[index].innerText = 'Escolha uma cor';
  }
};

changeColor();

function chooseColor(newBoll) {
  newBoll.addEventListener('click', () => {
    if (newBoll.style.backgroundColor.substring(3) === changeTextRGB.innerText) {
      newBoll.nextSibling.innerText = 'Acertou!';
      saveScore();
    } else {
      newBoll.nextSibling.innerText = 'Errou! Tente novamente!';
    }
  });
};

const buttonReset = document.querySelector('button');

function saveScore() {
  score += 3;
  console.log(score);
  localStorage.setItem('placar', score);
  scoreGame.innerText = `Placar: ${score}`;
}

buttonReset.addEventListener('click', () => {
  window.location.reload(true);
});
