const fs = require("fs");
const path = require("path");

let saveToPath = path.join(__dirname, "public", "uploads", "sample.txt");

// read a file
// fs.readFile("./index.html", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
// });
// create a file
let data = `<h1>Hello</h1>`;
// console.log("start");

fs.appendFile(saveToPath, data, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File created successfully");
  }
});
// console.log("end");
// delete a file
// fs.unlink("./index.html", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File removed successfully");
//   }
// });
// update a file
