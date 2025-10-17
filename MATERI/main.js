import Pengguna from './user.js';

const newUser = new Pengguna('Alice', 'alice@example.com');

console.log(`informasi pengguna: ${newUser.getInfo()}`);