const createElements = (element) => document.createElement(element);
let buttons;

fetch('./data.json')
  .then(response => response.json())
  .then(dataList => {
    creatProjectList(dataList);
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });

const creatProjectList = (data) => {
  const projectListContainer = document.getElementById('back-portifolio');

  for (let index = 0; index < data.length; index += 1) {
    const newArticle = createElements('article');
    const newTitle = createElements('h2');
    const newButton = createElements('button');
    const newDiv = createElements('div');
    const newLink = createElements('a');
    const newTextAbout = createElements('p');
    const newTextTechnology = createElements('p');
    const newTextHowToUse = createElements('p');
    const newTextResources = createElements('p');

    projectListContainer.appendChild(newArticle);
    newArticle.appendChild(newTitle);
    newArticle.className = 'project';
    newArticle.appendChild(newButton);
    newButton.className = 'textClick';
    newArticle.appendChild(newDiv);
    newDiv.className = 'expandable-content';
    newDiv.appendChild(newLink);
    newLink.className = 'linkAcess';
    newDiv.appendChild(newTextAbout);
    newTextAbout.className = 'aboutText';
    newDiv.appendChild(newTextTechnology);
    newTextTechnology.className = 'technology';
    newDiv.appendChild(newTextHowToUse);
    newTextHowToUse.className = 'howToUse';
    newDiv.appendChild(newTextResources);
    newTextResources.className = 'resources';

    newTitle.innerText = data[index].id;
    newButton.innerText = 'Clique para expandir/recolher';
    newLink.href = data[index].location;
    newLink.innerText = 'Link do projeto';
    newLink.target = '_blank';
    newTextAbout.innerHTML = data[index].about;
    newTextTechnology.innerHTML = `Tecnologias utilizadas:<br></br> ${data[index].technology}`;
    newTextHowToUse.innerHTML = `Como funciona:<br></br>${data[index].howToUse}`;
    newTextResources.innerHTML = `Recursos:<br></br>${data[index].resources}`;
  }
  buttons = document.querySelectorAll('.textClick');
  buttons.forEach(element => {
    element.addEventListener('click', () => {
      const nextItem = element.nextElementSibling;
      if (nextItem.style.display === 'none') {
        nextItem.style.display = 'block';
      } else {
        nextItem.style.display = 'none';
      }
    })
  });
}
