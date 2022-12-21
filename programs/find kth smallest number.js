//
let arr = [12, 3, 5, 7, 19];
let N = arr.length, K = 2;
function kthSmallest(arr, N, K){
	
	arr.sort((a,b) => a-b);

	
	return arr[K - 1];
}
console.log(kthSmallest(arr, N, K))





// const swap = (arr, left, right) => {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//   };
  
//   const partition = (arr, low, high) => {
//     let pivot_element = arr[high];
  
//     let i = low - 1;
//     for (let j = low; j < high; j++) {
//       if (arr[j] < pivot_element) {
//         i++;
//         swap(arr, i, j);
//       }
//     }
  
//     swap(arr, i + 1, high);
//     return i + 1;
//   };
  
//   const kthsmallestElement = (arr, low, high, k) => {
//       let resultIndex = k - 1;
      
//       while (low < high) {
//           let pivot_index = partition(arr, low, high);
//           if (resultIndex == pivot_index) return arr[pivot_index];
          
//           if (resultIndex < pivot_index) high = pivot_index - 1;
//           else low = pivot_index + 1;
//       }
      
//       return arr[low];
//   };
  
//   //kth smallest-
//   let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
//   console.log(kthsmallestElement(arr, 0, 8, 4));