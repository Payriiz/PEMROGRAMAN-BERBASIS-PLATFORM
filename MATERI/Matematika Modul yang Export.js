import {PI, tambah} from './Matematika.js';

import perkalian from './Matematika.js';

console.log(`Nilai PI: ${PI}`);

const hasilTambah = tambah(5, 3);
console.log(`Hasil tambah: ${hasilTambah}`); //versi Bapak
console.log(`Hasil tambah: ${tambah(5, 3)}`); //versi Ibnu

const hasilKali = perkalian(5, 3);
console.log(`Hasil perkalian: ${hasilKali}`); //versi Bapak
console.log(`Hasil perkalian: ${perkalian(5, 3)}`); //versi Ibnu