class Node{
    constructor(value){
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.tail || this.length === 0) return undefined;
        
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }
}

let doubleLinkedList = new DoublyLinkedList();
doubleLinkedList.push(3);
doubleLinkedList.push(13);
console.log(doubleLinkedList);