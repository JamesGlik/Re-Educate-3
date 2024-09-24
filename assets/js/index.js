let numbers = [2,3,5,7,11,13];

let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers)

let evenNumbers = numbers.filter(num => num % 2 ===0);
console.log(evenNumbers)

let total = numbers.reduce((accumulator,currentValue) => accumulator + currentValue, 0 );
console.log(total)

let number = 16
console.log(number > 10 && number % 2 ===0);