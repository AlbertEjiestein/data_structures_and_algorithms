class Node {
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(){
    this.head = null;
  }
  // 根据value查找节点
  findByValue(item){
    let current = this.head;
    while(current){
      if(current.element === item){
        // console.log(current);
        return current;
      }
      current = current.next;
    }
    return -1;
  }

  // 根据index查找节点
  findByIndex(index){
    let pos = 0;
    let current = this.head;
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
    let current = this.head;
    while(current){
      if(current.next.element === item) {
        console.log(current)
        return current;
      }
      current = current.next;
    }
    return -1;
  }
  
  // 增加节点
  append(value){
    const newNode = new Node(value);
    if(this.head == null){
      this.head = newNode;
      return;
    }
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
    console.log(currentNode)
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
    console.log(currentNode)
  }

  // 删除某一节点
  remove(item) {
    let current = this.head;
    while(current.next) {
      if(current.next.element === item) {
        current.next = current.next.next;
        console.log(current);
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // 遍历显示所有节点
  display() {
    let current = this.head;
    while(current) {
      console.log(current)
      current = current.next;
    }
  }
}

const slList = new SingleLinkedList();
slList.append(1);
slList.append(3);
slList.append(4);
slList.append(6);
// slList.findByValue(3);
// slList.findByIndex(2);
// slList.findPrev(4);
slList.insertByIndex(2,1);
slList.insertByValue(5,6);
// slList.remove(4)