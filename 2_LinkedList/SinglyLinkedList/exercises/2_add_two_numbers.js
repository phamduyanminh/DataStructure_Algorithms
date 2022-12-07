//* https://baffinlee.com/leetcode-javascript/problem/add-two-numbers.html

var addTwoNumbers = function(l1, l2){
    //*Check if linked list 1 or 2 is empty
    while(l1 !== null || l2 !== null){
        let totalSum = 0;
        let total1 = "";
        let total2 = "";

        if(l1 !== null){
            total1 += list1.data;
            list1 = list1.next;
        }

        if(l2 !== null){
            total2 += list2.data;
            list2 = list2.next;
        }

        //*Calculate sum of 2 linked list
        totalSum = parseInt(total1) + parseInt(total2);
        //*Reverse [totalSum]
        totalSum = totalSum.toString().split('').reverse().join('') * Math.sign(totalSum);
        //*Assigns the length of [totalSum]
        let length = totalSum.toString().length;

        let sll = SinglyLinkedList((totalSum%10)/10);

        while(length > 0){
            sll.push(totalSum%10);
            totalSum = Math.floor(totalSum/10);
            length--;
        }
    }
}

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    contructor(value){
        const newNode = Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 0;
    }

    push(value){
        const newNode = Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}