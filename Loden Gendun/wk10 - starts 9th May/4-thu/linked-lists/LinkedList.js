class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    appendNode(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let lastNode = this.head;
        while (lastNode.next) lastNode = lastNode.next;
        lastNode.next = newNode;
    }
    prependNode(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    pop(){
        const { head } = this;
        let removedNode = head;

        if (head !== null) {
            if (head.next === null) {
                this.head = null;
            } else {
                let lastNode = head;
                while (lastNode.next.next) lastNode = lastNode.next;
                removedNode = lastNode.next;
                lastNode.next = null;
            }
        }
        return removedNode;
    }
    removeFromFront(){
        const { head } = this;

        if (head) this.head = head.next;
        
        return head;
    }
    insertAt(X, data){
        const newNode = new Node(data);
        const { head } = this;

        if (head === null) {
            this.head = newNode;
            return;
        }

        if ( X === 0 ) {
            newNode.next = head;
            this.head = newNode;
            return;
        }

        let nodeVisiting = head;
        for (let i = 0; i < X-1; i++) {
            if (nodeVisiting.next === null) {
                nodeVisiting.next = newNode;
                return;
            }
            nodeVisiting = nodeVisiting.next
        }
        newNode.next = nodeVisiting.next;
        nodeVisiting.next = newNode;
    }
    removeAt(X){
        const { head } = this;
        if (head === null) {
            return;
        }

        if ( X === 0 ) {
            this.head = head.next;
            return head;
        }

        let nodeVisiting = head;
        for (let i = 0; i < X-1; i++) {
            if (nodeVisiting.next === null) {
                return;
            }
            nodeVisiting = nodeVisiting.next
        }
        const removedNode = nodeVisiting.next;
        nodeVisiting.next = nodeVisiting.next.next;
        return removedNode;
    }
    search(data){
        let i = 0;
        let nodeVisiting = this.head;
        while (nodeVisiting !== null) {
            if (nodeVisiting.data === data) {
                return i;
            }

            nodeVisiting = nodeVisiting.next;
            i++;
        }

        return false;
    }
    sort(){
        // if (this.head === null || this.head.next === null) return;
        // // bubble sort babyyyyyy yewwwww
        // // sort first two nodes
        // if (this.head.data > this.head.next.data) {
        //     const temp = this.head.next;
        //     this.head.next = this.head.next.next;
        //     temp.next = this.head;
        //     this.head = temp;
        // }

        // let sorted = false;
        // while (!sorted) {
        //     sorted = true;

        //     const readingFrame = Array(3);
        //     for (nodeVisiting = this.head; nodeVisiting.next.next !== null; nodeVisiting = nodeVisiting.next) {
            
        //         if (nodeVisiting.next.data > nodeVisiting.next.next.data) {
        //             // TODO
        //             // const temp = nodeVisiting.next;
        //             // nodeVisiting.next = nodeVisiting

        //             sorted = false;
        //         }
    
        //     }
        // }
    }
}

module.exports = {
    Node,
    LinkedList
}