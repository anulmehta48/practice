// class LinkedListNode{
//     constructor(val){
//         this.value = val;
//         this.next = null;
//     }
// }

// const myListHead = new LinkedListNode(5);
// myListHead.next = new LinkedListNode(6);
// myListHead.next.next = new LinkedListNode(7);
// myListHead.next.next.next = new LinkedListNode(8);




// https://leetcode.com/problems/merge-two-sorted-lists/




var mergeTwoLists = function(list1, list2) {
   let newHead = new ListNode(0);
   let temp = newHead;


   while(list1 != null && list2 != null){


       if(list1.val < list2.val)
           {
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
   return newHead.next;


//for very large dataset
   //TC: o(n+m)= linear= O(n)
   //SC: o(n+m)
};


// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {


       //base case
   if(head == null|| head.next == null)
       return head;


   //general case
   let reversedLLHead = reverseList(head.next);
   head.next.next = head;
   head.next = null;
   return reversedLLHead
};


// https://leetcode.com/problems/middle-of-the-linked-list/



var middleNode = function(head) {


   let slow = head;
   let fast = head;


   while(fast != null && fast.next != null){


           slow = slow.next;
           fast = fast.next.next;
   }


   return slow;
};


// https://leetcode.com/problems/linked-list-cycle/description/




var hasCycle = function(head) {
   let fast = head;
   let slow = head;


   while(fast!= null && fast.next!= null){


       fast = fast.next.next;
       slow = slow.next;


       if(slow == fast)
           return true;


   }


   return false;
};




// https://leetcode.com/problems/sort-list/
