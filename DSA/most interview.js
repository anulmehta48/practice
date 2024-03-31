//Q1 write a program is Swap the two number a and b without using thrid or temp valriable;
//not allowed the temp=a
//a=b
//b=temp
//and not allowed the JS functions and functionalies as well 
//solve the simple way of mathematical thinking ways
// let a=5
// let b=10
// //ans:-
// a=a+b // (5+10) //a=15 | b=10
// b=a-b // (15-10) //b=5 | a=15
// a=a-b // (15-5) //a=10 | b=5
// console.log("a =",a,"","b =",b)


// Q2 write a program Swap the two string a and b without using any third or temp variable;
// let a="some"
// let b="good"
// //ans:-
// a=a.concat(b) // first we concat or add both string together by using concat // (a=a+b)
// console.log(a)
// b=a.slice(0,4) // second we removed b orignal element from combind string  by using slice //(b=a-b) //it removed last 4,5,6,7 indexes
// console.log(b)
// a=a.slice(4) // third we removed a orignal element from combind string by using slice //(a=a-b)// it remove start 0 1 2 3 indexes
// console.log(a)
// console.log("a =",a,"","b =",b)


//Q3 write a program to Reverse the array without using third array like =[1,2,3] =>[3,2,1]
// Ans:- this is very most asked question in the every interviews ****
let arr=[12,20,26,24,41,36,21]
function swapNumber(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--;  
    }
    return arr
}
console.log(swapNumber(arr))


//Q4 Wite a JS program to cyclically rotate the an array -rotate(arr,d) that rotates by d elements:
// example: arr=[1,2,3,4,5]  rotated by 2 d =>[4,5,1,2,3]
//here is Time Complexity is O(N)
// let arr=[36,37,40,45,50,55,60,65] //=>[60,65,36,37,40,45,50,55]
// let k=2
// function rotateArray(arr,i,j){
//     while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++;
//         j--;
//     }
//     return arr
// }
// arr=rotateArray(arr,0,arr.length-1)// reverse complete all array
// arr=rotateArray(arr,0,k-1) // first K elements reverse
// arr=rotateArray(arr,k,arr.length-1) // last K elements reverse
// console.log(arr)





//Q5 write a program for Given an array of repetated elements ,returns the most repetated elements from array or 
//heighest Frequency Count of elements in the array:-
// let arr=[23,56,678,12,2,34,23,98,12,3,12,2,12]
//Ans:- ths is solved by Frequency count method 
// let arr=[23,56,678,12,2,34,23,98,12,3,12,2,12]
// function heighestFrq(arr){
//     let mp=new Map()
//     for(let i=0;i<arr.length;i++){
//         let x=arr[i]
//         if(mp.has(x)){
//             mp.set(x,mp.get(x)+1)
//         }else{
//             mp.set(x,1)
//         }
//     }
//     // console.log(mp)
//     let maxFrq=0;
//     let ans=0;
//     mp.forEach((value,key)=>{
//         if(value>maxFrq){
//             maxFrq=value
//             ans=key
//         }else if(value==maxFrq){
//             if(key<ans){
//                 ans=key
//             }
//         }
//     })
//     return ans
// }
// console.log(heighestFrq(arr))


//this is solved by using normal brute force ;
//here is Time complexity is O(n^2)
// let arr=[23,56,678,12,2,34,23,98,12,3,12,2,12]
// function mostHeighFre(arr){
//     let mf=arr[0]
//     let maxcount=0;
//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count++
//             }
//         }
//         if(maxcount<count){
//             maxcount=count;
//             mf=arr[i]
//         }
//     }
//     return mf
// }
// console.log(mostHeighFre(arr))




// Q6 write a program to find the Maximum sum of two elements in an array:-
// OR Find the Largest and second Largest elemenet form array
// example => arr=[12,4,67,2,34,] => ..... (67,34)
// ANS :
//step 1: maintain two variable : largest = -INFINITY and secondLargest= - INFINITY
//step 2: loop over the array and if you find a number that is grater than "Largest" then upadte the "secondLarest=largest" and  update "largest=arr[i]"
//step 3: Else check if arr[i] is grater than second largest ... if yes then update the second Largest 
// let arr = [12, 4, 67, 2, 34,]
// function maximumTwosum(arr) {
//     let sum = 0;
//     let max = 0;
//     let smax = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             smax = max;
//             max = arr[i]
//         } else if (arr[i] > smax) {
//             smax = arr[i]
//         }
//         sum = max + smax
//     } 
//     return [sum,[max,smax]]
// }
// console.log(maximumTwosum(arr))


