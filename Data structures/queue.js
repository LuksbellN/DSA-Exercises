class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        console.log(this.first);
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        if(this.length === 0) {
            return null;
        } else if(this.last === this.first) {
            this.last = null;
            this.first = null;
            this.length = 0; 
            return null;
        } 
        const second = this.first.next;
        this.first.next = null;
        this.first = second;
        this.length--;
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.peek();
myQueue.enqueue(2);
myQueue.peek();
myQueue.enqueue(3);
myQueue.peek();
myQueue.dequeue();
myQueue.peek();   