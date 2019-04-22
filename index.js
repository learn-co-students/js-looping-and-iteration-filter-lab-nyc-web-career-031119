// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(driverName){
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, name){
  let driverLength = name.length
  return drivers.filter(function(driverName){
    return driverName.slice(0, driverLength) === name
  })
}

function matchName(drivers, name){
  return drivers.filter(function(driverName){
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}//fillter builds function as a condition, looks through to match condition of new function
