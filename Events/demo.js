let btn = document.body.querySelector('.btn');

const clickHandler = (evt) => {
  console.log(evt);
  // alert('Нажал разок')
};

btn.addEventListener('mouseover', clickHandler);

// btn.addEventListener('click', () => {
//     alert('Нажал второй')
// })

// btn.removeEventListener('click', clickHandler)

btn.removeEventListener('click', function () {
  alert('Нажал второй');
});
