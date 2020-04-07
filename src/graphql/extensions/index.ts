import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';

export const Query = {};

/**
 * Add a key to a type
 */
// export const User = {
//   [GET_KEY]: (user) => user.id
// }

/**
 * Add custom data to a type
 * @example
 * query.users[0].follow()
 */
// export const User = (user) => ({
//   follow() {
//     console.log('follow', user.id)
//   }
// })

const notyf = new Notyf();

export const Ship = ship => ({
  showActive() {
    ship.active ? notyf.success('This ship is active') : notyf.error('This ship is not active')
  }
})
