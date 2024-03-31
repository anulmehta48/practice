let arr1=[4,5,6,7]
let arr2=[16,25,36,49]

function checkSquare(arr1,arr2){
    if(arr1.length != arr2.length){
        return false
    }
    let frq1={}
    let frq2={}
    
    for(let i=0;i<arr1.length;i++){
        if(frq1[arr1[i]]){
            frq1[arr1[i]]++
        }else{
            frq1[arr1[i]]=1
        }
    }
    
    for(let i=0;i<arr2.length;i++){
        if(frq2[arr2[i]]){
            frq2[arr2[i]]++
        }else{
            frq2[arr2[i]]=1
        }
    }
    for(let key in frq1){
        if(frq1[key]!== frq2[key**2]){
            return false
        }
        if(frq2[key**2] !== frq1[key]){
            return false
        }
    }
    return true
}
console.log(checkSquare(arr1,arr2))


// let arr1=[4,5,6,7]
// let arr2=[16,25,36,49]

// function checkSquare(arr1,arr2){
//     if(arr1.length != arr2.length){
//         return false
//     }
//     let mp1=new Map()
//     for(let i=0;i<arr1.length;i++){
//         let x=arr1[i]
//         if(mp1.has(x)){
//             mp1.set(mp1.get(x)+1)
//         }else{
//             mp1.set(x,1)
//         }
//     }
//     let mp2=new Map()
//     for(let i=0;i<arr2.length;i++){
//         let x=arr2[i]
//         if(mp2.has(x)){
//             mp2.set(mp2.get(x)+1)
//         }else{
//             mp2.set(x,1)
//         }
//     }
//     console.log(mp1)
//     console.log(mp2)
    
//     for(let [key,value ]of mp1){
//         console.log(key,value)
//         if(!mp2.has(key**2)){
//             return false
//         }
//         if(mp2.get(key**2)!==value){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkSquare(arr1,arr2))

