//this is simple apporach or brute force 
// function sumNums (num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum; 
//   } 
// console. log(sumNums(5));


//this is Recursion Apporach
// function recurSum(n)
// {
//     if (n <= 1)
//         return n;
//         // console.log(n)
//     return n + recurSum(n - 1);
// }
// console.log(recurSum(5))


//this is simple or brute force apporach
// let arr=[25,41,52,23,7,75,42,49,96,43]
// function divisibilty(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%7==0){
//             console.log(arr[i]+" "+"yes")
//         }else{
//             console.log(arr[i]+" "+"no")
//         }
//     }
//     return arr
// }
// console.log(divisibilty(arr))

//this is recursion apporach//
// let arr=[25,41,52,23,7,75,42,49,96,43]
// function divisibleBy7(arr){
//     if((arr.length)==0) {
//         return;
//     }else{
//         let ele=arr.pop()
//         if(ele%7==0){ 
//             console.log(ele+" "+"yes")
//         }else{
//             console.log(ele+" "+"no")
//         }
//         divisibleBy7(arr)
//     }
//     // return arr
// }
// console.log(divisibleBy7(arr))

// this is simple
// function countDown(n){
//     // for(let i=n;i>0;i--){
//     //     console.log(i)
//     // }
//     while(n>0){
//         console.log(i=n)
//         n--
//     }
//     // return n
// }
// console.log(countDown(5))

// this is recursion
// function countDown(n){
//     if(n==0){
//         return;  
//     }else{
//         console.log(n)
//         n--
//     }
//     countDown(n)
// }
// console.log(countDown(5))


// function sumUptoN(n){
//     if(n==0){ //this is base case
//         return 1
//     }else{
//         return n +sumUptoN(n-1)
//     }
// }
// console.log(sumUptoN(8))

// normal way
// function product(n){
//     let total=1
//     for(let i=0;i<n.length;i++){
//         total=total*n[i]
//     }
//     return total
// }
// console.log(product([2,5,8]))

//using recursion 
// function prod(arr){
//     if(arr.length ==0) return 1
//     return arr[0]*prod(arr.splice(1))
// }
// console.log(prod([3,5,6]))

//using math fuctions
// function pow(b,exp){
//     if(exp==0) return 1
//     return b*pow(b,exp-1)
// }
// console.log(pow(2,5))



// Reverse a LinkedList using recursion , given is headNode

// class LinkedListNode {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
        
//     }
// }

// let headNode = new LinkedListNode(10);
// headNode.next = new LinkedListNode(20);
// headNode.next.next = new LinkedListNode(30);

// console.log(headNode);


// const reverseFunc = (headNode) => {
    
//     if(headNode == null || headNode.next == null)
//         return headNode;
    
//     let newHead = reverseFunc(headNode.next);
//     headNode.next.next = headNode;
//     headNode.next = null;
    
//     return newHead;
// }

// console.log("");

// console.log("Reversed LinkedList");
// console.log(reverseFunc(headNode));



//******24/11/2022 by pk sir*******
//we have to first letter make capital of array of string and return new array with string
//we now can solve by this using for loop
// let arr = ["abc","pqr","xyz","jkl"] 
// let newarray=[] 
// function capitalLetter(arr){
//     for(let i=0;i<arr.length;i++){
//        let s=arr[i][0].toUpperCase() + arr[0].slice(1)
//        console.log(s)
//        newarray.push(s)
//     }
//     return newarray
// }
// console.log(capitalLetter(arr))
//this is giving wrong ans do not use this 


// //now we can solve by recusrions 
// let arr = ["abc","pqr","xyz","jkl"] 
// function capitalLetter(arr){
//     let newarray=[] 
//     if(arr.length==0) return []
//     let s=arr[0][0].toUpperCase() +arr[0].slice(1)
//     // console.log(s)
//     newarray.push(s)
//     // console.log(newarray)
//     return newarray.concat(capitalLetter(arr.slice(1)))
// }
// console.log(capitalLetter(arr))


//second question reverse each string in a given manner example game = emag
// reverese all the element in there place 
// let str = "hello this is me ok"
// function reverse(str){
//     if(str.length == 0) return ""
//     return reverse(str.slice(1))+str[0]
// }
// function revSentWords(str){
//     let words = str.split(" ")
//     for(let i = 0; i<words.length; i++){
//         words[i] = reverse(words[i])
//         words = words.join(" ")
//         return words
//     }
// }
// console.log(revSentWords(str))


// object map diffrece
// object keys are stirngs "name" , "1" both are stirng 
// map me keys is anything numbers, array, object etc
// map ka size/length easy to get
// object me hamesa order maintan nahi hota he 
//object ka koi order nahi he unorder me save hota he 
//while map me order of keys fixed hota he 
//map me order of kesy manintan hota he to easy to iterat hota he
//

//question 3 print the number of duplicate in the array 

// //create hash map 
// let arr3  = [23,3,2,1,3,1]
// function duplicates(arr3){
//     let frequencies = new Map()
//     for(let i=0; i< arr3.length; i++){
//         if(frequencies.get(arr3[i]) == undefined)  frequencies.set(arr3[i],1)
//         else frequencies.set(arr3[i], frequencies.get(arr3[i])+1)
//     }
//     console.log(frequencies)

// let res = []
// for(let pairs of frequencies){
//     if(pairs[1] > 1) res.push(pairs[0])
// }
// console.log(res)
// }
// duplicates(arr3)





