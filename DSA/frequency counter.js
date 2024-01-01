//what is the Frequency Counter= Its is store frequency of each or every elememt that are how many time present in the array
//so how we can find so go with is apporache:-

//traverse throw the array elements and 
//count the frequencies

// *********
//this is called Bruite force or simple apoarch 
//here we are using two for loop or loop inside loop or nested loop so that 
//for this apporach is time complexity is O(n^2) // nested loop is here so (n*n)

// let arr = [5, 2, 4, 5, 6, 2, 5, 4, 5]
// function frequnecyCount(arr) {
//     let visited =[]
//     for (let i = 0; i < arr.length; i++) {
//         let count=0
//         if(visited.includes(arr[i])) continue
//         for (let j = i ; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++
//             }
//         }
//         visited.push(arr[i])

//         console.log(arr[i] + " " + count)
//     }
//     return arr
// }
// frequnecyCount(arr)






// now we want to O(n) time or optimized apporach  so we use like this
//first we have to take a frequncy counter or a empty Object // let freCounter={}  this is called hash or map also.
//secound we have to itarate the full array this this time which element are founded then we make it 1 frequecy
// trird check again if next time which elemets are founded if it is new then make it 1 and if it already present then increse the count++ or 2

// let arr=[5,3,6,5,3,7]
// let freCounter={}
// function frequency(arr){
//     for(let val of arr){
//         if(freCounter[val]){
//             freCounter[val]++
//         }else{
//             freCounter[val]=1
//         }
//     }
//     return freCounter
// }
// console.log(frequency(arr))

//here the Time Compexity is O(n) and space Compexity is O(n)
//we only itarate the element only once so O(n) Time Compexity
//we are takeing here one Frequecny count or obj so O(n) Space Compexity

// let arr=[5,3,6,5,3,7]
// let freCounter={}

// function frequency(arr){
//     for(let i of arr){
//         if(freCounter[i]){
//             freCounter[i]++
//         }else{
//             freCounter[i]=1
//         }
//     }
//     return freCounter
// }
// console.log(frequency(arr))

// we have multiple type various questions are avalible so you can consfused many so much time
//like what we have to use or what we have to not use for this
// because we have to solve the problem in optimal way as well as Optimal Time Or Space Coplexity also


//example :-
//we have to find the frequecy from one array to another array in array of element 1 is square of array of 2 elements are same or not
//here we apply fisrt brute Apporach in this aporach we first check the the both array have same length is avaliable or not
//if same then check the square of array 1 elements is does present in array of 2 elements
//but in this aporach in TC is O(n^2)
//
// let arr1=[2,3,4,6]
// let arr2=[36,9,16,4]
// function same(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(let i=0;i<arr1.length;i++){
//         // console.log(i)//this is for for loop iteration one by one 
//         let correctIndex=arr2.indexOf(arr1[i]**2) //this line check where is square element index is present in arr2 of arr1 element
//         console.log(correctIndex)//this is for index of square element
//         if(correctIndex ==-1){
//             return false
//         }
//        a=arr2.splice(correctIndex,1)
//        console.log(a)//if element is present then delete that 
//     }
//     return true
// }
// console.log(same(arr1,arr2))
// this is sloved but TC is O(n^2)


//****BEST WAY TO SOLVE THE PROBLEM**************//
// let arr1=[2,3,4,6]
// let arr2=[4,9,16,36]
// function same(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     let freqCounter1={}
//     let freqCounter2={}

//     for(let val of arr1){
//         freqCounter1[val]=(freqCounter1[val]||0)+1
//     }
//     for(let val of arr2){
//         freqCounter2[val]=(freqCounter2[val]||0)+1
//     }
//     for(let key in freqCounter1){
//         // console.log(key)
//         if(!(key**2 in freqCounter2)){
//             return false
//         }
//         if(freqCounter2[key**2] !== freqCounter1[key]){
//             return false
//         }
//     }
//     return true
// }
// console.log(same(arr1,arr2))
//here is Time Complexity is O(n) //taking for loop for itrate elements
//here is Space Complexity is O(2n) =O(n) //takeing frequcounter



// exaple of Anagram :-
//we have to check the these string are anagram or not
//so here also be can apply brute force apporach
//we simple check the first length of the strings
//sort the srting and matched the charctar by using loop
//here the TC is O(n^2)

// let str1=["h","e","l","l","o"]
// let str2=["o","l","l","e","h"]
// function AnaGrams(){
//     //get length of both string is same
//    let n1=str1.length
//    let n2=str2.length
//    //if both string do not have same length
//    //then these string are not anagram
//    if(n1!==n2){
//     return false
//    }
//    //sort the both string
//     str1.sort()
//     str2.sort()
//   // compare both string are same or not
//    for(let i=0;i<n1;i++){
//     if(str1[i] !=str2[i]){
//         return false
//     }
//    }
//    return true
// }
// console.log(AnaGrams(str1,str2))
// // here TC is O(nlogn)



// let str1=["h","e","l","l","o"]
// let str2=["o","l","l","e","h"]
// function Anagaram(str1,str2){
//     //create two counter array and intilize
//     //all values as 0
//     let count1= new array(26);//no_of_character this is means O(26)=O(1)
//     console.log(count1)
//     let count2= new array(26); //no_of_character
//     for(let i=0;i<no_of_char;i++){
//         count1[i]=0
//         count2[i]=0
//     }

//     //for each charcater in input string
//     // increment count in the corresponding
//    // count array
//    for(let i=0;i<str1.length && i<str2.length;i++){
//     count1[str1[i]].charCodeAt(0)++
//     count2[str2[i]].charCodeAt(0)++

//     //if both string are diffrent length
//     //removing this condition will make the program
//     //fail for string like "aaca" and "aca"
//     if(str1.length != str2.length){
//         return false
//     }
//     //compare count array
//     for(let i=0;i<no_of_char;i++){
//         if(count1[i] != count2[i]){
//             return false
//         }
//     }
//     return true
//    }
// }
// console.log(Anagaram(str1,str2))
//here is Tc is O(n) means is size of string
//here is Sc is O(1) means is size of character(26), O(1)