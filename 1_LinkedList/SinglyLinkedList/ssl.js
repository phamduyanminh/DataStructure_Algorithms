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

    //*Push a new node
    push(value){
        //*Create a node
        const newNode = new Node(value);
        //*If head is null
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            //*The tail of the last node point to the new pushed node
            this.tail.next = newNode;
            //*Assigning tail to the new node
            this.tail = newNode;
        }
        this.length++;
        //*Return the entire linked list
        return this;
    }

    //*Remove the last node in the linked list
    pop(){
        //*Check if head is empty then return undefine, else continue
        if(!this.head){
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;
        //*Check if the next data of temp is empty or not
        //*If it's empty, set tail equal to prev value, and set the next value of tail to null
        while(temp.next){
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    //*Inserting new node at the beginning of the list of node
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.lenght++;
        return this;
    }

    //*Removing the first node in the list
    shift(){
        if(!this.head) return undefined;
        var temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(length == 0){
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

    //*Getting node by accessing index
    get(index){
        if(index < 0 || index > this.length -1 ) return undefined;
        var temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    //*Change the value of the node at the input index
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.data = value;
            return true;
        }
        return false;
    }

    //*Inserting a new node at the input index
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        const newNode = new Node(value);
        const temp = this.get(index-1);
        newNode.next = temp.next
        temp.next = newNode;
        this.length++;
        return true;
    }

    //*Remove a node at a particular index
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        const before = this.get(index-1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    //*
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = this.temp.next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

let myLinkList = new SinglyLinkedList(4);
myLinkList.push(24)
myLinkList.push(54)
myLinkList.push(14)
console.log(myLinkList);
// myLinkList.pop();
// console.log(myLinkList);
// myLinkList.pop();
// console.log(myLinkList);
// myLinkList.pop();
// console.log(myLinkList);