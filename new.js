// function Pattern(height) {
//     let string = "";
//     let middle = Math.floor(height / 2);

//     for (let i = 0; i < height * height; i++) {
//       let currline = Math.floor(i / height) + 1;
//       let chrrchar = i % height + 1;

//       string += (currline === chrrchar ||
//       chrrchar === middle + 1
//       || currline === height - chrrchar + 1) ? "* " : "  ";

//       if (chrrchar === height) {
//         string += "\n";
//       }
//     }

//     console.log(string);
//   }

//   Pattern(5);

// function Pattern(height) {
//   let string = "";
//   let currline = 1;
//   let chrrchar = 1;
//   for (let i = 0; i < 25; i++) {
//     string +=
//       currline == chrrchar || chrrchar == 3 || currline == height - chrrchar + 1
//         ? "*"
//         : " ";

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

// todo python code

// def Pattern(height):
//     string = ""
//     for currline in range(1, height+1):
//         for chrrchar in range(1, height+1):
//             if currline == chrrchar or chrrchar == 3 or currline == height - chrrchar + 1:
//                 string += "*"
//             else:
//                 string += " "
//         string += "\n"

//     print(string)

// Pattern(5)

// function Pattern(height) {
//   let currline = 1;
//   let chrrchar = 1;
//   for (let i = 0; i < 25; i++) {
//     if (
//       (currline == chrrchar ||
//         chrrchar == 3 ||
//         currline == height - chrrchar + 1) &&
//       chrrchar == height
//     ) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline++;
//       chrrchar = 1;
//     } else if (
//       currline == chrrchar ||
//       chrrchar == 3 ||
//       (currline == height - chrrchar + 1 && !(chrrchar == height))
//     ) {
//       process.stdout.write("*");
//     } else if (
//       !(
//         currline == chrrchar ||
//         chrrchar == 3 ||
//         currline == height - chrrchar + 1
//       ) &&
//       chrrchar == height
//     ) {
//       process.stdout.write("\n");
//       currline++;
//       chrrchar = 1;
//     } else {
//       process.stdout.write("-");
//       process.stdout.write("-");
//       chrrchar++;
//     }
//   }
// }
// Pattern(5);

// function Pattern(height) {
//   let currline = 1;
//   let chrrchar = 1;
//   for (let i = 0; i < 25; i++) {
//     process.stdout.write(" ");
//     if (
//       (currline == chrrchar ||
//         chrrchar == 3 ||
//         currline == height - chrrchar + 1) &&
//       chrrchar == height
//     ) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline++;
//       chrrchar = 1;
//     } else if (
//       currline == chrrchar ||
//       chrrchar == 3 ||
//       currline == height - chrrchar + 1
//     ) {
//       process.stdout.write("*");
//       chrrchar++;
//     } else if (chrrchar == height) {
//       process.stdout.write("\n");
//       currline++;
//       chrrchar = 1;
//     } else {
//       process.stdout.write(" ");
//       chrrchar++;
//     }
//   }
// }
// Pattern(5);

// todo python

// def Pattern(height):
//     currline = 1
//     chrrchar = 1

//     for i in range(25):
//         print(" ", end="")
//         if (currline == chrrchar or chrrchar == 3 or currline == 6 - chrrchar) and chrrchar == height:
//             print("*")
//             currline += 1
//             chrrchar = 1
//         elif currline == chrrchar or chrrchar == 3 or currline == 6 - chrrchar:
//             print("*", end="")
//             chrrchar += 1
//         elif chrrchar == height:
//             print()
//             currline += 1
//             chrrchar = 1
//         else:
//             print(" ", end="")
//             chrrchar += 1

// Pattern(5)

// function Pattern(height) {
//   let currline = 1;
//   let chrrchar = 1;
//   for (;currline<=5; chrrchar=chrrchar+1) {
//       process.stdout.write(" ");
//     if (
//       (currline == chrrchar  && chrrchar == height
//     )else if(
//       chrrchar == 3 && chrrchar == height) else if(
//       chrrchar == 3 && chrrchar == height
//       currline == 6 - chrrchar&& ){
//       process.stdout.write("*");
//       process.stdout.write("\n");
//         currline=currline+1
//       chrrchar = 0;
//     }
//       else if(currline == chrrchar ||
//       chrrchar == 3 ||
//       currline == 6 - chrrchar){
//           process.stdout.write("*");
//       }
//       else if(chrrchar == height){
//           process.stdout.write(" ");
//           process.stdout.write("\n");
//            currline=currline+1
//       chrrchar = 0;
//       }
//       else{
//           process.stdout.write(" ");
//       }

//   }
// }
// Pattern(5);