//Q7. find the Unique element from the array using frequency counter
//this is using by frequency counter method
//here is Time complexity is O(n)
// let arr=[1,2,5,1,4,5,2,7,8,1,2,5,9]
// function uniqueEle(arr){
//     let freq={}
//     let result=[]
//     for(let val of arr){
//         if(freq[val]){
//             freq[val]++
//         }else{
//             freq[val]=1
//         }
//     }
//     for(let val in freq){
//         if(freq[val]==1){
//             result.push(val)
//         }
//     }
//     return result
// }
// console.log(uniqueEle(arr))


//now we can solve this by using Map or has:-
// let arr=[1,2,5,1,4,5,2,7,8,1,2,5,9]
// function uniqueEle(arr){
//   let mp=new Map()
//   for(let i=0;i<arr.length;i++){
//     let x=arr[i]
//     if(mp.has(x)){
//         mp.set(x,mp.get(x)+1)
//     }else{
//         mp.set(x,1)
//     }
//   }
//   let ans=[]
//   mp.forEach((value,key)=>{
//     if(value==1){
//         ans.push(key)
//     }
//   })

//   if(ans.length==0){
//     ans.push(-1)
//   }
//   ans.sort((a,b)=>a-b) // some time test cases demand this ways
//   return ans

// }
// console.log(uniqueEle(arr))

//here now if we have to find the duplicate element in array the we can some slight change in this code 
//this is the Opposite of unique element 
// let arr=[1,2,5,1,4,5,2,7,8,1,2,5,9]
// function duplicate(arr){
//   let mp=new Map()
//   for(let i=0;i<arr.length;i++){
//     let x=arr[i]
//     if(mp.has(x)){
//         mp.set(x,mp.get(x)+1)
//     }else{
//         mp.set(x,1)
//     }
//   }
//   let ans=[]
//   mp.forEach((value,key)=>{
//     if(value>1){
//         ans.push(key)
//     }
//   })

//   if(ans.length==0){
//     ans.push(-1)
//   }
// //   ans.sort((a,b)=>a-b) // some time test cases demand this ways
//   return ans

// }
// console.log(duplicate(arr))


//Q8. find the pair whose sum is equal to target by using frequecy counter or map
//this the brute force apporach usning for loop
//here is Time Complexity is O(n^2)
// let arr=[1,2,5,7,8,4,16,4,5,26,4,1]
// let k=42
// function pairsum(arr,k){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==k){
//                 result.push(arr[i],arr[j])
//             }
//         }
//     }
//     return result
// }
// console.log(pairsum(arr,k))



//this question may be asked total pair count how many then you have to do like this
// let arr=[1,2,5,7,8,4,16,4,5,26,4,1]
// let k=20
// function pairsum(arr,k){
//     let count=0  
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//            if(arr[i]+arr[j]==k){
//             count++
//            }
//         }
//     }
//     return count //this time we returning counts of 
// }
// console.log(pairsum(arr,k))



//but we can solve this by using map or has 
//here is time is complexity is O(n)
// let arr=[1,2,5,7,8,4,16,4,5,26,4,1]
// let k=20
// function pairsum(arr,k){
//     let ans=0;
//     let mp=new Map()
//     for(let i=0;i<arr.length;i++){
//         let x=arr[i]
//         let y=k-x
//         if(mp.has(y)){
//             ans+=mp.get(y)//add in ans
//         }
//         if(mp.has(x)){//add in freq 
//             mp.set(x,mp.get(x)+1)
//         }else{
//             mp.set(x,1)
//         }
//     }
//     return ans
   
// }
// console.log(pairsum(arr,k))



//Q9. check the given input is Integer or not by  using regex
// function check(input){
// let pattern=/^-?[0-9]+$/
// let result=pattern.test(input)
// return result
// }
// console.log(check([25]))




//Q10 is Foo Bar problem print 
// function fooBar(input){
//     let remainder3=input%3
//     let remainder5=input%5
//     if(remainder3==0 && remainder5==0){
//         console.log("FooBar")
//     }else if(remainder3==0){
//         console.log("Foo")
//     }else if(remainder5==0){
//         console.log("Bar")
//     }else{
//         console.log("Nothing")
//     }
// }
// fooBar(43)


// prnt the fizz Buzz 
// function printfizzbuzz(n){
//     let ans=[]
//     for(let i=1;i<=n;i++){
//         if(n%3==0 && n%5==0){
//             ans.push("FizzBuzz")
//         }else if(n%3==0){
//             ans.push("Fizz")
//         }else if(n%5==0){
//             ans.push("Buzz")
//         }else{
//             ans.push(i+"")
//         }

//     }
//     return ans
// }
// console.log(printfizzbuzz(15))

