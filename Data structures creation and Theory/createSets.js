function Set() {
  this.set = {};
  this.size = 0;
}
// adding items to the set
Set.prototype.add = function (data) {
  if (!this.set.hasOwnProperty(data)) {
    this.set[data] = "true";
    this.size++;
  }
};
// remove
Set.prototype.remove = function (data) {
  if (this.set.hasOwnProperty(data)) {
    delete this.set[data];
    this.size--;
  }
};
// membership
Set.prototype.memberOfSet = function (data) {
  if (this.set.hasOwnProperty(data)) {
    return true;
  }
  return false;
};

var myset = new Set();
myset.add(1);
myset.add(2);
myset.add(3);
console.log(myset);

var secondSet = new Set();
secondSet.add(3);
secondSet.add(2);
secondSet.add(4);
console.log(secondSet);
// union of sets
Set.prototype.union = function (secondset) {
  var unionset = new Set();
  // first we add whole set 1 to union set
  for (var key in this.set) {
    if (this.set.hasOwnProperty(key)) {
      unionset.add(key);
    }
  }
  // next we check if there exists a key which is not in second set and add that specific key
  for (var key in secondset.set) {
    if (!unionset.set.hasOwnProperty(key)) {
      unionset.add(key);
    }
  }
  return unionset;
};
Set.prototype.Intersection = function (secondset) {
  var interset = new Set();
  for (var key in this.set) {
    if (secondset.set.hasOwnProperty(key)) {
      interset.add(key);
    }
  }
  return interset;
};

Set.prototype.Difference = function (secondset) {
  var DifferenceSet = new Set();
  for (var key in this.set) {
    if (!secondset.set.hasOwnProperty(key)) {
      DifferenceSet.add(key);
    }
  }
  return DifferenceSet;
};
console.log(secondSet.Difference(myset));
