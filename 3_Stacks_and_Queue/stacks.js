//*LIFO - Last In First Out

//?Question in interview - How do you implemeneted stacks in an array
//*Answer: Pop and Push

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class Stack{
    contructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return 'The stack is empty';
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    peek(){
        if(this.length === 0) return undefined;
        return this.top;
    }
}

let myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.peek());