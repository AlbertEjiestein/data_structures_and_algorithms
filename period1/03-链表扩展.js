class Node {
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(){
    this.head = new Node('head');
  }
  // 根据value查找节点
  findByValue(item){
    let current = this.head.next;
    while(current){
      if(current.element === item){
        return current;
      }
      current = current.next;
    }
    return -1;
  }

  // 根据index查找节点
  findByIndex(index){
    let pos = 0;
    let current = this.head.next;
    while(current){
      if(pos === index){
        // console.log(current);
        return current;
      }
      pos++;
      current = current.next;
    }
    return -1;
  }
  
  // 查找前一个
  findPrev(item) {
    let current = this.head.next;
    while(current){
      if(current.next.element === item) {
        return current;
      }
      current = current.next;
    }
    return -1;
  }
  
  // 增加节点
  append(value){
    const newNode = new Node(value);
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
  }

  // 按位置插入节点
  insertByIndex(item, index) {
    const currentNode = this.findByIndex(index);
    if(currentNode === -1) {
      console.log('未找到插入位置');
      return;
    }
    let newNode = new Node(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    console.log('插入成功')
  }

  // 按值插入节点
  insertByValue(newElement, element){
    const currentNode = this.findByValue(element);
    if(currentNode === -1){
      console.log('未找到插入位置');
      return;
    }
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    console.log('插入成功')
  }

  // 删除某一节点
  remove(item) {
    let current = this.head.next;
    while(current.next) {
      if(current.next.element === item) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // 遍历显示所有节点
  display() {
    let current = this.head.next;
    while(current) {
      console.log(current)
      current = current.next;
    }
  }

  // 反转单链表-尾插法
  reverseList1(){
    let root = new Node('head');
    let current = this.head.next;
    let next = null;
    while(current){
      next = current.next;
      current.next = root.next;
      root.next = current;
      current = next;
    }
    this.head = root;
  }

  // 反转单链表-就地反转法
  reverseList2(){
    let root = this.head;
    let prev = this.head.next;
    if(!prev){
      return;
    }
    let current = this.head.next.next;
    while(current) {
      prev.next = current.next;
      current.next = root.next;
      root.next = current;
      current = prev.next;
    }
    this.head = root;
  }

  // 环检测
  checkCircle() {
    let fast = this.head;
    let slow = this.head;
    while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) return true;
    }
    return false;
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    if(this.checkCircle()) return false;
    this.reverseList1();
    let current = this.head.next;
    let pos = 1;
    while(current && pos < index){
      pos++;
      current = current.next;
    }
    if(current === null){
      console.log('无法删除最后一个节点或要删除的节点不存在');
      return false;
    }
    this.remove(current.element);
    this.reverseList1();
    console.log(this.head)
  }

  // 求中间节点
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow)
    return slow;
  }
}

const mergeSortedLists = (listA, listB) => {
  if(!listA) {
    return listB;
  }
  if(!listB) {
    return listA;
  }

  let a = listA;
  let b = listB;
  let resultList = undefined;
  if(a.element < b.element){
    resultList = a;
    a = a.next;
  }else {
    resultList = b;
    b = b.next;
  }

  let currentNode = resultList;
  while(a && b){
    if(a.element < b.element){
      currentNode.next = a;
      a = a.next;
    }else {
      currentNode.next = b;
      b = b.next;
    }
    currentNode = currentNode.next;
  }

  currentNode.next = a ? a : b;
  return resultList;
}


const slList = new SingleLinkedList();
// slList.append(1);
// slList.append(2);
// slList.append(3);
slList.append(4);
slList.append(5);
slList.append(6);
slList.append(7);
// console.log(slList.reverseList1())
// console.log(slList.reverseList2())
// slList.removeByIndexFromEnd(7)
// slList.findMiddleNode()
const slList2 = new SingleLinkedList();
slList2.append(0);
slList2.append(1);
slList2.append(2);
let sortedList = mergeSortedLists(slList.head.next, slList2.head.next);
while(sortedList){
  console.log(sortedList.element);
  sortedList = sortedList.next;
}