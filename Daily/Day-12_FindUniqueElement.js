//write a program to find all unqiue elements of array 

// let arr=[1,2,1,4,5,2,8,1,2,5,9]

// function FindUnique(arr){
//     let frq={}
//     for(let i=0;i<arr.length;i++){
//         if(frq[arr[i]]){
//             frq[arr[i]]++
//         }else{
//             frq[arr[i]]=1
//         }
//     }
//     let ans=[]
//     for(let key in frq){
//         if(frq[key]){
//             ans.push(key)
//         }
//     }
//     return ans
// }
// console.log(FindUnique(arr));



//write a program to find not repetated unqiue elements of array 
//that means only present one time not duplicate

let arr=[1,2,1,4,5,2,8,1,2,5,9]

function FindUnique(arr){
    let frq={}
    for(let i=0;i<arr.length;i++){
        if(frq[arr[i]]){
            frq[arr[i]]++
        }else{
            frq[arr[i]]=1
        }
    }
    let ans=[]
    for(let key in frq){
        if(frq[key]==1){
            ans.push(key)
        }
    }
    return ans
}
console.log(FindUnique(arr));