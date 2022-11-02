// Challenge 1 : For this Code Challenge you need to use JavaScript's Math methods. Declare a new variable named tempRounded. Assign it the temperature variable rounded to the nearest integer.

const temperature = 37.5;
let tempRounded = Math.round(temperature);

// Challenge 2: Next, declare a new variable named tempRoundDown. Assign it the temperature variable rounded downward to the nearest integer. Check the Mozilla Developer Network to find the proper Math method (hint: down is toward the "floor".)

let tempRoundDown = Math.floor(temperature);

console.log(`tempRounded: ${tempRounded}`);
console.log(`tempRoundDown: ${tempRoundDown}`);
