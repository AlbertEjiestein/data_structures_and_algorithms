class Node{
  constructor(element){
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  cosntructor() {
    this.head = new Node('head');
  }

  findByValue(item){
    let currentNode = this.head.next;
    while(currentNode !== null && currentNode.element !== item){
      currentNode = currentNode.next;
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode;
  }
}

class LinkedList {
  constructor(){
    this.head = head;
  }
}
