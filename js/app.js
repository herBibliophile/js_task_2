"use strict";

// let numbersOfSeries = +prompt(`Nechta serial ko'rdingiz ?`, "");

// const seriesDB = {
//   count: numbersOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// for (let i = 1; i <= 2; i++) {
//   let savol = +prompt(`Savol - ${i} : Oxirgi ko'rgan serialingiz`, ""),
//     point = +prompt(`Javob - ${i} : Necha baho qo'yasiz`, "");
//   seriesDB.series[savol] = point;

//   if (savol === "" || savol === null) {
//     i--;
//   } else if (point === "" || point === null) {
//     i--;
//   } else {
//     seriesDB.series[savol] = point;
//   }
// }
// if (numbersOfSeries < 5) {
//   console.log(`Kam serial ko'ribsiz`);
// } else if (numbersOfSeries > 5 && numbersOfSeries < 10) {
//   console.log(`Siz classic tomoshabin ekansiz`);
// } else if (numbersOfSeries > 10) {
//   console.log(`Siz serial ko'rishda yorvoreyshin ekansiz`);
// } else {
//   console.log(`Error`);
// }

// While

// let n = 1;
// while (n > 0 && n <= 2) {
//   let savol = +prompt(`Savol - ${n} : Oxirgi ko'rgan serialingiz`, ""),
//     point = +prompt(`Javob - ${n} : Necha baho qo'yasiz`, "");
//   n++;
//   seriesDB.series[savol] = point;
//   if (savol === 0) {
//     n--;
//   } else if (point === 0 ) {
//     n--;
//   } else {
//     seriesDB.series[savol] = point;
//   }
// }
// if (numbersOfSeries < 5) {
//     console.log(`Kam serial ko'ribsiz`);
// }else if (numbersOfSeries > 5 && numbersOfSeries < 10) {
//     console.log(`Siz classic tomoshabin ekansiz`);
// }else if (numbersOfSeries > 10) {
//     console.log(`Siz serial ko'rishda yorvoreyshin ekansiz`);
// }else{
//     console.log(`Error`);
// }

// Do While

// let n = 1;
// do {
//   let savol = +prompt(`Savol - ${n} : Oxirgi ko'rgan serialingiz`, ""),
//     point = +prompt(`Javob - ${n} : Necha baho qo'yasiz`, "");
//   n++;
//   seriesDB.series[savol] = point;
//   if (savol === 0 || savol === NaN) {
//     n--;
//   } else if (point === 0 || point === NaN) {
//     n--;
//   } else {
//     seriesDB.series[savol] = point;
//   }
// } while (n > 0 && n <= 2);
// if (numbersOfSeries < 5) {
//     console.log(`Kam serial ko'ribsiz`);
// }else if (numbersOfSeries > 5 && numbersOfSeries < 10) {
//     console.log(`Siz classic tomoshabin ekansiz`);
// }else if (numbersOfSeries > 10) {
//     console.log(`Siz serial ko'rishda yorvoreyshin ekansiz`);
// }else{
//     console.log(`Error`);
// }

// console.log(seriesDB);


for (let i = 1; i <= 100; i++) {
    if (i % 9 === 0) {
      console.log(i);
    }
}
