function HashTable() {
  this._bucketSize = 23;
  this._buckets = [];
  this._buckets.length = this._bucketSize;
}

// hash function
HashTable.prototype.computeHash = function (data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }

  return total % this._bucketSize;
};
// insert using seperate chaining
HashTable.prototype.put = function (key, value) {
  var keyType = typeof key;
  if (keyType != "string" && keyType != "number") {
    return "invalid key";
  }
  var hash = this.computeHash(key);
  if (this._buckets[hash] === undefined) {
    this._buckets[hash] = {};
  }
  var chain = this._buckets[hash];
  if (chain.hasOwnProperty(key)) {
    return "no dupllicate key allowed";
  }
  chain[key] = value;
};
HashTable.prototype.get = function (key) {
  var keyType = typeof key;
  if (keyType != "string" && keyType != "number") {
    return "invalid key";
  }
  var hash = this.computeHash(key);
  if (this._buckets[hash] === undefined) {
    return undefined;
  }
  var chain = this._buckets[hash];
  if (chain.hasOwnProperty(key)) {
    return chain[key];
  }
  return undefined;
};

var contacts = new HashTable();
contacts.put("Anna", 678);
contacts.put("Jordan", 123);
console.log("Anna's Phone: " + contacts.get("Anna"));
console.log("Jordan's Phone: " + contacts.get("Jordan"));
console.log("Frank's Phone: " + contacts.get("Frank"));

// insert using open adressing

HashTable.prototype.put = function (key, value) {
  var keyType = typeof key;
  if (keyType != "string" && keyType != "number") {
    return "invalid key";
  }
  var hash = this.computeHash(key);

  if (this._buckets[hash] === undefined) {
    //yayy no colission found
    this._buckets[hash] = {};
    this._buckets[hash][key] = value;
    return;
  } else if (this._buckets[hash].hasOwnProperty(key)) {
    return "no duplicate key allowed";
  }
  // colission found
  var bucketId = hash + 1;
  do {
    if (bucketId >= this._bucketSize) {
      // Reached the end.
      // Start from the beginning
      bucketId = 0;
    }
    if (this.buckets[bucketId] === undefined) {
      //found empty slot fill it
      this.buckets[bucketId] = {};
      this.buckets[bucketId][key] = value;
      return;
    }
    bucketId++;
  } while (bucketId != hash);
  // couldnt find an empty slot
  return "no empty slot ";
};
HashTable.prototype.get = function (key) {
  var keyType = typeof key;
  if (keyType != "string" && keyType != "number") {
    return "invalid key";
  }
  var hash = this.computeHash(key);
  if (this._buckets[hash] === undefined) {
    return undefined;
  } else if (this._buckets[hash].hasOwnProperty(key)) {
    return this._buckets[hash][key];
  }
  // Possible Collision.
  // Iterate through the table using the
  // probing sequence used by the put function

  var bucketId = hash + 1;
  do {
    if (this._bucketId >= this._bucketSize) {
      //rechaeed end
      //start from beginning
      bucketId = 0;
    }
    if (this._buckets[bucketId] == undefined) {
      return `Found Empty slot from given key ,, no value is there `;
    } else if (this._buckets[bucketId].hasOwnProperty(key)) {
      return this._buckets[hash][key];
    }
    bucketId++;
  } while (bucketId != hash);
  return undefined;
};
var contacts = new HashTable();
contacts.put("Anna", 678);
contacts.put("Jordan", 123);
console.log("Anna's Phone: " + contacts.get("Anna"));
console.log("Jordan's Phone: " + contacts.get("Jordan"));
console.log("Frank's Phone: " + contacts.get("Frank"));
