// exaple of Anagram :-
//we have to check the these string are anagram or not
//so here also be can apply brute force apporach
//we simple check the first length of the strings
//sort the srting and matched the charctar by using loop
//here the TC is O(n^2)

// let str1=["h","e","l","l","o"]
// let str2=["o","l","l","e","h"]
// function AnaGrams(str1,str2){
//     //get length of both string is same
//    let n1=str1.length
//    let n2=str2.length
//    //if both string do not have same length
//    //then these string are not anagram
//    if(n1!==n2){
//     return false
//    }
//    //sort the both string
//    let a=str1.sort()
//    console.log(a)
//     let b=str2.sort()
//    console.log(b)

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
//     if(str1.length !=str2.length) return false;
//     let freq1={}
//     let freq2={}

//     for(let val of str1){
//         if(freq1[val]){
//             freq1[val]++
//         }else{
//             freq1[val]=1
//         }
//         // console.log(freq1[val])
//     }
   
//     for(let val of str2){
//         if(freq2[val]){
//             freq2[val]++
//         }else{
//             freq2[val]=1
//         }
//         // console.log(freq2[val])
//     }
//     for(let key in freq1){
//         if(!(key in freq2)){
//             return false
//         }
//         if(freq2[key] != freq1[key]){
//             return false
//         }

//     }
//     return true;
// }
// console.log(Anagaram(str1,str2))
// here is Tc is O(n) means is size of string
// here is Sc is O(1) means is size of character(26), O(1)



// let str1="Anul"
// let str2="lunA"
// function Anagaram(str1,str2){
//     if(str1.length !=str2.length) return false;
//     let freq1={}
//     let freq2={}

//     for(let val of str1){
//         if(freq1[val]){
//             freq1[val]++
//         }else{
//             freq1[val]=1
//         }
//         console.log(freq1[val])
//     }
   
//     for(let val of str2){
//         if(freq2[val]){
//             freq2[val]++
//         }else{
//             freq2[val]=1
//         }
//         console.log(freq2[val])
//     }
//     console.log(freq1,freq2)
//     for(let key in freq1){
//         if(!(key in freq2)){
//             return false
//         }
//         // if(freq1[key] !=freq2[key]){
//         //     return false
//         // }
//         if(freq2[key] != freq1[key]){
//             return false
//         }

//     }
//     return true;
// }
// console.log(Anagaram(str1,str2))