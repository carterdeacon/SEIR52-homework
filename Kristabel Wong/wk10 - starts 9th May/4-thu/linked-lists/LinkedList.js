class Node {
    constructor(data) {
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // a Linked List starts with a "head" property intialized as null
        this.head = null;
    }
    appendNode(data) {
        // creates a new node with the given data and adds it to back of the list
        let newNode = new Node(data);

        if (!this.head) {  // if linked list is empty, then make the new node as head
            this.head = newNode;
            return this.head;
        }

        let last = this.head; // else traverse til the last node
        while (last.next !== null) {
            last = last.next; // update the last node's next pointer as its currently null
        }

        last.next = newNode;
        return this.head;
    }
    prependNode(data) {
        // creates a new node with the given data and adds it to the front of the list
        let newNode = new Node(data);

        // the pointer next is assign head pointer so that both pointers now point at the same node
        newNode.next = this.head;

        // head pointer now must point to newNode
        this.head = newNode;

        return this.head;
    }
    pop() {
        // removes the last node from the list and returns it
        if (!this.head) {
            return null;
        }

        // if theres only one node in the list
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let last = this.head.next;

        while (last.next !== null) {
            previous = last;
            last = last.next;
        }

        previous.next = null;
        return this.head;
    }
    removeFromFront() {
        // remove the head node from the list and return it
        // the next node in the list is the new head node

        if (!this.head) {
            return;
        }

        this.head = this.head.next;
        return this.head;
    }
    insertAt(X, data) {
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X) {
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed

        if (!this.head) {
            this.head = new Node(data);
            return
        }

        if (X === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(X - 1);
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
        return this.head;
    }
    search(data) {
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false

        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return current.data;
            }
            current = current.next;
        }

        return false;

    }
    sort() {
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}