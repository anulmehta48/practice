//Q1.check the square is present or not in the sccond array
let arr1=[2,4,6,8]
let arr2=[4,16,36,64]

function checksquare(arr1,arr2){
  if(arr1.length !=arr2.length){
    return false;
  }
  let frq1={}
  let frq2={}

  for(let val of arr1){
    if(frq1[val]){
      frq1[val]++
    }else{
      frq1[val]=1
    }
  }
  for(let val of arr2){
    if(frq2[val]){
      frq2[val]++
    }else{
      frq2[val]=1
    }
  }

  for(let key in frq1){
    if(frq1[key] != frq2[key**2]){
        return false;
    }

    if(frq2[key**2]!=frq1[key]){
        return false
    }
  }
  return true;
}
console.log(checksquare(arr1,arr2))
// here is Tc is O(n)




// Q2.check anangrams
// let str1 = ["A", "N", "U", "L"]
// let str2 = ["L", "U", "N", "A"]
// let str1=[1,2,4]
// let str2=[2,4,15]

// function checkAnagram(str1, str2) {
//     if (str1.length != str2.length) {
//         return false;
//     }
//     let frq1 = {}
//     let frq2 = {}

//     for (let val of str1) {
//         if (frq1[val]) {
//             frq1[val]++
//         } else {
//             frq1[val] = 1
//         }
//     }
//     for (let val of str2) {
//         if (frq2[val]) {
//             frq2[val]++
//         } else {
//             frq2[val] = 1
//         }
//     }

//     for (let key in frq1) {
//         if (frq1[key] != frq2[key]) {
//             return false;
//         }

//         if (frq2[key] != frq1[key]) {
//             return false
//         }
//     }
//     return true;
// }
// console.log(checkAnagram(str1,str2))
//here is Tc is O(n)


// Q3.find the pair sum of target in the array
// let arr=[12,18,25,30,41,50]
// let target=75
// function pairsum(arr,target){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         if(arr[i]+arr[j] == target){
//             return [i,j]
//         }else if(arr[i]+arr[j]<target){
//             i++
//         }else{
//             j--
//         }
//     }
//     return false
// }
// console.log(pairsum(arr,target))
// //here is TC is O(n)


// Q4.find the pairsum closesss to the target in given array:
// let arr=[4,5,12,25,63,70];
// let target=90;

// function closedsum(arr,target){
//     let i=0;
//     let j=arr.length-1;
//     let diff=Number.MAX_VALUE;
//     let a;
//     let b;
//     while(i<j){
//         let pairsum=arr[i]+arr[j]
//         let currsum=Math.abs(pairsum-target)
//         if(currsum<diff){
//             diff=currsum;
//             a=arr[i];
//             b=arr[j];
//         }else if(arr[i]+arr[j]<target){
//             i++
//         }else{
//             j--
//         }
//     }
//     return [a,b]
// }
// console.log(closedsum(arr,target))
// //here is Tc is O(n)

// Q5.find the maximum kth subset of the array:
// let arr=[3,5,8,10,9,25,14,20]
// let k=4
// function maximumsubset(arr,k){
//    let currsum=0;
//    let maxsum=0;
//    for(let i=0;i<k;i++){
//     currsum+=arr[i]
//    }
//    maxsum=currsum;
//    for(let i=k;i<arr.length;i++){
//     currsum+=arr[i];
//     currsum-=arr[i-k]
//     maxsum=Math.max(currsum,maxsum)
//    }
//    return maxsum
// }
// console.log(maximumsubset(arr,k))

// Q6.find the maximum vowel subset of array ;
// let str=["a","n","u","l","m","e","h","t","a"]
// let str="anulmehta"
// let k=4

// function check(ch){
//     if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
//         return true;
//     }
//     return false;
// }

// function vowelsubset(str,k){
//     let count=0;
//     let maxcount=0;
//     for(let i=0;i<k;i++){
//         if(check(str[i])){
//             count++
//         }
//     }
//     maxcount=Math.max(maxcount,count)
//     for(let i=k;i<str.length;i++){
//         if(check(str[i])){
//             count++
//         }
//         if(check(str[i-k])){
//             count--
//         }
//         maxcount=Math.max(maxcount,count)
//     }
//     return maxcount;
// }
// console.log(vowelsubset(str,k))


