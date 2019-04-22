// Code your solution in this file
function findMatching(collection, attribute) {
  newArray = collection.filter(name => name.toLowerCase() === attribute.toLowerCase());
  return newArray;
};

function fuzzyMatch(collection, attribute) {
  let match = attribute.slice(0, 2);
  const newArray = collection.filter(name => name.slice(0, 2) == match);
  return newArray;
}

function matchName(collection, attribute) {
  let result = collection.filter(user => user.name === attribute);
  return result;
};
