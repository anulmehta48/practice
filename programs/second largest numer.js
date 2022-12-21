// let n = [6]
// let arr = [12, 35, 1, 10, 34, 1]
// function print2largest(arr, n) {
//   let a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (a < arr[i])
//       a = arr[i]
//   }
//   let b =0// -2454635434
//   for (let i = 0; i < arr.length; i++) {
//     if (b < arr[i] && arr[i] != a)
//       b = arr[i];
//       // console.log(b)
//   }
//   if (b == 0)//-2454635434
//     return -1;

//   return b;
// }
// console.log(print2largest(arr, n))


let arr = [12, 35, 1, 10, 34, 1]
function secondLarest(arr){
    let max=0;
    let smax=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            smax=max;
            max=arr[i]
       }else if(arr[i]>smax && arr[i]!=max){
        smax=arr[i]
       }
    }
    return smax
}
console.log(secondLarest(arr))




// function print(arr,n){
//   let result=[]
//   for(let i=0;i<arr.length;i+2){
//       result.push(arr)
//   }
//   return result
//   }




// for(let i=1;i<=10;i++){
// 	if(i%2==0){
// 		console.log("The all even numbers in first 50 natural numbers is = ",i)
// 	}
// }
