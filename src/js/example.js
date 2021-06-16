/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */
// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const passed = Math.random() > 0.5;
//       if (passed) {
//         resolve('вот ваше блюдо');
//       }
//       reject('sorry products is over');
//     }, DELAY);
//   });
// };

// makeOrder('soap').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }
// const makeOrder = dish => {
//   return Promise.resolve(`your dish is ${dish}`);
// };
// console.log(makeOrder('fish'));
// makeOrder('fish').then(onMakeOrderSuccess);
/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = dish => {
//   return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
// };

// makeOrder('пирожок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Покемоны с https://pokeapi.co/
 */
// const fetchPokemonById = function (id) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };
// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// function onFetchSuccess(pokemon) {
//   console.log(pokemon);
// }
// function onFetchError(error) {
//   console.log(error);
// }

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     if (1 > 0) {
//       resolve('This is resolve');
//     }

//     reject('Stop');
//   });
// };
// console.log(makePromise().then(success).catch(error));

// function success(res) {
//   console.log(res);
// }
// function error(error) {
//   console.log(error);
// }

//task 3

// task 2
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   return new Promise(resolve => {
//     resolve(
//       allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//       ),
//     );
//   });
// };

// const logger = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

// toggleUserState(users, 'Lux').then(logger);
// task 1
// const delay = ms => Promise.resolve(ms);
// // const delay = ms => {
// //   return new Promise(resolve => {
// //     setTimeout(() => {
// //       resolve(ms);
// //     }, ms);
// //   });
// // };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms
