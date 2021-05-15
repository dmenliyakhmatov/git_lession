let divs = document.querySelectorAll('div');
let btn = document.body.querySelector('.btn');
let clickedElm = null;

const clickHandler = (evt) => {
  evt.stopPropagation();
  console.log(evt.currentTarget);
  if (clickedElm) {
    clickedElm.classList.remove('clicked');
  }
  clickedElm = evt.currentTarget;
  clickedElm.classList.add('clicked');
  //   debugger;
};

btn.addEventListener('click', clickHandler);

for (let item of divs) {
  item.addEventListener('click', clickHandler);
}

// btn.addEventListener('click', clickHandler);

// for (let item of divs) {
//     item.addEventListener('click', clickHandler);
// }
