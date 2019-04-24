// Code your solution in this file
      
function findMatching(drivers, name) {
	return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() ); 
}

// function findMatching (list, name) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase();
//   });
// }





 function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  	return 	list.filter(driverName => driverName.slice(0, lengthOfName) === partialName )
 }


//  function fuzzyMatch (list, partialName) {
//   let lengthOfName = partialName.length;
//   return list.filter(function (driverName) {
//     return driverName.slice(0, lengthOfName) === partialName;
//   });
// }






function matchName (list, name) {
  return list.filter(driver => driver.name.toLowerCase() === name.toLowerCase() );
  }

// function matchName (list, name) {
//   return list.filter(function (driver) {
//     return driver.name.toLowerCase() === name.toLowerCase();
//   });
// }