import { formatRupiah, capitalize } from "./utils.js";


const harga = 1500000;
const namaProduk = 'laptop gaming';

console.log(`Harga produk: ${formatRupiah(harga)}`);
console.log(`Nama produk: ${capitalize(namaProduk)}`);