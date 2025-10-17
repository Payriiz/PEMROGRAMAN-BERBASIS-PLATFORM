const dataFilm = {
    judul: "Interstellar",
    tahunRilis: 2014,
    sutradara: "Christopher Nolan",
    genre: ["Sci-Fi", "Adventure", "Drama"],

    tampilkanDetail: function() {
        return `Judul: ${this.judul}\nTahun Rilis: ${this.tahunRilis}\nSutradara: ${this.sutradara}\nGenre: ${this.genre.join(", ")}`;
    }
}

const batas = "==============================================";
console.log(batas);
console.log(dataFilm.sutradara);
console.log(batas);
console.log(dataFilm.genre[1]);
console.log(batas);
console.log(dataFilm.tampilkanDetail());
console.log(batas);