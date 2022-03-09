/*
let str = ""; 
console.log(str);

const marks= 60;
const resubmit = -5; 
console.log(!(marks > 0 || resubmit > 0));

const person = {name: "hero", id: 101, address: "BD",postalCode: 40321};
*/

const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
