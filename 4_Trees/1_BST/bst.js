//*Big(O): O(log n) <=> O(2^n)

//*Inserting: O(log n)

//*Removing: O(log n)

//*Searching: worst case - O(n) || best case - O(log n)

class Node{
    contructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    inserting(value){
        const newNode = new Node(value);
        var temp;

        if(this.root == null){
            this.root = newNode;
        }

        if(value < this.root.value){
            temp = this.root.left;
            while(temp == null){
                temp = temp.left;
            }
            temp = newNode;
        }else if(value > this.root.value){
            this.root.right = newNode;
        }else{
            return undefined;
        }

        return this;
    }
}