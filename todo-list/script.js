const getById = (string) => document.getElementById(string);

const buttonInsertItem = getById('criar-tarefa');
const textToDo = getById('texto-tarefa');
const ordenedList = getById('lista-tarefas');
const deletList = getById('apaga-tudo');
const removeEnded = getById('remover-finalizados');
const saveList = getById('salvar-tarefas');
const removeSelectec = getById('remover-selecionado');
const movUp = getById('mover-cima');
const moveDown = getById('mover-baixo');

const addClickEventToNewListItem = (newLi) => {
  newLi.addEventListener('click', (event) => {
    const findLi = document.getElementsByClassName('selected');
    const { target } = event;

    if (findLi.length > 0) {
      findLi[0].style.backgroundColor = 'white';
      findLi[0].classList.remove('selected');
    }

    target.style.backgroundColor = 'gray';
    target.classList.add('selected');
  });
};
const addLineToIten = (newLi) => {
  newLi.addEventListener('dblclick', (event) => {
    const { target } = event;
    if (target.className === 'completed selected') {
      target.classList.remove('completed');
      target.style.textDecoration = 'none';
    } else {
      target.classList.add('completed');
      target.style.textDecoration = 'line-through solid black';
    }
  });
};

deletList.addEventListener('click', () => {
  const allLi = document.querySelectorAll('li');
  allLi.forEach((li) => li.remove());
  localStorage.clear();
});

removeEnded.addEventListener('click', () => {
  const ended = document.querySelectorAll('.completed');
  ended.forEach((li) => li.remove());
});

removeSelectec.addEventListener('click', () => {
  const selectedItem = document.querySelectorAll('.selected');
  selectedItem.forEach((li) => li.remove());
});

const updateCompletedStyles = () => {
  const completedItems = document.querySelectorAll('.completed');
  completedItems.forEach((item) => {
    item.style.textDecoration = 'line-through solid black';
  });
};

const moveItemUp = () => {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem) {
    const prevItem = selectedItem.previousElementSibling;

    if (prevItem && prevItem.tagName === 'LI') {
      const selectedClasses = Array.from(selectedItem.classList);
      const selectedText = selectedItem.innerText;

      const prevClasses = Array.from(prevItem.classList);
      const prevText = prevItem.innerText;

      selectedItem.innerText = prevText;
      prevItem.innerText = selectedText;

      selectedItem.className = '';
      prevItem.className = '';

      prevItem.classList.add(...selectedClasses);
      selectedItem.classList.add(...prevClasses);

      if (selectedItem.classList.contains('completed')) {
        selectedItem.style.textDecoration = 'line-through solid black';
      } else {
        selectedItem.style.textDecoration = 'none';
      }

      selectedItem.style.backgroundColor = 'white';
      prevItem.style.backgroundColor = 'gray';
    }
  }
};

const moveItemDown = () => {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem) {
    const nextItem = selectedItem.nextElementSibling;

    if (nextItem && nextItem.tagName === 'LI') {
      const selectedClasses = Array.from(selectedItem.classList);
      const selectedText = selectedItem.innerText;

      const nextClasses = Array.from(nextItem.classList);
      const nextText = nextItem.innerText;

      selectedItem.innerText = nextText;
      nextItem.innerText = selectedText;

      selectedItem.className = '';
      nextItem.className = '';

      nextItem.classList.add(...selectedClasses);
      selectedItem.classList.add(...nextClasses);

      if (selectedItem.classList.contains('completed')) {
        selectedItem.style.textDecoration = 'line-through solid black';
      } else {
        selectedItem.style.textDecoration = 'none';
      }

      selectedItem.style.backgroundColor = 'white';
      nextItem.style.backgroundColor = 'gray';
    }
  }
};

movUp.addEventListener('click', () => {
  moveItemUp();
  updateCompletedStyles();
});

moveDown.addEventListener('click', () => {
  moveItemDown();
  updateCompletedStyles();
});

saveList.addEventListener('click', () => {
  const allList = document.querySelectorAll('li');
  const todoListArray = [];
  const todoClassArray = [];
  allList.forEach((li) => {
    todoListArray.push(li.innerText);
    todoClassArray.push(li.className);
  });

  localStorage.setItem('todolist', JSON.stringify(todoListArray));
  localStorage.setItem('todolistClass', JSON.stringify(todoClassArray));
});

const checkClassItens = () => {
  const itensSelected = document.querySelectorAll('.selected');
  const itensEnded = document.querySelectorAll('.completed');

  if (itensSelected) {
    itensSelected.forEach((li) => {
      li.style.backgroundColor = 'gray';
    });
  }

  if (itensEnded) {
    itensEnded.forEach((li) => {
      li.style.textDecoration = 'line-through solid black';
    });
  }
};

window.addEventListener('load', () => {
  const savedList = localStorage.getItem('todolist');
  const savedClass = localStorage.getItem('todolistClass');
  if (savedList) {
    const todoListArray = JSON.parse(savedList);
    const todoClassArray = JSON.parse(savedClass);

    for (let index = 0; index < todoListArray.length; index += 1) {
      const newLi = document.createElement('li');
      newLi.innerText = todoListArray[index];
      newLi.classList = todoClassArray[index];
      ordenedList.appendChild(newLi);
      addClickEventToNewListItem(newLi);
      addLineToIten(newLi);
      checkClassItens();
    }
  }
});

buttonInsertItem.addEventListener('click', () => {
  const newLi = document.createElement('li');
  const text = textToDo.value.trim();
  ordenedList.appendChild(newLi);
  newLi.innerText = text;

  textToDo.value = '';
  addClickEventToNewListItem(newLi);
  addLineToIten(newLi);
});
