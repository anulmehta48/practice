//this is Bubble sort algorithm
//here is TC is worst O(n^2)
//here is TC is Best omega(n) // when swapping not happens
//here is TC is Avg theta(n^2)
//here is SC is O(1)

//Now write the code of Bubble sort Algorithms
// this is the actual bubble sort in this we are doing all camparing all element and swaping the elements
// let arr=[2,5,8,7,9,1,5,3]
// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){ //first loop used for  how many will happen passess/rounds  i.e-N-1
//         for(let j=0;j<arr.length-1;j++){// second loop used for Itartion for comparison i.e- N-1
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble(arr))
// here is nested loop used so that Time complexity is O(n^2)
// here is no extra space is used so Space complexity is O(1)

//but we can mone optimize this code in more efficient way because we do not have to go for already shorted element comparison
// so that we can only go for n-1-i comparison so that
// let arr=[2,5,8,7,9,1,5,3]
// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){ // here is n-1-i used for only needed comparison
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble(arr))
//here is nested loop used so that Time complexity is O(n^2)
// here is no extra space is used so Space complexity is O(1)

//we can also more optimize this code because suppouse when the our array will be sorted in only 2-3 passes
// that means other all element are sorted and we are waisting the time of execution in camparison all elements threw the passess
// so that we can reduce this camparison using flag variable that means when swaping not happen then loop will break and program will be end
// let arr=[2,4,8,6,10]
// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let iswap=false //flag in false means 0 or swapining not happens
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 iswap=true //flag in false means 1 or swapining happens
//             }
//         }
//         if(iswap==false){//if sawaping not happen
//             break;
//         }
//     }
//     return arr
// }
// console.log(bubble(arr))
//here is nested loop used so that Time complexity is O(n^2) but of swaping not happens then best Time complexity is O(n)
// here is no extra space is used so Space complexity is O(1)
