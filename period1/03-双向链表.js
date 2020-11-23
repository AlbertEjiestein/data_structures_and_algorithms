class Node {
  constructor(element, prev, next){
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor(){
    this.count = 0;
    this.head = null;
    this.tail = null;
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
  
  insert(element, index){
    if(index >= 0 && index <= this.count){
      const node = new Node(element);
      let current = this.head;
      if(index === 0){
        if(this.head === null){
          this.head = node;
          this.tail = node;
        }else{
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      }else if(index === this.count){
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      }else{
        const previous = this.findByIndex(index);
        current = previous.next;
        node.next = current;
        current.prev = node;
        previous.next = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index){
    if(index >= 0 && index <= this.count){
      let current = this.head;
      if(index === 0){
        this.head = current.next;
        if(this.count === 1){
          this.tail = null;
        }else{
          this.head.prev = null;
        }
      } else if (index === this.count - 1){
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        current = this.findByIndex(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return false;
  }
}
