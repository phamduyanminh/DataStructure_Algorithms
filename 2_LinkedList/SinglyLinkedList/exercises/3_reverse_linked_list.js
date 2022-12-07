class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
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
        } else{
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var next = current.next;
        var previous = null;
        for(var i = 0; i < this.length; i++){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return this;
    }
}

var sll = new LinkedList(1);
sll.push(2);
sll.push(3);
sll.push(4);
console.log(sll);
console.log(sll.reverse());