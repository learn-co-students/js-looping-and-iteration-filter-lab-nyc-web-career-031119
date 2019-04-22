// Code your solution in this file


function findMatching(array, name) {
  return array.filter(function(n) { return name === n || name.toLowerCase() === n })
};

function fuzzyMatch(array, name) {
  return array.filter(function(n) { return n.startsWith(name)})
}

function matchName(array, name) {
  return array.filter(function(n) {return n.name === name})
}
