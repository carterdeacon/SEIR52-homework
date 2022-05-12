class Node{
    constructor(data){
        // a Node starts with a given data property
        this.data = data;
        // a Node also has a .next property initialized as null
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        // a Linked List starts with a "head" property intialized as null
        this.tail = null;
        this.length = 0;
    }
    appendNode(data){
        let newNode = new Node(data);
        this.length +=1;
        if(this.tail){
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }
        this.head = this.tail = newNode;
        return newNode;

        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data){
        let newNode = new Node(data);
        this.length +=1;
        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }
        this.head = this.tail = newNode;
        return newNode;
       
        // creates a new node with the given data and adds it to the front of the list
    }
    pop(){
        if (this.tail === null){
            return null;
        }
        this.length -=1;
        let current = this.head;
        let previous = null;
        while(current.next != null) {
            previous = current;
            current = current.next;
        }
        if (previous === null){
            this.tail = null;
            this.head = null;
            return current;
        }
        // At this point, current.next = null
        previous.next = null;
        this.tail = previous;
        return current;


        /*if(this.tail){
            let current = this.head;
            let tailNode = this.tail;
            while(current.next != null){
                current = current.next;
            }
            const beforeTail = current;
            this.tail = beforeTail;
            this.tail.next = null;
            this.length -=1;
            if(this.length ===1){
                this.head = this.tail = current;
            }
            return tailNode;
        }else{
            return null;
        }*/
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        if(this.head){
            this.length -=1;
            let temp = this.head;
            this.head = this.head.next;
            return temp;
        }
        return undefined;
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
        let previous = null;
        let current = this.head;
        let newNode = new Node(data);
        if(X == 0){
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }else{
            for(let i = 0; i < X; i++){
            previous = current;
            current = current.next;
        };
        
        newNode.next = current;
        previous.next = newNode;
        this.length +=1;
        return newNode;
        }
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        if(X === 0){
            return this.removeFromFront();
        }else if (X === this.length){
            return this.pop();
        }else{
            let previous = null;
            let current = this.head;
            for (let i =0; i < X; i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.length -=1;
            return current;
        }
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
            let index =  0;
            let current = this.head; 
            while (current != null){
                if (current.data === data){
                    return index; 
                }
                index +=1;
                current = current.next;               
            }
            return false;
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
        if(this.length ==1) return;
        let current = this.head;
        let last = null;
        let min_val = this.head.data;
        let min_node = this.head;
        let result = new LinkedList();
        let count = this.length;
        while(count){
            while (current.next != null) {
                if(min_val > current.data){
                min_val= current.data;
                }
                current = current.next;
            }
            result.appendNode(min_val);
            count -=1;
            min_val = min_val+1;
        };
        this.head = result.head;
        this.tail = result.tail;
        console.log(this.head, this.tail);
    }
}

module.exports = {
    Node,
    LinkedList
}