class doublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = {
      value,
      next: null,
      previous: this.tail,
    };
    this.tail.next = newNode;
    this.length++;
    this.tail = newNode;
  }
  preppend(value) {
    let newNode = {
      value,
      next: this.head,
      previous: null,
    };
    this.head.previous = newNode;
    this.length++;
    this.head = newNode;
  }
  printList() {
    let list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }
  printReverseList() {
    let list = [];
    let currentNode = this.tail;
    while (currentNode.previous !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.previous;
    }
    console.log(list);
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index <= 0) {
      this.preppend(value);
    } else {
      const newNode = {
        value: value,
        next: null,
        previous: null,
      };
      const leader = this.traverseToIndex(index - 1);
      const header = leader.next;
      newNode.next = header;
      leader.next = newNode;
      newNode.previous = leader;
      header.previous = newNode;
    }
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    let leader = this.traverseToIndex(index-1)
    let removed = leader.next;
    let afterRemoved = removed.next
    leader.next = removed.next;
    afterRemoved.previous = leader
    removed.next = null
    removed.previous = null
  }
}
let list = new doublyLinkedList(10);
list.printList();