// function Pattern(height) {
//   let currline = 1;
//   let chrrchar = 1;
//   for (; ; chrrchar = chrrchar + 1) {
//     if (currline == 6) {
//       break;
//     }
//     process.stdout.write(" ");
//     if (currline == chrrchar && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (chrrchar == 3 && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (currline == 6 - chrrchar && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (currline == chrrchar) {
//       process.stdout.write("*");
//     } else if (chrrchar == 3) {
//       process.stdout.write("*");
//     } else if (currline == 6 - chrrchar) {
//       process.stdout.write("*");
//     } else if (chrrchar == height) {
//       process.stdout.write(" ");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else {
//       process.stdout.write(" ");
//     }
//   }
// }
// Pattern(5);



// function Pattern(height) {
//   let currline = 1;
//   let chrrchar = 1;
//   for (;currline<=5; chrrchar=chrrchar+1) {
//       process.stdout.write(" ");
//     if (
//       (currline == chrrchar ||
//       chrrchar == 3 ||
//       currline == 6 - chrrchar) && chrrchar == height
//     ) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//         currline=currline+1
//       chrrchar = 0;
//     }
//       else if(currline == chrrchar ||
//       chrrchar == 3 ||
//       currline == 6 - chrrchar){
//           process.stdout.write("*");
//       }
//       else if(chrrchar == height){
//           process.stdout.write(" ");
//           process.stdout.write("\n");
//            currline=currline+1
//       chrrchar = 0;
//       }
//       else{
//           process.stdout.write(" ");
//       }
      
//   }
// }
// Pattern(5);

// TODO final with for loop

function Pattern(height) {
  let currline = 1;
  let chrrchar = 1;
  for (; ; chrrchar = chrrchar + 1) {
    process.stdout.write(" ");
    if (currline == 6) break;
    else if (currline == chrrchar && chrrchar == height) {
      process.stdout.write("*");
      process.stdout.write("\n");
      currline = currline + 1;
      chrrchar = 0;
    } else if (chrrchar == 3 && chrrchar == height) {
      process.stdout.write("*");
      process.stdout.write("\n");
      currline = currline + 1;
      chrrchar = 0;
    } else if (currline == 1 && chrrchar == height) {
      process.stdout.write("*");
      process.stdout.write("\n");
      currline = currline + 1;
      chrrchar = 0;
    } else if (currline == chrrchar) {
      process.stdout.write("*");
    } else if (chrrchar == 3) {
      process.stdout.write("*");
    } else if (currline == 2 && chrrchar == 4) {
      process.stdout.write("*");
    } else if (currline == 4 && chrrchar == 2) {
      process.stdout.write("*");
    } else if (currline == 5 && chrrchar == 1) {
      process.stdout.write("*");
    } else if (chrrchar == height) {
      process.stdout.write(" ");
      process.stdout.write("\n");
      currline = currline + 1;
      chrrchar = 0;
    } else {
      process.stdout.write(" ");
    }
  }
}
Pattern(5);

// TODO final with using while loop
// function Pattern(height) {
//   let currline = 1;
//   let chrrchar = 1;
//   while (1) {
//     process.stdout.write(" ");
//     if (currline == 6) break;
//     else if (currline == chrrchar && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (chrrchar == 3 && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (currline == 1 && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (currline == chrrchar) {
//       process.stdout.write("*");
//     } else if (chrrchar == 3) {
//       process.stdout.write("*");
//     } else if (currline == 2 && chrrchar == 4) {
//       process.stdout.write("*");
//     } else if (currline == 4 && chrrchar == 2) {
//       process.stdout.write("*");
//     } else if (currline == 5 && chrrchar == 1) {
//       process.stdout.write("*");
//     } else if (chrrchar == height) {
//       process.stdout.write(" ");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else {
//       process.stdout.write(" ");
//     }
//     chrrchar = chrrchar + 1;
//   }
// }
// Pattern(5);

// TODO Final using do while loop

// function Pattern(height) {
//   let currline = 1;
//   let chrrchar = 1;
//   do {
//     process.stdout.write(" ");
//     if (currline == 6) break;
//     else if (currline == chrrchar && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (chrrchar == 3 && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (currline == 1 && chrrchar == height) {
//       process.stdout.write("*");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else if (currline == chrrchar) {
//       process.stdout.write("*");
//     } else if (chrrchar == 3) {
//       process.stdout.write("*");
//     } else if (currline == 2 && chrrchar == 4) {
//       process.stdout.write("*");
//     } else if (currline == 4 && chrrchar == 2) {
//       process.stdout.write("*");
//     } else if (currline == 5 && chrrchar == 1) {
//       process.stdout.write("*");
//     } else if (chrrchar == height) {
//       process.stdout.write(" ");
//       process.stdout.write("\n");
//       currline = currline + 1;
//       chrrchar = 0;
//     } else {
//       process.stdout.write(" ");
//     }
//     chrrchar = chrrchar + 1;
//   } while (1);
// }
// Pattern(5);
