// Code your solution in this file
function findMatching(drivers, str){
  return drivers.filter(driver => driver.toLowerCase() == str.toLowerCase());
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(driver){
    return driver.slice(0, string.length).toLowerCase() === string.toLowerCase();
  });
}

function matchName(drivers, string){
  return drivers.filter(function(driver){
    return driver.name === string
  });
}
