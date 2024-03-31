// find the highest reapeated element of array
let arr=[23, 56, 6, 78, 12, 34, 98, 12, 3, 2, 12, 2, 2];

function HeighestReapeated(arr){
    let freq={}
    for(let val of arr){
        if(freq[val]){
            freq[val]++
        }else{
            freq[val]=1
        }
    } 
    console.log(freq);
    let maxFrq=0;
    let ans=0;
    for(let key in freq){
        if(freq[key]>maxFrq){
            maxFrq=freq[key]
            ans=key
        }
    }
    return ans

}
console.log(HeighestReapeated(arr));