class Stack {
  constructor() {
    this._stack = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size > 0;
  }

  push(contents) {
    this._stack.push(contents);
    this.size++;
  }

  top() {
    return this._stack[this.size - 1];
  }

  pop() {
    if (this.size-- > 1) {
      this._stack.pop();
    } else {
      throw 'Stack is Empty';
    }
  }
}

export default Stack
