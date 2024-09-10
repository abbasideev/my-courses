/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

//// Stack

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.top = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.pop = newNode;
//     } else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) {
//       return undefined;
//     }

//     let temp = this.top;
//     this.top = this.top.next;
//     temp.next = null;

//     this.length--;
//     return temp;
//   }
// }

// let myStack = new Stack(11);

// myStack.push(22);
// myStack.push(33);

// myStack.pop();

// console.log(myStack);

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

//// Queue

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    if (this.length === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let myQueue = new Queue(11);

myQueue.enqueue(22);
myQueue.enqueue(33);

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);

/////////////////////////////////////////////
