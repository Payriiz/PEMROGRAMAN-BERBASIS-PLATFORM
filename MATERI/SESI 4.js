// const userProfile = {
//     //Properti dan Nilai
//     firstName: "Budi",
//     lastName: "Santoso",
//     age: 30,
//     email: "budi.santoso@example.com",
//     isActive: true,

//     //Metode (function sebagai properti)
//     getFullName: function() {
//         return this.firstName + " " + this.lastName;
//     },
    
//     //Metode menggunakan shorthand ES6
//     greet() {
//         return "Halo, saya " + this.getFullName() + ".";
//     }
// };

// //mengakses properti menggunakan dot notation
// console.log("Nama Lengkap:", userProfile.getFullName());
// console.log("Usia:", userProfile.age);
// //mengakses properti menggunakan bracker notation
// console.log("Status Aktif:", userProfile['isActive']);
// console.log(userProfile.greet());

// //mengubah nilai properti
// userProfile.firstName = "Roni";
// userProfile.lastName = "Sahroni";

// //menambahkan properti baru
// userProfile.nomorTelepon = "08123456789";
// console.log("Nomor Telepon:", userProfile.nomorTelepon);

// //menghapus properti
// delete userProfile.lastName;


// //contoh kedua
// const keyPrefix = "id_";
// const userId = 1001;
// const keyDinamic = "alamat-user";

// const userData = {
//     [keyPrefix + "user"]: userId,
//     [keyDinamic]: "Jl. Merdeka No. 10"
// };

// console.log(userData);

//contoh ketiga
// function buatPemain(nama, skor) {
//     return {
//         nama,
//         skor,
//         tambahSkor(poin) {
//             this.skor += poin;
//         }
//     };
// }

// const pemain1 = buatPemain("Andi", 50);
// pemain1.tambahSkor(10);
// console.log(pemain1.skor); // Output: 60

//contoh keempat
const karyawan = {
    namaLengkap: "Alex Chandra",
    jabatan: "Web Developer",
    aktif: true,
    tahunBergabung: 2022,

    sapa: function() {
        return "Halo, saya " + this.namaLengkap + ", seorang " + this.jabatan + ".";
    },

    masaKerja(tahunSekarang) {
        return tahunSekarang - this.tahunBergabung;
    }
};

const {namaLengkap, jabatan} = karyawan;
console.log(namaLengkap); // Output: Alex Chandra
console.log(jabatan); // Output: Web Developer
console.log(karyawan.sapa());