// Code your solution in this file
function findMatching(drivers, keyword) {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === keyword.toUpperCase();
  });
}

function fuzzyMatch(drivers, keyword) {
  return drivers.filter(function (driver) {
    return driver.startsWith(keyword);
  });
}

function matchName(drivers, keyword) {
  return drivers.filter( driver => driver.name.toUpperCase() === keyword.toUpperCase());
}
