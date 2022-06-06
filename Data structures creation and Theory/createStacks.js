// define a stack

function Stack() {
  this._top = -1;
  this._values = [];
}
// pushing element to the stack

Stack.prototype.push = function (data) {
  this._top++;
  this._values[this._top] = data;
};

// poping elments from the stack
Stack.prototype.pop = function () {
  if (this._top < 0) {
    return null;
  }
  var poppedElement = this._values[this._top];
  this._top--;
  this._values.length--;
  return poppedElement;
};
// peeking in elements of stack
Stack.prototype.peek = function () {
  if (this._top < 0) {
    return null;
  }
  return this._values[this._top];
};

// stacks in action

var ourStack = new Stack();
for (let i = 0; i < 3; i++) {
  console.log("pushing in stack" + i);
  ourStack.push(i);
  // here we pushed 0, 1, 2
}
// lets console the top of the stack which should point out to index of 2
console.log(ourStack._top);
//let remove the last elemnt and console it
console.log(ourStack.pop()); // we get last elemt popped out and return value of that is 2
console.log(ourStack); // Stack { _top: 1, _values: [ 0, 1 ] }
