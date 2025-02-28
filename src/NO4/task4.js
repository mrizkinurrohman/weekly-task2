export function cekPalindrom(str) {
    // Menghapus spasi,tanda baca, mengubah menjadi huruf kecil
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            console.log(str[left], str[right]);
            return str + " Bukan palindrom";
        } else {
            left++;
            right--;
        }
    }
    return str + " Merupakan palindrom";
}

// console.log(cekPalindrom("katak"));

// console.log(cekPalindrom("KATAK"));
// console.log(cekPalindrom("katak"));
// console.log(cekPalindrom("kata"));
console.log("\n");

export function reverseWord(str) {
    return str.split(" ").reverse().join(" ");
}

// let result = reverseWord("Saya belajar JavaScript");
// console.log(result);
