import fetchData from "./src/NO1/task1.js";
import getDataFormServer, { procesData } from "./src/NO2/task2.js";
import getDataUsers from "./src/NO3/task3.js";
import { cekPalindrom, reverseWord } from "./src/NO4/task4.js";
import divideAndSort from "./src/NO5/task5.js";
import projectNode from "./src/NO6/readline.js";

// fetchData(true)
// getDataFormServer(true, procesData)
// getDataUsers(),

// console.log(
//     fetchData(false)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// );
console.log(fetchData);
console.log("\n");
console.log(getDataFormServer(true, procesData));
console.log("\n");
console.log(getDataUsers());
console.log("\n");
console.log(`No 4 : ${cekPalindrom("katak")}`);
console.log("\n");
console.log(reverseWord("Saya Belajar Javascript"));
console.log("\n");
console.log(divideAndSort(5956560159466056));
console.log("\n");
console.log(projectNode());
