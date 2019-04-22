function findMatching(drivers, name) {
  let filtered = drivers.filter(function(driver) {
    // debugger
    return name.toLowerCase() === driver.toLowerCase();
  });
  return filtered;
}

function fuzzyMatch(drivers, chars) {
  let filtered = drivers.filter(driver => driver.startsWith(chars));
  return filtered;
}

function matchName(drivers, name) {
  let filtered = drivers.filter(driver => driver.name === name);
  return filtered;
}
