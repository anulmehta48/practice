// https://leetcode.com/problems/sort-list/

//merge sort
var sortList = function(head) {
  
   //base -> if only 1 or less node exist
   if(head == null || head.next == null)
       return head;


   let slow = head;
   let fast = head;
   let prev = null;


   while(fast != null && fast.next != null){
       fast = fast.next.next;
       prev = slow;
       slow = slow.next;
   }


   prev.next = null;


   let list1 = sortList(head);
   let list2 = sortList(slow);


   return mergeLL(list1, list2);
};


const mergeLL = (list1, list2) => {


   let newMergedList = new ListNode(0);
  
   let temp = newMergedList;


   while(list1 != null && list2 != null ){
       if(list1.val < list2.val){
           temp.next = list1;
           list1 = list1.next;
       }


       else{
               temp.next = list2;
               list2 = list2.next;
       }


       temp = temp.next;
   }


   while(list1 != null){
       temp.next = list1;
       list1 = list1.next;
       temp = temp.next;
   }


  while(list2 != null){
       temp.next = list2;
       list2 = list2.next;
       temp = temp.next;
   }


   return newMergedList.next;
}






// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/



var removeNthFromEnd = function(head, n) {
  
   if(head == null)
       return null;


   const newHead = new ListNode(0);
   newHead.next = head;


   let fast = newHead;
   let slow = newHead;


   for(let i=1;i<= n+1;i++){
       fast = fast.next;
   }


   while(fast != null){
       fast = fast.next;
       slow = slow.next;
   }


   slow.next = slow.next.next;


   return newHead.next;
};



// https://leetcode.com/problems/reverse-nodes-in-k-group/

// class Solution {
//     public ListNode reverseKGroup(ListNode head, int k) {
//             ListNode curr = head;
//             int count = 0;
//             while(curr != null && count != k){
//                 curr = curr.next;
//                 count++;
//             }

//             if(count == k)
//             {
//                 curr = reverseKGroup(curr, k);

//                 while(count-- > 0){
//                         ListNode temp = head.next;
//                         head.next = curr;
//                         curr = head;
//                         head = temp;
//                 }

//                 head = curr;

//             }
//         return head;
//     }
// }


// //Homework
// https://leetcode.com/problems/delete-node-in-a-linked-list/description/
