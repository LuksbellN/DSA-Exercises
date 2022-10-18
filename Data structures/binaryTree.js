class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor(value) {
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
                this.root = new BinaryTreeNode(value);
                return;
            }
            const newNode = new BinaryTreeNode(value);
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

    }
}

let myTree = new BinaryTree();
myTree.lookup(1);
myTree.insert(9);
myTree.insert(4);
myTree.insert(20);
myTree.lookup(20);

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}