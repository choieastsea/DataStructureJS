class Node {
  data;
  prev = null;
  next = null;
  constructor(data) {
    this.data = data;
  }
  setData(data) {
    this.data = data;
  }
  setPrev(node) {
    this.prev = node;
  }
  setNext(node) {
    this.next = node;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  size = 0;
  append(new_node) {
    //추가하고 size + 1;
    if (this.size === 0) {
      this.head = this.tail = new_node;
    } else {
      this.tail.next = new_node;
      new_node.prev = this.tail;
      this.tail = new_node;
    }
    this.size += 1;
  }
  get(index) {
    let iterator = this.head;
    for (let i = 0; i < index; i++) {
      if (iterator.next !== null) {
        iterator = iterator.next;
      } else return -1;
    }
    return iterator;
  }
  insert(index, new_node) {
    //index에 해당하는 node를 찾아서 삽입한다.
    let nodeToFind = this.get(index);
    if (nodeToFind !== -1) {
      if (nodeToFind === this.tail) {
        //맨끝삽입
        this.append(new_node);
      } else {
        //가운데삽입
        new_node.next = nodeToFind.next;
        nodeToFind.next.prev = new_node;
        new_node.prev = nodeToFind;
        nodeToFind.next = new_node;
        this.size += 1;
      }
    } else {
      throw new Error('index에 해당하는 노드가 없습니다.');
    }
  }
  unshift(new_node) {
    if (this.size === 0) {
      this.append(new_node);
    } else {
      this.head.prev = new_node;
      new_node.next = this.head;
      this.head = new_node;
    }
    this.size += 1;
  }
  remove(index) {
    if (index < 0 || index >= this.size) {
      return new Error('Invalid Index');
    } else if (index === 0) {
      //head 삭제시
      this.head.next.prev = null;
      this.head = this.head.next;
      this.size -= 1;
      return;
    } else if (index === this.size - 1) {
      //tail 삭제시
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.size -= 1;
      return;
    }
    let iterator = this.head;
    for (let i = 0; i < index; i++) {
      iterator = iterator.next;
    }
    iterator.prev.next = iterator.next;
    iterator.next.prev = iterator.prev;
    this.size -= 1;
  }
  search(data) {
    //해당 data를 갖는 node를 찾아 있다면 index를 return 없으면 -1 return
    let iterator = this.head;
    let count = 0;
    while (iterator !== null) {
      if (iterator.data === data) return count;
      else {
        iterator = iterator.next;
        count += 1;
      }
    }
    return -1;
  }
  isEmpty() {
    return size === 0;
  }
  printFromHead() {
    let iterator = this.head;
    process.stdout.write('head');
    for (let i = 0; i < this.size; i++) {
      process.stdout.write(` ↔ ${iterator.data}`);
      if (iterator.next !== null) {
        iterator = iterator.next;
      }
    }
    process.stdout.write(` ↔ tail`);
    console.log('');
  }
}
const ll = new DoublyLinkedList();
ll.append(new Node(1));
ll.append(new Node(2));
ll.append(new Node(3));
ll.append(new Node(5));
ll.append(new Node(6));
// ll.insert(100, new Node('안될것'));
ll.printFromHead();
console.log('size : ' + ll.size);
for (let i = 0; i < ll.size; i++) {
  console.log(`get(${i}) :  ${ll.get(i).data}`);
}
console.log(`get(7) : ${ll.get(7)}`);
ll.insert(2, new Node(123));
ll.insert(2, new Node('hi hi'));
ll.printFromHead();
console.log(`size: ${ll.size}`);
ll.insert(6, new Node('맨끝 노드'));
ll.printFromHead();
console.log(`Where is 123? index : ${ll.search(123)}`);
console.log(`Where is '맨끝 노드'? index : ${ll.search('맨끝 노드')}`);
console.log(`Where is '없는 노드'? index : ${ll.search('없는 노드')}`);
ll.unshift(new Node(-1));
ll.unshift(new Node(909));
ll.printFromHead();
ll.remove(2);
ll.remove(2);
ll.remove(0);
ll.printFromHead();
