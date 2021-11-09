class MinHeap {
    //1. 완전 이진 트리는 노드클래스 없이 배열로 구현 가능
    //index n의 자식 노드: 2n,2n+1
    //i의 부모 노드: parseInt(n/2)
    //2. 부모 노드의 키 값은 항상 자식 노드의 키 값보다 작다
    heap_list = [null,];
    //[null, 1, 2, 3]의 경우 count는 3
    count = 0;

    swap = (index_a, index_b) => {
        //swap은 재활용 많이 되므로
        let tmp = this.heap_list[index_a];
        this.heap_list[index_a] = this.heap_list[index_b];
        this.heap_list[index_b] = tmp;
    }
    insert = (value) => {
        //일단 Complete Binary Tree의 말단에 값을 삽입하고, 해당 인덱스에서 heapify 수행
        this.heap_list.push(value);
        this.heapify(this.heap_list.length - 1);
        this.count += 1;
    }
    pop = () => {
        //루트 노드를 삭제
        //루트 노드와 마지막 노드의 위치를 바꾸고 루트였던 노드를 삭제한다. 그리고 heap 조건을 맞추도록 reverse heapify 수행
        this.swap(1, this.count);
        const returnValue = this.heap_list.pop();
        this.count -= 1;
        this.reverseHeapify(1);
        return returnValue;
    }
    heapify = (index) => {
        //하나씩 삽입할 때, 끝에서부터 올라오면서 힙의 조건을 만족시키도록(min heap에서는 부모가 더 크다면) 재귀적으로 스왑해주도록 한다
        if (index > 1) {
            const parentIndex = parseInt(index / 2);
            if (this.heap_list[index] < this.heap_list[parentIndex]) {
                this.swap(index, parentIndex);
            }
            this.heapify(parentIndex);

        }
        else {
            return;
        }
    }
    reverseHeapify = (index) => {
        //index, index*2, index*2+1번째 원소 중 가장 작은 것을 parent node로 스왑해준다.
        //바뀐 노드에서 다시 재귀적으로 수행
        if (index * 2 > this.count) {
            //재귀 탈출 조건 : 자식 노드가 없는 아예 경우(한쪽만 있는 경우 처리 필요)
            return;
        }
        else if (index * 2 == this.count) {
            //왼쪽 자식만 있는 경우
            const current = this.heap_list[index];
            const leftChild = this.heap_list[index * 2];
            if (current <= leftChild) {
                return;
            }
            else {
                //왼쪽 자식이 더 작은 경우
                this.swap(index, index * 2);
                return;
            }
        }
        else {
            const current = this.heap_list[index];
            const leftChild = this.heap_list[index * 2];
            const rightChild = this.heap_list[index * 2 + 1];
            if (current <= leftChild && current <= rightChild) {    //current node가 가장 작은 경우
                return;
            }
            else if (leftChild <= current && leftChild <= rightChild) {  //leftChild node가 가장 작은 경우
                this.swap(index, index * 2);
                this.reverseHeapify(index * 2);
            }
            // else if (rightChild < current && rightChild < leftChild) {                                                      //그 외의 경우(rightChild node가 가장 작거나, 모두 같거나 등)
            else {
                this.swap(index, index * 2 + 1);
                this.reverseHeapify(index * 2 + 1);
            }

        }
    }
}
const heapSort = (arr) => {
    //heap을 이용한 정렬
    const min_heap = new MinHeap();
    const sortedArr = [];
    arr.map(node => {
        min_heap.insert(node);
    });
    arr.map((e) => {
        const popEl = min_heap.pop();
        sortedArr.push(popEl)
    })
    return sortedArr;
}

const heap = new MinHeap();
// heap.heap_list = [null, 1, 3, 2, 5];
// heap.heapify(5);
heap.insert(1);
heap.insert(5);
heap.insert(10);
heap.insert(7);
heap.insert(51);
heap.insert(1);

console.log(heap.heap_list);
console.log(`popped: ${heap.pop()}`);
console.log(heap.heap_list);
console.log(`popped: ${heap.pop()}`);
console.log(heap.heap_list);

console.log('heapsort')
console.log(heapSort([10, 3, 5, 4, 2, -2, 0, 100, 29, 22, 1, 233, -4]));
