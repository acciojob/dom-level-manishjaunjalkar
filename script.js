//your JS code here. If required.
let levelElement = document.getElementById('level');
let level = 0;
let currentNode = levelElement;

while (currentNode.parentNode) {
  level++;
  currentNode = currentNode.parentNode;
}

alert('The level of the element is: ' + level);