//*FIFO - First In First Out

class Node{
    contructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    contructor(value){
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

        var temp = this.first;
        if(this.length === 1) {
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
