export const PI = 3.14159;

export function tambah (a,b) {
    return a + b;
}

export default function perkalian (a,b) {
    return a * b;
}

//fungsi internal yang tidak diekspor, hanya dapat digunakan dalam file ini
function logInternal() {
    console.log("ini adalah fungsi internal");
}