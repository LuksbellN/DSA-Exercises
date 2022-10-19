class BinarySearchNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearch {
    constructor() {
        this.root = null
        this.heigth = 0;
    }
    lookup(value) {
        if(this.root) {
            let currentNode = this.root
            while(true) {
                if(currentNode.value === value) {
                    return true;
                } else if(currentNode.value > value) {
                    if(currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        return false;
                    }
                } else {
                    if(currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    }
    insert(value) {
        if(this.lookup(value)) {
            return "This node already exist";
        } else {
            if(this.root == null) {
                this.root = new BinarySearchNode(value);
                return;
            }
            const newNode = new BinarySearchNode(value);
            let currentNode = this.root;
            while(true) {
                if(currentNode.value<newNode.value) {
                    if(currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = newNode;
                        this.heigth++;
                        return true;
                    }
                } else {
                    if(currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        this.heigth++;
                        return true
                    }
                }
            }
        }
    }
    remove(value) {
        if (!this.root) {
            return false;
          }
          let currentNode = this.root;
          let parentNode = null;
          while(currentNode){
            if(value < currentNode.value){
              parentNode = currentNode;
              currentNode = currentNode.left;
            } else if(value > currentNode.value){
              parentNode = currentNode;
              currentNode = currentNode.right;
            } else if (currentNode.value === value) {
              //We have a match, get to work!
              
              //Option 1: No right child: 
              if (currentNode.right === null) {
                if (parentNode === null) {
                  this.root = currentNode.left;
                } else {
                  
                  //if parent > current value, make current left child a child of parent
                  if(currentNode.value < parentNode.value) {
                    parentNode.left = currentNode.left;
                  
                  //if parent < current value, make left child a right child of parent
                  } else if(currentNode.value > parentNode.value) {
                    parentNode.right = currentNode.left;
                  }
                }
              
              //Option 2: Right child which doesnt have a left child
              } else if (currentNode.right.left === null) {
                currentNode.right.left = currentNode.left;
                if(parentNode === null) {
                  this.root = currentNode.right;
                } else {
                  
                  //if parent > current, make right child of the left the parent
                  if(currentNode.value < parentNode.value) {
                    parentNode.left = currentNode.right;
                  
                  //if parent < current, make right child a right child of the parent
                  } else if (currentNode.value > parentNode.value) {
                    parentNode.right = currentNode.right;
                  }
                }
              
              //Option 3: Right child that has a left child
              } else {
      
                //find the Right child's left most child
                let leftmost = currentNode.right.left;
                let leftmostParent = currentNode.right;
                while(leftmost.left !== null) {
                  leftmostParent = leftmost;
                  leftmost = leftmost.left;
                }
                
                //Parent's left subtree is now leftmost's right subtree
                leftmostParent.left = leftmost.right;
                leftmost.left = currentNode.left;
                leftmost.right = currentNode.right;
      
                if(parentNode === null) {
                  this.root = leftmost;
                } else {
                  if(currentNode.value < parentNode.value) {
                    parentNode.left = leftmost;
                  } else if(currentNode.value > parentNode.value) {
                    parentNode.right = leftmost;
                  }
                }
              }
            return true;
            }
          }
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    breadthFirstSearchR(queue, list) {
        if(!queue.length) return list;
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list)
    }
    DFSInorder() {
        return traverInOrder(this.root, []);
    }
    DFSPreOrder() {
        return traverPreOrder(this.root, []);
    }
    DFSPostOrder() {
        return traverPostOrder(this.root, []);
    }
}

function traverInOrder(currentNode, list) {
    if(currentNode.left) traverInOrder(currentNode.left, list);
    list.push(currentNode.value);
    if(currentNode.right) traverInOrder(currentNode.right, list);
    return list;
}

function traverPreOrder(currentNode, list) {
    list.push(currentNode.value);
    if(currentNode.left) traverPreOrder(currentNode.left, list);
    if(currentNode.right) traverPreOrder(currentNode.right, list);
    return list;
}

function traverPostOrder(currentNode, list) {
    if(currentNode.left) traverPostOrder(currentNode.left, list);
    if(currentNode.right) traverPostOrder(currentNode.right, list);
    list.push(currentNode.value);
    return list;
}

//         9
//    4        20
// 1    6   15   170

// DFS- IN ORDER = [1,4,6,9,15,20,170]
// DFS- POST ORDER = [9,4,1,6,20,15,170]
// DFS- PRE ORDER = [1,6,4,15,170,20,9]


let myTree = new BinarySearch();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
console.log(myTree.breadthFirstSearch());
console.log(myTree.breadthFirstSearchR([myTree.root], []));
console.log(myTree.DFSInorder());
console.log(myTree.DFSPreOrder());
console.log(myTree.DFSPostOrder());


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}