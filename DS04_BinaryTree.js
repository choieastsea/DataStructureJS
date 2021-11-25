class BT_Node {
    value;
    leftChild = null;
    rightChild = null;
    constructor(value) {
        this.value = value;
    }
}

class BinaryTree {
    root;
    print = () => {
        //post-order-traverse로 출력
        this.traverse(this.root);
    }
    printTree = () => {
        //BFS탐색하여 tree 계층적으로 출력
        this.bfsTraverse(this.root);
    }
    traverse = (node) => {
        //traverse한다는 뜻은 탐색한다는 것이고 여기서는 출력으로 의미를 대체한다.
        //pre-order-traverse(부모-왼쪽-오른쪽 자식순으로 탐색)
        console.log(node.value);
        if (node.leftChild) {
            this.traverse(node.leftChild);
        }
        if (node.rightChild) {
            this.traverse(node.rightChild);
        }
    }
    bfsTraverse = (node) => {
        //bfs방식으로 순회하여 출력한다.
        //queue를 사용하여 bfs 구현
        const queue = [];
        queue.push(node);
        while (queue.length !== 0) {
            const current_node = queue.shift();
            console.log(current_node.value);
            if (current_node.leftChild) {
                queue.push(current_node.leftChild);
            }
            if (current_node.rightChild) {
                queue.push(current_node.rightChild);
            }
        }
    }
}

const node_1 = new BT_Node(1);
const node_2 = new BT_Node(2);
const node_3 = new BT_Node(3);
const node_4 = new BT_Node(4);
const node_5 = new BT_Node(5);
const node_6 = new BT_Node(6);
const node_7 = new BT_Node(7);
const node_8 = new BT_Node(8);

node_1.leftChild = node_2;
node_1.rightChild = node_3;
node_2.leftChild = node_4;
node_2.rightChild = node_5;
node_3.leftChild = node_8;
node_3.rightChild = node_7;
node_7.leftChild = node_6;

const bt = new BinaryTree();
bt.root = node_1;
console.log('pre-order- traverse');
bt.print();
console.log('---');
console.log('BFS traverse');

bt.bfsTraverse(bt.root);