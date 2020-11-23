// 单向循环链表
class CircularLinkedList extends SingleLinkedList {
  insert(element, index){
    if(index >= 0 && index <= this.count){
      const node = new Node(element);
      let current = this.head;
      if(index === 0){
        if(this.head === null){
          this.head = node;
          node.next = this.head;
        }else{
          node.next = current;
          this.head = node;
          current = this.findByIndex(this.size());
          current.next = this.head;
        }
      }else{
        const previous = this.findByIndex(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  remove(index){
    if(index >= 0 && index < this.count){
      let current = this.head;
      if(index === 0){
        if(this.size() === 1){
          this.head = null;
        } else {
          const removed = this.head;
          this.head = this.head.next;
          current = this.findByIndex(this.size());
          current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.findByIndex(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return null;
  }
}



// 双向循环链表

