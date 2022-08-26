//*LIFO - Last In First Out

//?Question in interview - How do you implemeneted stacks in an array
//*Answer: Pop and Push

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    contructor(value){
        const newNode = Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = Node(value);
        if(This.length === 0){
            this.top = newNode;
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(This.length === 0){return undefined}
        var temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}