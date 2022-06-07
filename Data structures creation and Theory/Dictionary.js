function Dictionary() {
  this._data = {};
  this._length = 0;
}
// add element to dictionary.. key should be unique number or string

Dictionary.prototype.add = function (key, value) {
  var keyType = typeof key;
  if (keyType != "string" && keyType != "number") {
    throw "Not a valid key";
  }
  if (this._data.hasOwnProperty(key)) {
    throw "Key already exits";
  }
  this._data[key] = value;
  this._length++;
};
Dictionary.prototype.find = function (key) {
  if (key === null) {
    return undefined;
  }
  var keyType = typeof key;
  if (keyType != "string" && keyType != "number") {
    throw "Not a valid key";
  }
  if (this._data.hasOwnProperty(key)) {
    return this._data[key];
  }
  return undefined;
};

Dictionary.prototype.delete = function (key) {
  if (key === null) {
    return undefined;
  }
  var keyType = typeof key;
  if (keyType != "string" && keyType != "number") {
    throw "Not a valid key";
  }
  if (this._data.hasOwnProperty(key)) {
    delete this._data[key];
    this._length--;
  }
};
var dict = new Dictionary();
dict.add("alice", 123);
dict.add("eve", 456);
dict.add("bob", 789);
// console.log(dict); //Dictionary { _data: { alice: 123, eve: 456, bob: 789 }, _length: 3 }
// console.log("dict.find('alice') = " + dict.find("alice"));  o/p dict.find('alice') = 123
// console.log("dict.find('foo') = " + dict.find("foo")); o/p dict.find('alice') = 123
