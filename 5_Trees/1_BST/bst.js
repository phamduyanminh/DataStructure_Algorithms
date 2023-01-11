//ANCHOR Big(O): O(log n) <=> O(2^n)

//ANCHOR Inserting: O(log n)

//ANCHOR Removing: O(log n)

//ANCHOR Searching: worst case - O(n) || best case - O(log n)

//Question: What is a full binary tree?
//*Answer: A full tree is when every item is either pointing to both left and right node or point to null.

//? What is a perfect tree?
//*Anser: Perfect tree is when every item is poiting to both left and right node, and both branches must have a same level of nodes

class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
        }

        while()
    }
}