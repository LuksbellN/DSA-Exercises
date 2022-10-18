class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        console.log(this.top)
    }
    push(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const temp = this.top
            this.top = newNode
            this.top.next = temp 
        }
        this.length++;
        return this
    }
    pop() {
        if(!this.isEmpty()) {
            const temp = this.top.next;
            this.top = temp
            this.length--;
            return this;
        }
        if(this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
            return null;
        }  
        if(this.isEmpty()) {
            return null;            
        }
    }
    isEmpty() {
        return this.length === 0
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push("google");
myStack.peek()
myStack.push("discord");    
myStack.peek();
myStack.pop();
myStack.peek();
myStack.push("udemy");
myStack.push("wb3school");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.peek();