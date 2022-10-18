class Stack{
    constructor() {
        this.top = null
        this.bottom = null
        this.data = []
    }
    peek() {
        console.log(this.top)
    }
    push(value) {
        this.data.push(value);
        if(this.data.length === 1) {
            this.top = value;
            this.bottom = value;
        } else {
            this.top = value;
        } 
    }
    pop() {
        if(this.data.length == 0) {
            return null;
        }
        if(this.top === this.bottom) {
            this.data.pop();
            this.top = null;
            this.bottom = null;
        } else {
            this.data.pop();
            this.top = this.data[this.data.length-1];
        }
    }
    isEmpty() {
        return this.data.length === 0
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push("google");
console.log(myStack);
myStack.peek()
myStack.push("discord");    
myStack.pop()
myStack.peek();
console.log(myStack);