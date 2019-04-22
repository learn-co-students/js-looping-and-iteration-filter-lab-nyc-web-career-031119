

function findMatching(drivers, name) {
  return drivers.filter(driver => name.toLowerCase() === driver.toLowerCase());
}

function fuzzyMatch(drivers, chars) {
  return drivers.filter(driver => driver.startsWith(chars));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
