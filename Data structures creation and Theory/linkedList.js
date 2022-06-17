function Node(data) {
  this.data = data;
  this.next = null;
}
function LinkedList() {
  this._length = 0;
  this._head = null;
}
LinkedList.prototype.push = function (data) {
  // Create a new node with Data
  var node = new Node(data);

  // We are inserting the first node in the list
  if (this._head === null) {
    this._head = node;
  } else {
    // Find the last node
    var current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  // Increment the length
  this._length++;
};
LinkedList.prototype.size = function () {
  return this._length;
};
// We follow the 0 based indexes just like Arrays
LinkedList.prototype.itemAt = function (index) {
  // Ensure that the index is within bounds
  if (index < 0 || index >= this._length) {
    // Return Null when index is out of bounds
    return null;
  }

  var current = this._head;
  var counter = 0;

  while (counter < index) {
    current = current.next;
    counter++;
  }

  return current.data;
};
// Removes the element and returns the data
// in the node that was removed
LinkedList.prototype.remove = function (index) {
  // Ensure that the index is within bounds
  if (index < 0 || index >= this._length) {
    return null;
  }

  var current = this._head;

  if (index === 0) {
    // Special case for removing the head node.
    this._head = current.next;
  } else {
    // Track previous element
    var previous = null;
    var counter = 0;

    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }

    // Set previous node's next
    // to the node after the deleted node
    previous.next = current.next;
  }

  this._length--;
  return current.data;
};

// Let's create a Linked List and add 3 nodes

// // Remove the 3rd element
// var removed = list.remove(2);
// console.log("removed: " + removed);

// // Remove the head node
// var removed = list.remove(0);
// console.log("removed: " + removed);

// console.log("Length after removal: " + list.size());

// Returns the index of the node containig
// the data (assume unique data for simplicity)
LinkedList.prototype.search = function (data) {
  var current = this._head;
  while (current) {
    if (current.data === data) {
      return current.data;
    }
    current = current.next;
  }
};
var list = new LinkedList();
list.push("Stacks");
list.push("Queues");
list.push("Arrays");
list.push("Sets");

console.log("Length before removal: " + list.size());
console.log("wanrted el: " + list.search("Sets"));
