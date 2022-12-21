//Q. we have to sort the array in assending order without using inbuild functions
//Ans:-this is using nested for loop //here TC is O(n^2) because we used nested loop for (n*n)
// let arr=[2,4,5,9,3,1,7,9,2]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let temp=0
//         if(arr[i]>arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)


//this is using only one loop://here is TC also O(n^2) because of -1 is itrate loop n squre time (n*n)
// let arr=[2,4,5,9,3,1,7,9,2]
// for(let i=0;i<arr.length;i++){
//     let temp=0
//     if(arr[i]>arr[i+1]){
//         temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//         console.log(arr)
//         i=-1 // this is used for make i to -1 and after the loop it will make again 0 start
//     }
// }
// console.log(arr)



//print the star ***
// for(let i=1;i<=6;i++){
//     for(let j=1;j<=5;j++){
//     process.stdout.write(' ');
//     process.stdout.write('*');
    
//     }
//   console.log();
    
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     process.stdout.write(' ');
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     process.stdout.write('*');
//   }
//   console.log();
// }


// let a=[5,6,3]
// let b=[8,4,2]
// function findSum(a,b){
//   let total=0
//   let t1=[]
//   let t2=[]
//   for(let i=0;i<a.length;i++){
//     t1=t1+a[i]
//     console.log(t1)
//   }
//   for(let i=0;i<b.length;i++){
//     t2=t2+b[i]
//     console.log(t2)
//   }
// }
// console.log(findSum(a,b))


// let a=[5,6,3]
// let b=[8,4,2]
// function findSum(a,b){
//   let total=0
//   for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//       console.log(i)
//       console.log(j)
//     }
//   }
//   return total
// }
// console.log(findSum(a,b))