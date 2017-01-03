/**
  *
  * `addChild` 와 `map` method를 가지고 있는 Tree class를 구현하세요.
  * Tree class는 psuedoclassical instantiation pattern을 사용합니다.
  * Map은 mapping function을 argument로 받습니다.
  *  mapping function은 tree를 traverse하여 각 node의 value를 받습니다.
  *  그리고 output으로 새로운 value가 변경된 tree를 return합니다.
  *  즉, map은 tree structure를 유지하며 각 tree의 value만 바꿉니다.
  *  단, input으로 받은 tree는 mutate하지 않습니다. output으로 새로운 tree가 나오는것이지요.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */


var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value){
  this.children.push(value)
};

Tree.prototype.map = function(callback){

};


var tree = new Tree();
