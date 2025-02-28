function divideAndSort(number) {
    // Konversi angka menjadi string dan pisahkan berdasarkan '0'
    const parts = number.toString().split("0");
    // console.log(parts);

    // Sorting setiap bagian dan gabungkan kembali
    // map mengembalikan array baru
    const sortedParts = parts.map((part) => {
        return part.split("").sort().join("");
    });
    // console.log(sortedParts);

    // Gabungkan semua bagian yang sudah disortir
    const result = sortedParts.join("");
    // console.log(result);

    // Konversi kembali ke angka jika diperlukan (optional)
    return parseInt(result, 10);
}

export default divideAndSort;

// const inputNumber = 5956560159466056;
// // Contoh penggunaan
// const output = divideAndSort(inputNumber);
// // console.log("Input:", inputNumber);
// console.log("Output:", output);

// let a = "5956560159466056";
// let b = a.split();
// console.log(b);

//split bisa digunakan untuk memecah string menjadi array
// tidak bisa memecah angka
// jika angka jadi harus diubah menjadi string terlebih dahulu
