const getById = (string) => document.getElementById(string);

const container = getById('meme-image-container');
const inputText = getById('text-input');
const inputTextMeme = getById('meme-text');
const inputImg = getById('meme-insert');
const memeImg = getById('meme-image');
const buttons = document.querySelectorAll('.buttonChange');
const memes = document.querySelectorAll('.meme-option');
const saveButton = document.getElementById('save-meme');

inputText.addEventListener('input', () => {
  const text = inputText.value.trim();
  inputTextMeme.innerText = text;
});

inputImg.addEventListener('change', (event) => {
  const newImg = event.target.files[0];
  if (newImg) {
    const reader = new FileReader();
    reader.onload = (e) => {
      memeImg.src = e.target.result;
    };

    reader.readAsDataURL(newImg);
  }
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const selectedEffect = event.target.id;
    container.dataset.effect = selectedEffect;
    if (selectedEffect === 'fire') {
      container.style.border = '3px dashed rgb(255, 0, 0)';
    } else if (selectedEffect === 'water') {
      container.style.border = '5px double rgb(0, 0, 255)';
    } else if (selectedEffect === 'earth') {
      container.style.border = '6px groove rgb(0, 128, 0)';
    }
  });
});

memes.forEach((option) => {
  option.addEventListener('click', () => {
    memeImg.src = option.src;
  });
});

saveButton.addEventListener('click', () => {
  const memeText = document.getElementById('text-input').value;
  const selectedEffect = container.dataset.effect;

  const canvas = document.createElement('canvas');
  canvas.width = memeImg.width;
  canvas.height = memeImg.height;

  const ctx = canvas.getContext('2d');

  ctx.drawImage(memeImg, 0, 0, canvas.width, canvas.height);

  ctx.font = '600 30px sans-serif';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;

  const x = canvas.width / 2;
  const y = canvas.height / 2 + 150;
  ctx.fillText(memeText, x, y);

  // Add the selected effect after drawing the image
  if (selectedEffect === 'fire') {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  } else if (selectedEffect === 'water') {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  } else if (selectedEffect === 'earth') {
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 6;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }

  const downloadLink = document.createElement('a');
  downloadLink.href = canvas.toDataURL('image/png');
  downloadLink.download = 'meme.png';

  downloadLink.click();
});

