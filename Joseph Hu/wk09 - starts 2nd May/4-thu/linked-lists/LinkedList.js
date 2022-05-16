//A Linked list is a linear data structure
//it's an ordered collection of data but unlike an array, the nodes are not stored sequentially
//they are ordered using pointers that point to each node.
//Each node has two parts: the data and a pointer or reference to the next element in the list.
//The last node or end of the list has a pointer to null. It is called the tail
//The start of the list is the head

//this class of node represents A NODE. When we want to create a node, we will create a new one of these
//as mentioned above, the node requires data and a pointer, in this case 'next'
class Node{
    //next is initialized to null because the first item will also be the tail which points to null
    constructor(data, next = null){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
        this.data = data
        this.next = next
    }
}


class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
        this.head = null;
        //this keeps track of the size of the list
        this.size = 0
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        //create a new Node
        let node = new Node(data)
        let current;
        //take care of edge case if the list is empty
        //if empty make the new Node the head
        if (!this.head){
            this.head = node
        }
        else{
            current = this.head;
            //traverse the list starting from the head to the end of the list
            while(current.next){
                current = current.next
            }
            current.next = node
        }

        this.size++
  
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        //if we want to insert the node at the start and there's already a head node,
        //we want to push that one node to the right or next.
        //Otherwise it'll be the head if there's no other nodes
        this.head = new Node(data, this.head)
        this.size++
    }
    pop(){
        // removes the last node from the list and returns it
        if (!this.size){
            return null
        }
        let current = this.head
        let previous
        while(current.next){
            previous = current
            current = current.next
        }
        previous.next = null
        this.size --
        return current
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
        let current = this.head
        let nextNode = current.next
        this.head = nextNode
        this.size --
        return current
    }
    insertAt(index, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head

        //if we try insert at a node position that does not exist then just return and not do anything
        if(index > 0 && index > this.size){
            return
        }

        //if the index is 0 we need to set it as the head
        if(index === 0){
            //create a new node and set the data as the head
            this.head = new Node(data, this.head)
            return
        }
        //otherwise create a new node
        const node = new Node(data);
        //initialize current and previous
        let current
        let previous

        //set current to first
        current = this.head;
        let count = 0
        //traverse list up to the index we want to insert at from the head
        while(count < index){
            previous = current //Node before the index we want to insert at
            count++;
            current = current.next //Node After the index
        }
        //make the node after the index the current node
        node.next = current //we are basically moving the node at the index where we want to insert and pushing it one place to the right
        previous.next = node;//we are replacing the spot where the index used to be with the node
        this.size++

    }

    removeAt(index){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
        if(index > 0 && index > this.size){
            //if the node is out of range just return
            return 
        }
        //starting node is the head
        let current = this.head
        let previous;
        let count = 0;
        
        //set our current node to the head node
        //remove the first 
        if(index === 0){
            //if the node we want to remove is the head, set the head to the next node so we still have a head
            this.head = current.next
        }
        else{
            //traverse the list until we get to the index we want to remove
            while(count < index){
                count ++;
                previous = current
                current = current.next
            }
            //basically make the node before the index the current node index, effectively slicing the node at the index
            previous.next = current.next
        }
        //update the size of the list
        this.size --
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
        //set current node we are traversing to be the head
        let current = this.head;
        //start from first index (head)
        let index = 0
        //loop through the nodes
        while(current){
            //if the current node data matches the data log the index
            if(current.data == data){
                console.log(index)
                return index
            }
            index++
            //iterate to the next node
            current = current.next
        }
        //else we didn't find the node
        return false
    }

    sort(linkedlist){
        // sort the Linked List in ascending order of data values
        if (linkedlist.size <= 1){
            return this.head
        }
        else{

            let mid = Math.floor(linkedlist.size/2)
            let left = new LinkedList();
            let right = new LinkedList();
            let index = 1;
            let current = linkedlist.head

            while(current){
                if (index <= mid){
                    left.appendNode(current.data)
                }
                else{
                    right.appendNode(current.data)
                }
            }

            index++
            current = current.next
        }

        left = sort(left)
        right = sort(right)

        return merge(left, right)
    }

    printListData(){
        //start with the first node (head)
        let current = this.head
        //loop through all the nodes
        while(current){
            console.log(current.data)
            //iterate to the next node
            current = current.next
        }
    }

    clearList(){
        this.head = null; //we orphan the rest of the list.
        this.size =0
    }
}

const ll = new LinkedList();
ll.prependNode(100)
ll.prependNode(200)
ll.prependNode(300)
// console.log(ll)
ll.appendNode(400)
ll.insertAt(2, 500)
ll.removeAt(2)
ll.pop()
ll.removeFromFront()
ll.printListData()
ll.search(500)



module.exports = {
    Node,
    LinkedList
}