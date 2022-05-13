class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.next = null;

        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(data){
        let node = new Node(data);
        if(this.head==null){
            this.head = node;
            return;
        }
        node.next = null;
        let last = this.head;
        if(last.next !==null){
            last = last.next
        }
        last.next=node;
        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data){
       let new_head = new Node(data);
       new_head.next = this.head;
       this.head = new_head;
        
        // creates a new node with the given data and adds it to the front of the list
    }
    pop(){   
        let second_last = this.head;
        let lastnode = this.head;
        if(second_last.next == null){
            lastnode = second_last;
            this.head = null;
            return lastnode;
        }
        while (second_last.next.next !== null){
            second_last = second_last.next;    
        };
        while (lastnode.next !== null){
            lastnode = lastnode.next;  
        };
        
        second_last.next = null;
 
        return lastnode;
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        let head = this.head;
        if(this.head.next !==null){
            this.head = this.head.next;
        }else{
            this.head = null;
        }
        return head
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
        const new_node = new Node(data);
        let pre_node = this.head;
        if(X == 0){
             new_node.next = this.head;
             this.head = new_node;
        }else if(X ==1){
            new_node.next = this.head.next;
            this.head.next = new_node;
        }else{
            for(let i=0; i<X; i++){
                pre_node = pre_node.next
            }
            new_node.next = pre_node;
            pre_node = new_node;
        }      
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        let removedNode;
        let preNode = this.head;
        if(X == 0){
            removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }else if(X ==1){
            removedNode = this.head.next;
            this.head.next = removedNode.next;
            return removedNode;
        }else {
            for(let i =1; i<X; i++){
                preNode = preNode.next
            }
            removedNode = preNode.next;
            preNode.next = removedNode.next;
            return removedNode;
        }
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}