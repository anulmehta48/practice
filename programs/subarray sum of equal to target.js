let arr=[1,2,3]
let k=3

function subArraysum(arr){
    let presum=0;
    let anscount=0;
    let map= new Map();
    map.set(0,1)
    console.log(map)

    for(let i=0;i<arr.length;i++){
        presum+=arr[i]

        if(map.has(presum-k)){
            anscount+=map.get(presum-k)
        }
        map.set(presum,(map.get(presum)||0)+1)
    }
    console.log(map)

    return anscount
}
console.log(subArraysum(arr,k))
//TC is O(n); --only n time for loop so
//SC is O(n);  -- we are using map data-structure so