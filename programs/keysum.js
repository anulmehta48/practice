let arr=[1, 4, 45, 6, 10, 8]
let x=16

function keysum(arr){
    let map = {};
    for(let i=0;i<arr.length;i++) {
        let sum = x-arr[i];
        if(map[sum] != undefined) {
            return true;
        }
        map[arr[i]] = i;
    }
    console.log(map)
    return false;
}
console.log(keysum(arr,x))