// let funk1 = async function () {
//   let response= await fetch ('https://jsonplaceholder.typicode.com/comments/1')
//  try{
//   let comments = await response.json();
//   return comments;
// }catch (error) {
//   return Promise.reject(error)
// }
// }


// let funk2 = async function () {
//  let response= await fetch ('https://jsonplaceholder.typicode.com/posts/2')
//  try{
//   let posts = await response.json();
//   return posts;
// }catch (error) {
//   return Promise.reject(error)
// }
// }

// Promise.all ([funk1(), funk2()])
// .then (result =>{
//   console.log('Promise.all result: ', result)
// })

// Promise.allSettled ([funk1(), funk2()])
// .then (result =>{
//   console.log('Promise.all result: ', result)
// })

// Перша асинхронна функція для отримання comments
let funk1 = async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1'); // Виконуємо fetch запит
    if (!response.ok) { // Перевіряємо чи запит виконано успішно
      throw new Error(`Помилка при отриманні comments: статус ${response.status}`);
    }
    const comments = await response.json(); // Чекаємо на перетворення відповіді в JSON
    return comments; // Повертаємо результат
  } catch (error) {
    return Promise.reject(error); // Якщо виникає помилка, повертаємо Promise з відхиленням
  }
}

// Друга асинхронна функція для отримання posts
let funk2 = async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2'); // Виконуємо fetch запит
    if (!response.ok) { // Перевіряємо чи запит виконано успішно
      throw new Error(`Помилка при отриманні posts: статус ${response.status}`);
    }
    const posts = await response.json(); // Чекаємо на перетворення відповіді в JSON
    return posts; // Повертаємо результат
  } catch (error) {
    return Promise.reject(error); // Якщо виникає помилка, повертаємо Promise з відхиленням
  }
}

// Викликаємо обидві функції та передаємо їх у Promise.all
Promise.all([funk1(), funk2()])
  .then(result => {
    console.log('Promise.all result:', result); // Виводимо результати виконання обох обіцянок
  })
  .catch(error => {
    console.error('Promise.all помилка:', error); // Обробка помилки, якщо хоча б одна з обіцянок відхилена
  });

// Викликаємо обидві функції та передаємо їх у Promise.allSettled
Promise.allSettled([funk1(), funk2()])
  .then(result => {
    console.log('Promise.allSettled result:', result); // Виводимо всі результати, включаючи статуси обіцянок
  });