let list = document.querySelector('.list');
const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
const listItem = document.createElement('li');
listItem.classList.add('list-item');

// arr.forEach((item) => {
//   const newItem = listItem.cloneNode();
//   newItem.textContent = item;
//   list.append(newItem);
// });

const clickHanlder = (evt) => {
  if (evt.target.className === 'list-item') {
    alert(evt.target.innerText);
  }
};

document.body.addEventListener('click', clickHanlder);

function sayHi() {
  return 'Hello';
}
