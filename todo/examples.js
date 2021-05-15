const headerElement = document.createElement('header');
headerElement.classList.add('header');
const h1 = document.createElement('h1');
const addTask = document.createElement('div');
addTask.classList.add('add_task');
addTask.innerHTML =
  '<input type="text" /> <button type="button"> Добавить </button>';
h1.textContent = 'Заголовок';
headerElement.append(h1);
headerElement.append(addTask);
document.body.append(headerElement);

const li = document.createElement('li');
li.innerHTML = `<div class='custom-item'><span></span></div>`;

const divContainer = document.createElement('div');
const list = document.createElement('ul');
divContainer.append(list);

// const arr = ['Первый', 'Второй', 'Третий'];

// arr.forEach((item) => {
//   const newItem = li.cloneNode(true);
//   newItem.querySelector('span').textContent = item;
//   list.append(newItem);
// });

// document.body.append(divContainer);
