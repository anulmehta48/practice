// TODO print the Square Pattern
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//   for(let j=0;j<n;j++){
//     string+="* "
//   }
//   string+="\n"
// }
// console.log(string)

// TODO print the Triangle Pattern Increasing
// *
// * *
// * * *
// * * * *
// * * * * *

// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//   for(let j=0;j<=i;j++){
//     string+="* "
//   }
//   string+="\n"
// }
// console.log(string)

// TODO print the Triangle Pattern Decreasing
// * * * * *
// * * * *
// * * *
// * *
// *

// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//   for(let j=i;j<n;j++){
//     string+="* "
//   }
//   string+="\n"
// }
// console.log(string)

// TODO print the Right side tringle
//           *
//         * *
//       * * *
//     * * * *
//   * * * * *

// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//     for(let j=i;j<n;j++){
//         string+="  "
//     }
//     for(let j=0;j<=i;j++){
//         string+="* "
//     }
//     string+="\n"
// }
// console.log(string)

// TODO print the Right sided tringle

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
//         string+="  "
//     }
//     for(let j=i;j<n;j++){
//         string+="* "
//     }
//     string+="\n"
// }
// console.log(string)

//TODO PRint Hill Pattern
//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * *

// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//     for(let j=i;j<n;j++){
//         string+="  "
//     }
//     for(let j=0;j<i;j++){
//         string+="* "
//     }
//     for(let j=0;j<=i;j++){
//         string+="* "
//     }
//     string+="\n"
// }
// console.log(string)

//TODO PRint Hill Pattern  Decreasing
// * * * * * * * * * * *
//   * * * * * * * * *
//     * * * * * * *
//       * * * * *
//         * * *
//           *

// let n=5;
// let string=""
// for(let i=0;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         string+="  "
//     }
//     for(let j=i;j<n;j++){
//         string+="* "
//     }
//     for(let j=i;j<=n;j++){
//         string+="* "
//     }
//     string+="\n"
// }
// console.log(string)

// TODO Daimond Pattern
//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * *
// * * * * * * * * * * *
//   * * * * * * * * *
//     * * * * * * *
//       * * * * *
//         * * *
//           *

// let n=5;
// let string=""
// for(let i=0;i<n;i++){
//     for(let j=i;j<n;j++){
//         string+="  "
//     }
//     for(let j=0;j<i;j++){
//         string+="* "
//     }
//     for(let j=0;j<=i;j++){
//         string+="* "
//     }
//     string+="\n"
// }

// for(let i=0;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         string+="  "
//     }
//     for(let j=i;j<n;j++){
//         string+="* "
//     }
//     for(let j=i;j<=n;j++){
//         string+="* "
//     }
//     string+="\n"
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
//       string += " ";
//     }
//     if (chrrchar == height) {
//       string += "\n";
//       currline++;
//       chrrchar = 1;
//     } else {
//       string += " ";
//       chrrchar++;
//     }
//   }

//   console.log(string);
// }
// Pattern(5);

function Pattern(height) {
  let string = "";
  let currline = 1;
  let chrrchar = 1;
  for (let i = 0; i < 25; i++) {
    if (
      currline == chrrchar ||
      chrrchar == 3 ||
      currline == height - chrrchar + 1
    ) {
      string += "*";
    } else if (chrrchar == height) {
      string += "*\n";
      currline++;
      chrrchar = 1;
    } else {
      string += " ";
      chrrchar++;
    }
  }
  console.log(string);
}
Pattern(5);
