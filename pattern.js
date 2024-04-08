// ? Print the Normal *
// let n=5;
// for(let i=0;i<n;i++){
//     console.log("*")
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     console.log("*");
//   }
// }

// ! importaion concept to print in next line and we take the string vavriable because we can not handle with console.log("*")
// let n = 5;
// let string=""
// for (let i = 0; i < n; i++) {
//     string+="*"
//     string+="\n"
// }
// console.log(string)

// ? Print the Square of *

// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//   for(let j=0;j<n;j++){
//     string+="* "
//   }
//   string+="\n"
// }
// console.log(string)

// function printPattern(height) {
//   let pattern = "";
//   let middle = Math.floor(height / 2);
//   let currentLine = 1;
//   let currentChar = 1;

//   for (let i = 1; i <= height * height; i++) {
//     if (
//       currentLine === currentChar ||
//       currentChar === middle + 1 ||
//       currentLine === height - currentChar + 1
//     ) {
//       pattern += "0";
//     } else {
//       pattern += " ";
//     }

//     if (currentChar === height) {
//       pattern += "\n";
//       currentLine++;
//       currentChar = 1;
//     } else {
//       pattern += " ";
//       currentChar++;
//     }
//   }

//   console.log(pattern);
// }
// printPattern(5);

// TODO Print the hour glass pattern

// let n=3;
// let string=""
// for(let i=0;i<=n;i++){
//   for(let j=1;j<=i;j++){
//     string+="  "
//   }
//   for(let j=i;j<n;j++){
//     string+="* "
//   }
//   for(let j=i;j<=n;j++){
//     string+="* "
//   }
//   string+="\n"
// }
// console.log(string)

// function Pattern(height) {
//   let string = "";
//   let middle = Math.floor(height / 2);
//   let currline = 1;
//   let chrrchar = 1;
//   for (let i = 0; i < height * height; i++) {
//     if (
//       currline == chrrchar ||
//       chrrchar == middle + 1 ||
//       currline == height - chrrchar + 1
//     ) {
//       string += "*";
//     } else {
//       string += "-";
//     }
//     if (chrrchar == height) {
//       string += "\n";
//       currline++;
//       chrrchar = 1;
//     } else {
//       string += "-";
//       chrrchar++;
//     }
//   }
//   console.log(string);
// }
// Pattern(5);

// function Pattern(height) {
//   let string = "";
//   let middle = Math.floor(height / 2);

//   for (let currline = 1, chrrchar = 1; currline <= height; chrrchar++) {
//     if (chrrchar > height) {
//       string += "\n";
//       currline++;
//       chrrchar = 1;
//     } else {
//       if (
//         currline === chrrchar ||
//         chrrchar === middle + 1 ||
//         currline === height - chrrchar + 1
//       ) {
//         string += "*";
//       } else {
//         string += "-";
//       }
//       if (chrrchar < height) {
//         string += "-";
//       }
//     }
//   }
//   console.log(string);
// }
// Pattern(5);

function Pattern(height) {
  let currline = 1;
  let currchar = 1;
  for (let i = 0; i < 25; i++) {
    if (
      currline == currchar ||
      currchar == 3 ||
      currline == height - currchar + 1
    ) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }

    if (currchar == height) {
      process.stdout.write("\n");
      currline++;
      currchar = 1;
    } else {
      process.stdout.write(" ");
      currchar++;
    }
  }
}
Pattern(5);
