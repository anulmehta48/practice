//Merge Sort Algorithms
//here worstcase TC is O(nlogn);
//here bestcase TC is O(nlogn);
//here averagecase TC is O(nlogn);



// let arr=[10,9,8,7,6,5,4,3,2,1]
// function mergeSort(arr,start,end){
//     let mid=Math.floor(start+(end-start)/2)
//     if(start>=end) return;

//     mergeSort(arr,start,mid);
//     mergeSort(arr,mid+1,end);
//     merge(arr,start,mid,end);
//     return arr
// }

// function merge(arr,start,mid,end){
//     let newArray=new Array()
//     let index1=start;
//     let index2=mid+1;
//     let newArrayindex=0;

//     while(index1<=mid && index2<=end){
//         if(arr[index1]<=arr[index2]){
//             newArray[newArrayindex]=arr[index1];
//             newArrayindex++;
//             index1++
//         }else{
//             newArray[newArrayindex]=arr[index2];
//             newArrayindex++;
//             index2++
//         }
//     }
//     while(index1<=mid){
//         newArray[newArrayindex]=arr[index1];
//         newArrayindex++;
//         index1++
//     }
//     while(index2<=end){
//         newArray[newArrayindex]=arr[index2];
//         newArrayindex++;
//         index2++;
//     }

//     let j=start;
//     for(let i=0;i<newArray.length;i++){
//         arr[j]=newArray[i];
//         j++
//     }
// }

// console.log(mergeSort(arr,0,9))
// console.log(arr)



let arr=[2,5,1,1,7,8,9]
let start=0;
let end=arr.length-1;

function mergeSort(arr,start,end){
  let mid=Math.floor(start+(end-start)/2)
  if(start>=end) return;
  
  mergeSort(arr,start,mid);
  mergeSort(arr,mid+1,end);
  merge(arr,start,mid,end);
  return arr
}

function merge(arr,start,mid,end){
  let newArray=new Array();
  let index1=start;
  let index2=mid+1;
  let newArrayindex=0;
  
  while(index1<=mid && index2<=end){
    if(arr[index1]<=arr[index2]){
      newArray[newArrayindex]=arr[index1];
      newArrayindex++;
      index1++
    }else{
      newArray[newArrayindex]=arr[index2];
      newArrayindex++;
      index2++
    }
  }
  
  while(index1<=mid){
    newArray[newArrayindex]=arr[index1];
    newArrayindex++;
    index1++
  }
  
  while(index2<=end){
    newArray[newArrayindex]=arr[index2];
    newArrayindex++;
    index2++
  }
  
  let j=start;
  for(let i=0;i<newArray.length;i++){
    arr[j]=newArray[i]
    j++
  }
}
console.log(mergeSort(arr,start,end))




// let arr=[10,9,8,7,6,5,4,3,2,1]
// function merge(arr, l, m, r){
//     let n1 = m - l + 1;
//     let n2 = r - m;

//     let L = new Array(n1);
//     let R = new Array(n2);

//     for (let i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (let j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
 

//     let i = 0;
//     let j = 0;
//     let k = l;
 
//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         }
//         else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }

//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
 
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }

// function mergeSort(arr,l, r){
//     let m =Math.floor(l+(r-l)/2);
//     if(l>=r) return;
//    mergeSort(arr,l,m);
//    mergeSort(arr,m+1,r);
//    merge(arr,l,m,r);
// }


// console.log(mergeSort(arr,0,9))


// let arr=[90,1,14,32,60,42,80,45,11,40]
// let start=0;
// let end=arr.length-1
// function mergeSort(arr,start,end){

//     if(start>=end) return;
//     let mid=Math.floor(start+(end-start)/2)
//     mergeSort(arr,start,mid)
//     mergeSort(arr,mid+1,end)
//     merge(arr,start,mid,end)
//     return arr
// }

// function merge(arr,start,mid,end){
//     let arr1=[]
//     let arr2=[]

//     let lenArr1=mid-start+1;
//     let lenArr2=end-mid

//     for(let i=0;i<lenArr1;i++){
//         arr1[i]=arr[start+i]
//     }

//     for(let j=0;j<lenArr2;j++){
//         arr2[j]=arr[mid+1+j]
//     }

//     let a=0 ; //index of arr1
//     let b=0; //index of arr2
//     let c=start; //index of arr

//     while(a<lenArr1 && b<lenArr2){
//         if(arr1[a]<=arr2[b]){
//             arr[c]=arr1[a]
//             a++
//             c++
//         }else{
//             arr[c]=arr2[b]
//             b++
//             c++
//         }
//     }

//     while(a<lenArr1){
//         arr[c]=arr1[a]
//         a++
//         c++
//     }
//     while(b<lenArr2){
//         arr[c]=arr2[b]
//         b++
//         c++
//     }

// }

// console.log(mergeSort(arr,start,end))