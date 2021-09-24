// "use strict";

// if (false) {
//   let color = ["red", "green", "blue", "yellow"];

//   for (let i of color) {
//     console.log(i);
//   }
//   for (let i in color) {
//     console.log(`${i}: ${color[i]}`);
//   }
// }

// function f() {
//   return null;
// }
// f();

// function stringReverse(str) {
//   return str.split("").reverse().join("");
// }

// var str = "today is a good day to start something new".split(" ");
// var c = "";
// for (var i = 0; i < str.length; i++) {
//   c = c + " " + stringReverse(str[i]);
// }

// console.log(c);

// var data = new Date();
// data.toLocaleFormat("%d-%b-%Y");
// var emp = {
//   name: "ravi",
//   address: "hyd",
//   desg: "ful",
// };

// for (var i in emp) {
//   if (emp.i == "ravi") {
//   }
// }

// function Product(name, processor, ram, graphic) {
//   this.name = name;
//   this.processor = processor;
//   this.graphic = graphic;
//   this.ram = ram;
// }

// let laptop1 = new Product("asus", "ryzen", "16GB", "Nvidia");
// console.log(laptop1);

const currentDate = new Date();
const publishedDate = new Date("3 sep 2021 7:48:05");
const difference = (currentDate.valueOf() - publishedDate.valueOf()) / 1000; //converts seconds
const year = 60 * 60 * 24 * 7 * 4 * 12;
const month = 60 * 60 * 24 * 7 * 4;
const day = 60 * 60 * 24;
const hours = 60 * 60;
const minutes = 60;
if (Math.floor(difference / year) > 0) {
  console.log(`${Math.floor(difference / year)} years ago`);
} else if (Math.floor(difference / month) > 0) {
  console.log(`${Math.floor(difference / month)} Months ago`);
} else if (Math.floor(difference / day) > 0) {
  console.log(`${Math.floor(difference / day)} days ago`);
} else if (Math.floor(difference / hours) > 0) {
  console.log(`${Math.floor(difference / hours)} Hours ago`);
} else if (Math.floor(difference / minutes) > 0) {
  console.log(`${Math.floor(difference / minutes)} Minutes ago`);
} else {
  console.log(`${Math.floor(difference)} seconds ago`);
}
