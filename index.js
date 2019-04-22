// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch (list, firstLetters) {
  let lengthOfName = firstLetters.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === firstLetters;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
