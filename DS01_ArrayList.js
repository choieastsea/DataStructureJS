class ArrayList {
  list = [];
  length = 0; //ArrayList의 크기. [1,2,3]의 경우 크기는 3이다.
  constructor(param = []) {
    if (typeof param === 'number') {
      this.list = new Array(param);
      this.length = param;
    } else {
      if (param.constructor === Array) {
        //배열 인자로 들어온 경우
        this.list = param;
        this.length = param.length;
      } else {
        console.log('Invalid PARAM');
        return -1; //올바르지 않은 인자 생성자로 들어온 경우
      }
    }
  }
  get(index) {
    //index번째 원소를 return한다. index가 유효하지 않은 경우 -1을 return
    return index >= 0 && index < this.length ? this.list[index] : -1;
  }
  set(index, obj) {
    //index번째 원소를 obj로 set해준다.
    this.list[index] = obj;
  }
  append(obj) {
    //제일 뒤에 추가해주고 길이 1 늘려준다
    this.list[this.length] = obj;
    this.length += 1;
  }
  insert(index, obj) {
    //index 뒤에 obj를 삽입한다. index가 유효한 경우, 경우는 맨 끝에 삽입하거나 중간에 삽입하는 두가지가 있다. 모두 splice로 대응 가능
    if (index >= 0 && index < this.length) {
      this.list.splice(index + 1, 0, obj);
      this.length += 1;
    } else {
      console.log('Invalid index');
      return -1;
    }
  }
  unshift(obj) {
    //맨 앞에 obj를 삽입한다.
    this.list.unshift(obj);
    this.length += 1;
  }
  remove(index) {
    if (index >= 0 && index < this.length) {
      this.list.splice(index, 1);
      this.length -= 1;
    }
  }
  search(obj) {
    for (let i = 0; i < this.length; i++) {
      if (this.list[i] === obj) {
        return i;
      }
    }
    return -1;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const arrayList = new ArrayList();
console.log('arrayList.isEmpty() : ' + arrayList.isEmpty());
arrayList.append(1);
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
arrayList.append(3);
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
arrayList.append({ 2: 'object' });
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
console.log(arrayList.get(2));
arrayList.insert(2, '3');
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
arrayList.remove(2);
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
arrayList.insert(0, 0);
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
let element = 3;
arrayList.insert(2, element);
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
console.log('index of 3: ' + arrayList.search(element));
arrayList.unshift({ number: 12 });
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
arrayList.remove(arrayList.length - 1);
console.log(arrayList.list);
console.log('length: ' + arrayList.length);
