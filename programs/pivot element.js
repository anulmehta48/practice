let arr=[7,9,1,2,3,4]
function pivotElement(arr){
    let start=0;
    let end= arr.length-1;
    let mid;
    while(start<end){
        mid=Math.floor(start+(end-start)/2)
        if(arr[mid]>=arr[0]){
            start=mid+1
        }else{
            end=mid
        }
    }
    return start
}
console.log(pivotElement(arr))