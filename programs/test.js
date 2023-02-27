// You need to write program 
// 1. find the longest common prefix string amongst an array of strings.


// , if there is no common prefix, return an string "";


// Sample INput : 
// strs = ["ANUL", "ANSHUL", "ANAMIKA"]
// Sample OUTPUT: 
// "AN"

// Sample INPUT:
// strs =["a", "b", "c"]
// Sample OUTPUT:
// ""

// let str=["ANUL", "ANSHUL", "ANAMIKA"]

// function prefix(str){
//     if(str.length==0 ){
//         return "";
//     }
    // for(let i=0;i<str[0].length;i++){
    //     for(let j=1;j<str.length;j++){
    //         if(str[0][i]!=str[j][i]){
    //             return str[0].slice(0,i)
    //         }
    //     }
    // }
    
//     let k=str[0]
//     for(let i of str){
//         while(i.indexOf(k)!=0){
//             k=k.substr(0,k.length-1)
//             if(k==""){
//                 break;
//             }
//         }
//     }
    
//     return k
// }
// console.log(prefix(str))



///prcatice one ore time 
// let arr1=[2,4,6,8]
// let arr2=[4,16,36,64]

// function checkSquare(arr1,arr2){
//     if(arr1.length!=arr2.length){
//         return false
//     }
//     for(let i=0;i<arr1.length;i++){
//         let element=arr2.indexOf(arr1[i]**2)
//         console.log(element)
//         if(element ==-1){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkSquare(arr1,arr2))
// //here is tc is O(n^2)


// let arr1=[2,4,6,8]
// let arr2=[4,16,36,64]

// function checkSquare(arr1,arr2){
//      if(arr1.length!=arr2.length){
//         return false
//      }

//     let frq1= new Map()
//     let frq2=new Map()

//     for(let val of arr1){
//         if(frq1[val]){
//             frq1[val]++
//         }else{
//             frq1[val]=1
//         }
//     }
//     for(let val of arr2){
//         if(frq2[val]){
//             frq2[val]++
//         }else{
//             frq2[val]=1
//         }
//     }
//     console.log(frq1)
//     console.log(frq2)

//     for(let key in frq1){
//         if(frq1[key]!= frq2[key**2]){
//             return false
//         }
//         if(frq2[key**2]!=frq1[key]){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkSquare(arr1,arr2))

//time complexity is O(n)
//Space is O(n)


//checak anagrams
// let arr1=["m","o","h","i","t"]
// let arr2=["t","i","h","o","m"]

// let a="mohit"
// let b="tihom"
// arr1=a.split("")
// arr2=b.split("")
// console.log(arr1)
// console.log(arr2)
// function checkAnagram(arr1,arr2){
//     if(arr1.length!=arr2.length){
//         return false
//     }
//     arr1.sort()
//     arr2.sort()
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]!=arr2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkAnagram(arr1,arr2))
// Tc is O(nlogn)




// let arr=[12,18,25,30,35,40]
// let targate=70;

// function findTragetsum(arr,targate){
//     for(let i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==targate){
//                 return[i,j]
//             }
//         }
//     }
//     return false
// }
// console.log(findTragetsum(arr,targate))


// function checkTaeget(arr,targate){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         if(arr[i]+arr[j]==targate){
//             return [i,j]
//         }else if(arr[i]+arr[j]<targate){
//             i++
//         }else{
//             j--
//         }
//     }
//     return false
// }
// console.log(checkTaeget(arr,targate))


//reverse the array
// let arr=[14,25,1452,144,10,5,10222]

// function reverseArray(arr){
//     let i=0;
//     let j=arr.length-1;

//     while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++;
//         j--;
//     }
//     return arr
// }
// console.log(reverseArray(arr))


// let arr=["ANUL","ANMOL","ANAMIKA","ANOKHA"]

// function loggestprefix(arr){
//     if(arr.length==0){
//         return ""
//     }
//     if(arr.length==1){
//         return arr[0]
//     }
//     let ans=[]
// //    let takeElement=arr[0]
//    for(let i=0;i<arr[0].length;i++){
//         let ch=arr[0][i]
//         let flag=true
//         for(let j=1;j<arr.length;j++){
//             if(arr[j].length <i|| ch!=arr[j][i]){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag==false){
//             break;
//         }else{
//             ans.push(ch)
//         }
//    }
//    return ans;

// }
// console.log(loggestprefix(arr))


function primeNumber(n){
    if(n==0 || n==1){
        return false
    }
    if(n==2) return true
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
        return true
    }
    let N=20
    for(let i=1;i<=N;i++){
        if(primeNumber(i)){
            console.log(i)
        }
    }

}
primeNumber()



// function printPrime(n){
//     if(n==0||n==1) return false
//     for(var i=2;i<=n;i++){
//         for(var j=2;j<i;j++){
//             if(i%j==0){
//                 break;
//             }  
//         }
//         if(i==j){
//             console.log(i)
//         }
//     }
// }
// printPrime(20)


// let arr=["ANUL","ANMOL","ANAMIKA"]
// function loggestPrifix(arr){
//   if(arr.length==0) return "";
//   if(arr.length==1) return arr[0];
//   let ans=[]
//   for(let i=0;i<arr[0].length;i++){
//     let ch=arr[0][i]
//     let flag=true;
//     for(let j=1;j<arr.length;j++){
//       if(arr[j].length<i||ch!=arr[j][i]){
//         flag=false;
//         break;
//       }
//     }
//     if(flag==false){
//       break;
//     }else{
//       ans.push(ch)
//     }
//   }
//   return ans 
// }
// console.log(loggestPrifix(arr))

let arr1=[1,2,3,4,5]
let arr2=[1,6,3,7,5]

// let arr3=arr1.filter((data)=>arr2.includes(data))
// console.log(arr3)

// function intercation(arr1,arr2){
//   let arr3=new Array()
//       arr3=arr1.filter((d)=>arr2.include(d))
//       return arr3
// }
// console.log(intercation(arr1,arr2))

// function primeNumber(n){
//     if(n==0|| n==1) return false
   
//     if(n==2) return true

//     for(let i=2;i<n;i++){
//         if(n%i==0) return false
//     }
//     return true
// }
// console.log(primeNumber(6))