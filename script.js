//your JS code here. If required.
var student = {
  name : "Rahul",
  age : 22
}
Object.prototype.getKeys = function () {
  var a = [];
  for(var i in this) {
    a.push(i);
  }
  return a;
}
