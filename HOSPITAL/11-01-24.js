//Find the unique elemens and print [1,2,3,4,5]
// let arr=[1, 2, 2, 3, 4, 4, 5]
// function unique(arr) {
//   let freq = {};
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]]) {
//       freq[arr[i]]++;
//     } else {
//       freq[arr[i]] = 1;
//     }
//   }
//   for (let key in freq) {
//     if (freq[key] == 1) {
//       result.push(key);
//     }
//   }
//   return result;
// }
// console.log(unique(arr));



// solution 
let arr = [1, 2, 2, 3, 4, 4, 5];
function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(unique(arr));




// write the program for number add the hipen if beetween two even number
// let arr = "025468";
// function Mark(arr) {
//   let newNumber = arr.split("");
//   let result = "";
//   console.log(newNumber);
//   for (let i = 0; i < newNumber.length; i++) {
//     if (newNumber[i] % 2 == 0) {
//       result += newNumber[i] + "-";
//     } else {
//         result+=newNumber[i]
//     }
//   }
//   return result;
// }
// console.log(Mark(arr));


// solution 

// let arr = "025468";

// function Mark(arr) {
//   let newNumber = arr.split("");
//   let result = "";

//   for (let i = 0; i < newNumber.length; i++) {
//     let currentDigit = parseInt(newNumber[i]);

//     if (currentDigit % 2 === 0 && i < newNumber.length - 1 && parseInt(newNumber[i + 1]) % 2 === 0) {
//       result += currentDigit + "-";
//     } else {
//       result += newNumber[i];
//     }
//   }

//   return result;
// }

// console.log(Mark(arr));