// Q7. swap two number without any temp variable;
// let a=20;
// let b=30;

// a=a+b
// b=a-b
// a=a-b
// console.log("a =",a,"","b =",b)

// Q8. swap two string without any third temp variable;
// let a="good";
// let b="mood";

// a=a.concat(b) //this is add together
// b=a.slice(0,4)//this take only 0to3 element and rest element are removed
// a=a.slice(4)// this take 4toall element and 0to3 removed
// console.log("a =",a,"","b =",b)


// Q9.reverse the array without any temp or third variable;
// let arr=[2,5,8,9,11,25,56,44,55]
// function reverseArray(arr){
//    let i=0;
//    let j=arr.length-1;
//    while(i<j){
//     arr[i]=arr[i]+arr[j];
//     arr[j]=arr[i]-arr[j];
//     arr[i]=arr[i]-arr[j];
//     i++;
//     j--;
//    }
//    return arr
// }
// console.log(reverseArray(arr))

// Q10. reverse the cyclically roated array;
// let arr=[1,2,3,4,5,6,7]  //[5,6,7,1,2,3,4]
// let k=2
// function cycRotated(arr,i,j){
//     while(i<j){
//         arr[i]=arr[i]+arr[j];
//         arr[j]=arr[i]-arr[j];
//         arr[i]=arr[i]-arr[j];
//         i++;
//         j--
//     }
//     return arr
// }
// arr=cycRotated(arr,0,arr.length-1)
// arr=cycRotated(arr,0,k-1)
// arr=cycRotated(arr,k,arr.length-1)
// console.log(arr)


// Q11.find the maximum sum of two element of array;
// let arr=[22,55,32,4,15,62,25];
// function maxtwosum(arr){
//     let sum=0;
//     let max=0;
//     let smax=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             smax=max;
//             max=arr[i];
//         }else if(arr[i]>smax){
//             smax=arr[i]
//         }
//         sum=max+smax
//     }
//     return [sum,[max,smax]]
// }
// console.log(maxtwosum(arr))


//Q12.find the maximum or heighest frequency of elemnet of array
// let arr=[2,5,6,3,5,2,5,14,2,5,7,9,5,1,2,4,5];
// function maxfreq(arr){
//     let mp=new Map()
//     for(let i=0;i<arr.length;i++){
//         let x=arr[i]
//         if(mp.has(x)){
//             mp.set(x,mp.get(x)+1)
//         }else{
//             mp.set(x,1)
//         }
//     }
//     let maxfre=0;
//     let ans=0;
//     mp.forEach((value,key)=>{
//         if(value>maxfre){
//             maxfre=value
//             ans=key
//         }else if(value==maxfre){
//             if(key<ans){
//                 ans=key
//             }
//         }
//     })
//     return ans
// }
// console.log(maxfreq(arr))

// // Q13.find the unique element of array;
// let arr=[1,1,1,2,2,2,3,3,3,4,4,4,5,6]
// function unique(arr){
//     let result=[]
//     let frq={}
//     for(let val of arr){
//         if(frq[val]){
//             frq[val]++
//         }else{
//             frq[val]=1
//         }
//     }
//     for(let val in frq){
//         if(frq[val]==1){
//             result.push(val)
//         }
//     }
//     return result
// }
// console.log(unique(arr))


// // Q13.find the duplicate element of array;
// let arr=[1,1,1,2,2,2,3,3,3,4,4,4,5,6]
// function unique(arr){
//     let result=[]
//     let frq={}
//     for(let val of arr){
//         if(frq[val]){
//             frq[val]++
//         }else{
//             frq[val]=1
//         }
//     }
//     for(let val in frq){
//         if(frq[val]>1){
//             result.push(val)
//         }
//     }
//     return result
// }
// console.log(unique(arr))

// Q14.find the how many pair sum that is equal to the targate
// let arr=[1,2,5,7,8,4,16,4,5,26,4,1]
// let k=42

// function paisum(arr,k){
//     let ans=0
//     let mp=new Map()
//     for(let i=0;i<arr.length;i++){
//         let x=arr[i];
//         let y=k-x;
//         if(mp.has(y)){
//             ans+=mp.get(y)
//         }
//         if(mp.has(x)){
//             mp.set(x,mp.get(x)+1)
//         }else{
//             mp.set(x,1)
//         }
//     }
//     return ans ;
// }
// console.log(paisum(arr,k))

