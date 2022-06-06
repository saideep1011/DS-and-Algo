function Queue() {
  this._head = 0;
  this._Data = [];
}
// enqueue
Queue.prototype.enQueue = function (data) {
  this._Data.push(data);
};
// dequeue
Queue.prototype.deQueue = function () {
  if (this._head < 0 || this._head >= this._Data.length) {
    return null;
  }
  var deQueueItem = this._Data[this._head];
  this._head++;
  return deQueueItem;
};
//peek
Queue.prototype.peek = function () {
  if (this._head < 0 || this._head >= this._Data.length) {
    return null;
  }
  var peekItem = this._Data[this._head];
  return peekItem;
};

var myqueue = new Queue();

myqueue.enQueue(200);
myqueue.enQueue(300); //Queue { _head: 0, _Data: [ 200, 300 ] }


