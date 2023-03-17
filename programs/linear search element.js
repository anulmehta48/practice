//find the key is present in arr or not using linear search
let arr=[2,51,6,7,14,25,60]
let key=7;

function linearSearch(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            return true
        }
    }
    return false
}
console.log(linearSearch(arr,key))


