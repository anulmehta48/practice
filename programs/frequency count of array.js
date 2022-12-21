// this is brute force approach and here TC is O(N^2)
//this is solved by for loop 
// let arr=[5,7,8,1,3,5,7,2,1]
// function freCount(arr){
//     let visited=[]
//     for(let i=0;i<arr.length;i++){ 
//         let count=0
//         if(visited.includes(arr[i])) continue
//         for(let j=0;j<arr.length;j++){
//             if(arr[i] == arr[j]){
//                 visited.push(arr[i])
//                 count++
//             }
//         }
//         console.log(arr[i]+" "+count)
//     }
// }
// freCount(arr)


//find the hieghest frequency of array elements
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




//this is frequency counter apporach and here TC is O(N)
//freq counter store in object in the key:value count and key is always unique 
//if your input is anything it sote the number in assending order 
// let arr=[5,7,8,1,3,5,7,2,1]
// let frequecyCounter={}
// function frequency(arr){
//     for(let i of arr){
//         if(frequecyCounter[i]){
//             frequecyCounter[i]++
//         }else{
//             frequecyCounter[i]=1
//         }
//     }
//     return frequecyCounter
// }
// console.log(frequency(arr))


//this is very basic for understood 
//this is using obj counter
// let arr=[5,7,8,1,3,5,7,2,1]
// let obj={}
// for(let i of arr){
//     obj[i]=1
// }
// console.log(obj)

//*********** */
//this is using obj counter

// let obj={}
// for(let i of arr){
//     if(obj[i]){
//         obj[i]++
//     }else{
//         obj[i]=1
//     }
// }
// console.log(obj)


// let arr = ["anul", "kota", "rajasthan"]
// let obj = {}
// function freqName(arr) {
//     for (let i of arr) {
//         if (obj[i]) obj[i]++
//         obj[i] = 1
//     }
//     return obj
// }
// console.log(freqName(arr))


//this is using normal for loop 
// let arr1 = ["Name","City","State"]
// let arr2= ["anul", "kota", "rajasthan"]
// let obj = {}
// function freqName(arr1,arr2) {
//     for (let i=0;i<arr1.length;i++) {
//             obj[arr1[i]]=arr2[i]
//     }
//     return obj
// }
// console.log(freqName(arr1,arr2))

//this is using of for loop 
// let arr1 = ["anul", "kota", "rajasthan"]
// let arr2=["mehta","bundi","bengore"]
// let obj = {}
// function freqName(arr1,arr2) {
//     let j=0
//     for (let i of arr1) {
//         obj[i]=arr2[j]
//         j++
//     }
//     return obj
// }
// console.log(freqName(arr1,arr2))

