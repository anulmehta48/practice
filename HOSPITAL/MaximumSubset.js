// let arr = [100, 200, 300, 400];
// let k = 2;

function MaximumSubset(arr, k) {
  let currsum = 0;
  let maxsum = 0;
  for (let i = 0; i < k; i++) {
    currsum += arr[i];
  }
  maxsum = currsum;
  for (let i = k; i < arr.length; i++) {
    currsum += arr[i];
    currsum -= arr[i - k];
    maxsum = Math.max(maxsum, currsum);
  }
  return maxsum;
}
console.log(MaximumSubset(arr, k));

let arr = [100, 200, 300, 400];
let k = 2;

function MaxProduct(arr,k){
    let currproduct=1;
    let Maxproduct=1
    for(let i=0;i<k;i++){
        currproduct*=arr[i]
    }
    Maxproduct=currproduct
    for(let i=k;i<arr.length;i++){
        currproduct*=arr[i]
        currproduct/=arr[i-k]
        Maxproduct=Math.max(Maxproduct,currproduct)
    }
    return Maxproduct

}
console.log(MaxProduct(arr,k));