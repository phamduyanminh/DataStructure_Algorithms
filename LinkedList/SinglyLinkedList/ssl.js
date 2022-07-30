//*Declaration a node
class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(value){
        //*Create a new node
        const newNode = new Node(value);
        //*Create a pointer from head to new node
        this.head = newNode;
        //*Having tail points to same place as head
        this.tail = this.head;
        this.length = 1;
    }
}

let myLinkList = new SinglyLinkedList(4);
console.log(myLinkList.head);