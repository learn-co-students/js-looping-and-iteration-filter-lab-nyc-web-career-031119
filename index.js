// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName) {
  let name = partialName.length;
  return list.filter(function(driverName) {
    return driverName.slice(0, name) === partialName;
  });
}

function matchName(list, name) {
  return list.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}