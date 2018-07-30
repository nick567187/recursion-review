// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
/*
input - className
output - array of elements with the target className
strategy - check to see if the element has children, if it does, recurse. at each element check to see if the class has the target class.
*/
// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className, currentNode, arr) {
var getElementsByClassName = function(className) {
  if(typeof className !== 'string') {
    return;  
  } 
  let currentNode = arguments[1] || document; 
  let arr = arguments[2] || [];
  if(currentNode.className !== undefined) {
    if (currentNode.className.includes(className) === true) {
      arr.push(currentNode)
    }
  }
  if (currentNode.childNodes[0]) {
    for(var i = 0; i < currentNode.childNodes.length; i++) {
      getElementsByClassName(className,currentNode.childNodes[i], arr)
    }
  }
  return arr;
};
