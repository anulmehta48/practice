//what is linkedlist= linkedlist is linear data structure that contains colletions of nodes and node has two attributes
// one is data of that node and second is pointer or reference of next nodes that is called linkedlist

//=> it follow some properties-
// 1. next element conneted by referenec of its preveous elements 
// 2. last element points to the null
// 3. It size can be increase or decrease dyanmically that means you can add  or delete multiple element at any point of time.
// 4. How much memory you have that only you can impliment linkedlist only.
// 5. In this when we store the next node reference address then its takes extra space but memory are not wasted in linkedlist.

//opertion we peroformed in linkedlist and it all used  in three ways from => 1.fornt(head), 2.middle, 3.end(tail)
//1.searching node
//2.inserting node
//3.deletition node
//4.updation node


//now we created node
class Node{
    constructor(data,next){
        this.data=data;
        this.next=null;

    }
}
// console.log(new Node())

//now we creating the linkedlist
class Linkedlist{
    constructor(){
        this.firstNode=null;
        this.lastNode=null;
    }

    //create a function for add the nodes in linkedlist by insertInFront
    insertInFrontofList(data){
        //now node is created but not connected with anyone list
        const node=new Node(data);

        //if list is empty
        if(!this.firstNode){
            this.firstNode=node;
            this.lastNode=node;
        }else{
            const temp=this.firstNode
            this.firstNode=node
            node.next=temp
        }
    }

    insertInLastofList(data){
        const node=new Node(data);

        if(!this.firstNode){
            this.firstNode=node;
            this.lastNode=node;
        }else{
            this.lastNode.next=node;
            this.lastNode=node
        }

    }

    printList(){
        let curr=this.firstNode;
        while(curr){
            console.log(curr.data)
            curr=curr.next
        }
    }

    insertAfterKthpostion(data,k){
        let count=1;
        let curr=this.firstNode
        while(curr && count!==k){
            curr=curr.next;
            count++
        }
        if(!curr && count !== k){
            console.log("Invlaid postion")
            throw Error("Invlaid postion")
        }else if(!curr && count!==k){
            this.insertInLastofList(data)
        }else{
            const node=new Node(data)
            node.next=curr.next
            curr.next=node;
        }
    }

}

const list= new Linkedlist()
list.insertInFrontofList(10)
list.insertInFrontofList(9)
list.insertInFrontofList(8)
list.insertInLastofList(20)
list.insertAfterKthpostion(2,4)
list.printList()
console.log(list);

