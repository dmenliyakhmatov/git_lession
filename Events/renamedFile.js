// const data = [
//   {
//     id: 1,
//     title: 'Носки',
//     count: 2,
//     sale: true,
//     percent: 20,
//     price: 200,
//   },
//   {
//     id: 1,
//     title: 'sdsa',
//     count: 2,
//     sale: true,
//     percent: 20,
//     price: 200,
//   },
// ];
// sessionStorage.setItem('cart', JSON.stringify([]));
// let goods = document.querySelector('.goods');
// // console.log(goods);

// const addGoods = (evt) => {
//   const id = evt.target.dataset.id;
//   let cart = JSON.parse(sessionStorage.getItem('cart'));
//   console.log(cart);
//   if (cart.includes(id)) {
//     const ind = cart.findIndex(id);
//     const newCart = cart.splice(ind, 1);
//     sessionStorage.setItem('cart', newCart);
//   } else {
//     cart.push(id);
//     sessionStorage.setItem('cart', JSON.stringify(cart));
//   }

//   // const oldCount = sessionStorage.getItem('count') || 0;
//   // sessionStorage.setItem('count', +oldCount + 1);
//   // document.querySelector('.count').textContent = `Количество нажатий: ${
//   //   +oldCount + 1
//   // }`;
// };

// const updateCart = (list) => {
//   list.forEach((el) => {
//     let newGood = goods.cloneNode(true);
//     // newGood.textContent = el.title;
//     let btn = newGood.querySelector('.add');
//     console.log(btn);
//     btn.textContent = 'Добавить товар';
//     btn.dataset.id = el.id;
//     btn.addEventListener('click', addGoods);
//     document.querySelector('.cart').append(newGood);
//   });
// };

// updateCart(data);

// let add = document.body.querySelector('.add');
// let minus = document.body.querySelector('.minus');
// let clear = document.body.querySelector('.clear');

// const addHandler = () => {
//   const oldCount = sessionStorage.getItem('count') || 0;
//   sessionStorage.setItem('count', +oldCount + 1);
//   document.querySelector('.count').textContent = `Количество нажатий: ${
//     +oldCount + 1
//   }`;
// };
// const minusHandler = () => {
//   const oldCount = sessionStorage.getItem('count') || 0;
//   sessionStorage.setItem('count', oldCount - 1);
//   document.querySelector('.count').textContent = `Количество нажатий: ${
//     oldCount - 1
//   }`;
// };

const clearHandler = () => {
  sessionStorage.removeItem('count');
};

// const addHandler = () => {
//   // const oldCount = localStorage.getItem('count') || 0;
//   console.log(localStorage.getItem('objectTest'));
//   console.log(JSON.parse(localStorage.getItem('objectTest')));
//   localStorage.setItem('objectTest', JSON.stringify([1, 4, 5]));
// };

// add.addEventListener('click', addHandler);
// minus.addEventListener('click', minusHandler);
// clear.addEventListener('click', clearHandler);

// btn.addEventListener('click', () => {
//     alert('Нажал второй')
// })

// btn.removeEventListener('click', clickHandler)

// const setItem = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// const getItem = (key) => {
//   return JSON.parse(localStorage.getItem(key));
// };

// try {
//   let user = {
//     age: 'sd',
//   };
//   if (!user.name) {
//     console.log('sadsd');
//     throw new ReferenceError('Данные пользователя не дозаполнены');
//   }
//   // user.name;
// } catch (e) {
//   console.log(e);
// }

// console.log('!!!!!');

// async function getPosts() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   let data = await response.json();
//   console.log(data);
//   data.forEach((el) => {
//     document.querySelector('#app').append(el.name);
//   });
// }
// getPosts();
// document.querySelector('.add').addEventListener('click', function () {
//   getPosts();
// });

async function sendPost() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title: 'Title', sds: 'sdsd', third: 'third' }),
  });
}

sendPost();
