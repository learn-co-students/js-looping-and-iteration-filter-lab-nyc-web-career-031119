// Code your solution in this file
function findMatching(drivers, string) {
  string = string.toLowerCase();
  for (const person of drivers) {
    person.name = person.name.toLowerCase();
  }

  const group = drivers.filter(function (person) {return person.name === string;} )
  let names = [];
  for(const person of group) {
    names.push(person.name);
  }
  return names;
}


function fuzzyMatch(drivers, string) {
  string = string.toLowerCase();
  let shortString = string.slice(0,2);
  let superShort = string.slice(0,1);
  for (const person of drivers) {
    person.name = person.name.toLowerCase();
  }

  const group = drivers.filter(function (person) {return person.name === string || person.name.slice(0,2) === shortString || person.name.slice(0,1) === superShort});
  let names = [];
  for (const person of group) {
    names.push(person.name);
  }
  return names;
}

function matchName(drivers, string) {
  // string = string.toLowerCase();
  // for (const person of drivers) {
  //   person.name = person.name.toLowerCase();
  // }

  return drivers.filter(function (person) {return person.name === string;} )
  // let names = [];
  // for(const person of group) {
  //   names.push(person.name);
  // }
  // return names;
}