// Q15.check input is integer
// function check(input){
//     let pattern=/^-?[0-9]+$/
//     let result=pattern.test(input)
//     return result
// }
// console.log(check(12))


// Q16.foobar and Fizz Buzz print
// function print(n){
//     let result=[]
//     for(let i=1;i<=n;i++){
//         if(i%3==0&& i%5==0){
//             result.push("FooBar")
//         }else if(i%3==0){
//             result.push("Foo")
//         }else if(i%5==0){
//             result.push("Bar")
//         }else{
//             result.push((i+""))
//         }
//     }
//     return result
// }
// console.log(print(15))

// Q17 Merge sort algorithm
// let arr=[10,9,8,7,6,5,4,3,2,1]
// function mergeSort(arr,start,end){
//     let mid=Math.floor(start+(end-start)/2)
//     if(start>=end) return;

//     mergeSort(arr,start,mid);
//     mergeSort(arr,mid+1,end);
//     merge(arr,start,mid,end);
//     return arr
// }

// function merge(arr,start,mid,end){
//     let newArray=new Array();
//     let index1=start;
//     let index2=mid+1;
//     let newarrayIndex=0;

//     while(index1<=mid && index2<=end){
//         if(arr[index1]<=arr[index2]){
//             newArray[newarrayIndex]=arr[index1];
//             newarrayIndex++;
//             index1++;
//         }else{
//             newArray[newarrayIndex]=arr[index2];
//             newarrayIndex++;
//             index2++
//         }
//     }
//     while(index1<=mid){
//         newArray[newarrayIndex]=arr[index1];
//         newarrayIndex++;
//         index1++
//     }
//     while(index2<=end){
//         newArray[newarrayIndex]=arr[index2];
//         newarrayIndex++;
//         index2++
//     }

//     let j=start;
//     for(let i=0;i<newArray.length;i++){
//         arr[j]=newArray[i];
//         j++
//     }
// }
// console.log(mergeSort(arr,0,9))
// console.log(arr)


//Q18 Quick sort alogorithim

// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// function swap(arr, left, right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp
// }

// function partition(arr, low, high) {
//     let pivot_element = arr[high];
//     let i = low - 1;

//     for (let j = low; j < arr.length; j++) {
//         if (pivot_element > arr[j]) {
//             i++;
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i + 1, high)
//     return i + 1;
// }

// function quicksort(arr, low, high) {
//     if (low < high) {
//         let pivot_index = partition(arr, low, high)
//         quicksort(arr, low, pivot_index - 1);
//         quicksort(arr, pivot_index + 1, high)
//     }
//     return arr
// }
// console.log(quicksort(arr, 0, 9))



// Q19. selection sort algorithm
// let arr=[10,9,8,7,6,5,4,3,2,1]
// function selectionsort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         if(minIndex!=i){
//             let temp=arr[minIndex];
//             arr[minIndex]=arr[i];
//             arr[i]=temp
//         }
//     }
//     return arr
// }
// console.log(selectionsort(arr))

// Q20.Insertion sort algorithms;
// let arr=[10,9,8,7,6,5,4,3,2,1]
// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp =arr[i]
//         let j=i-1

//         while(j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp
//     }
//     return arr
// }
// console.log(insertionsort(arr))

// Q21. Bubble sort Algorithms;
// let arr=[10,9,8,7,6,5,4,3,2,1]
// function bubblesort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let isswap=false;
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//                 isswap=true;
//             }
//         }
//         if(isswap==false){
//             break;
//         }
//     }
//     return arr
// }
// console.log(bubblesort(arr))



// var longestCommonPrefix = function(str) {

//     if(str.length == 0){
//         return ""
//     }
//     if(str.length == 1){
//         return str[0]
//     }
//     let i =0
//     str.sort()
//     let end = str[0].length
//     while(i<end && str[0][i]==str[str.length-1][i])
//         i++
//         let store = str[0].substring(0,i)
//     return store

// }

// console.log(longestCommonPrefix(["low", "jower", "kuter"]))