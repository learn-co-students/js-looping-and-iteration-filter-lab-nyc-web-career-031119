// Code your solution in this file
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, name) {
    const answer = arr.filter(function (driver) { return driver.toLowerCase() == name.toLowerCase(); });
    return answer
}

function fuzzyMatch(arr, letter) {
    let answ = arr.filter(function (driver) { return driver[0].toLowerCase() == letter[0].toLowerCase(); });
    return answ
}

function matchName(arr, name) {
    const answer = arr.filter(function (driver) { return driver["name"].toLowerCase() == name.toLowerCase(); });
    return answer
}