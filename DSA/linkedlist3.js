// https://leetcode.com/problems/odd-even-linked-list/description/



var oddEvenList = function(head) {


   if(head == null)
       return null;
   let oddNodePointer = head;
   let evenNodePointer = head.next;
   let evenNodeHead = evenNodePointer;


   while(evenNodePointer != null && evenNodePointer.next != null){
           oddNodePointer.next = oddNodePointer.next.next;
           evenNodePointer.next = evenNodePointer.next.next;


           oddNodePointer = oddNodePointer.next;
           evenNodePointer = evenNodePointer.next;
   }


   oddNodePointer.next = evenNodeHead;


   return head;
};


// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/



var swapNodes = function(head, k) {
   if(head == null)
       return null;


   let fast = head;
   let slow = head;


   let FirstKthNode = null;
   let LastKthNode = null;


   for(let i=1;i<k;i++){
       fast = fast.next;
   }


   FirstKthNode = fast;


   while(fast != null){
       fast = fast.next;
       slow = slow.next
   }
   LastKthNode = slow;


   let temp = FirstKthNode.val;
   FirstKthNode.val = LastKthNode.val;
   LastKthNode.val = temp;


   return head;
};



// https://leetcode.com/problems/swap-nodes-in-pairs/description/



var swapPairs = function(head) {
   if(head == null)
       return null;
  
   let curr = head;
   let count = 0;


   while(count != 2 && curr != null){
       curr = curr.next;
       count++;
   }


   if(count == 2){
       curr = swapPairs(curr);


       while(count != 0){
           let temp = head.next;
           head.next = curr;
           curr = head;
           head = temp;


           count--;
       }


       head = curr;
   }
   return head;
};



// https://leetcode.com/problems/add-two-numbers/




var addTwoNumbers = function(l1, l2) {
        if(l1 == null && l2 == null)
       return null;
   else
       return recursion(l1, l2, 0);
};


var recursion = (l1, l2, carry) => {
           let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) +  carry;
           let nextCarry = Math.floor(sum/10);
           let nodeValue = sum % 10;


           if(l1 || l2 || carry)
               return new ListNode(nodeValue, recursion(l1 && l1.next|| null, l2 && l2.next || null, nextCarry));
           else
               return null;


}

