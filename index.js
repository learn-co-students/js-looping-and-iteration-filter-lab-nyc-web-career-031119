// Code your solution in this file

function findMatching(arr, str) {
  return arr.filter(function (text) {
    return text.toLowerCase() === str.toLowerCase();
  });
}

function fuzzyMatch(arr, str) {
  return arr.filter(function(name){
    return name.startsWith(str);
  })
}

function matchName(arr, name) {
  return arr.filter(function (user) {
    return user.name === name;
  })
}
