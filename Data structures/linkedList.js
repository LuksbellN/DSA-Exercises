// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    this.tail.next = {value, next: null};
    this.length++;
    this.tail = this.tail.next;
  }
  preppend(value) {
    let newNode = {value, next:this.head};
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
      let list = [];
      let currentNode = this.head;
      while(currentNode !== null) {
          list.push(currentNode.value);
          currentNode = currentNode.next;
      }
      console.log(list);
  }
  insert(index, value) {
    if(index >= this.length) {
      this.append(value);
    } else if(index <= 0) {
      this.preppend(value);
    } else {
      const newNode = {
          value: value,
          next: null
      };
      const leader = this.traverseToIndex(index-1);
      const header = leader.next;
      newNode.next = header;
      leader.next = newNode;
    }
  }
  traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
          currentNode = currentNode.next;
          counter++;
      }
      return currentNode;
  }
  remove(index) {
      let leader = this.traverseToIndex(index-1);
      let removeElement = leader.next;
      leader.next = removeElement.next;
      this.length--;
  }
  reverse() {
    if(!this.head.next) {
      return this.head
    }
    let first = this.head;
    this.tail = first;
    let second = first.next;
    while(second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this.printList()
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.preppend(3);
myLinkedList.preppend(13);
myLinkedList.insert(2,99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.remove(4);
myLinkedList.printList();

myLinkedList.reverse()