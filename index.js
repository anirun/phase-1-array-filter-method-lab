// Code your solution here
function findMatching(driverArray, name) {
    return driverArray.filter(inputDriver => inputDriver.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(driverArray, name) {
    return driverArray.filter(inputLetters => inputLetters[0].toLowerCase() === name[0].toLowerCase());
};

function matchName(driverArray, name) {
    return driverArray.filter(person => person.name === name);
}