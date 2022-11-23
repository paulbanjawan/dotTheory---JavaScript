// A simple program that calculates number of seconds in a day, hours in a week, or minutes in a year. 
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;
const daysPerYear = 365;
const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = 26;
const secondsAlive = daysPerYear * yearsAlive * secondsPerDay;
console.log(`I've been alive for more than ${secondsAlive} seconds`);