//*FIFO - First In First Out

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}


class Queue{
   constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
   }

    //*Adding
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    //*Removing
    dequeue(){
        if(this.length === 0) return undefined;
        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

let myQueue = new Queue(4);
myQueue.enqueue(14);
myQueue.enqueue(44);
console.log(myQueue);