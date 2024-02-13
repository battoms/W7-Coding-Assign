// Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programatically subtract the first element from the last element
let result = ages[ages.length - 1] - ages[0];
console.log("Result:", result);

// Add a new age to the array
ages.push(45);

// Repeat the subtraction with the new array length
result = ages[ages.length - 1] - ages[0];
console.log("Updated Result:", result);

// Use a loop to calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log("Average Age:", average);

// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average Letters per Name:", averageLetters);

// Concatenate all names together, separated by spaces
let allNames = '';
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + ' ';
}
console.log("Concatenated Names:", allNames.trim());

// Access the last element of any array
let lastElement = ages[ages.length - 1];

// Access the first element of any array
let firstElement = ages[0];

// Create a new array called nameLengths
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log("Name Lengths:", nameLengths);

// Write a loop to calculate the sum of all elements in the nameLengths array
let sumNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumNameLengths += nameLengths[i];
}
console.log("Sum of Name Lengths:", sumNameLengths);

// Write a function to concatenate a word n times
function repeatWord(word, n) {
  return word.repeat(n);
}

// Write a function to return a full name
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

// Write a function to check if the sum of array elements is greater than 100
function isSumGreaterThan100(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}
console.log("some greater than 100:" , isSumGreaterThan100([23, 31, 64]));

// Write a function to calculate the average of array elements
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log("average of numbers:" , calculateAverage([10, 20, 30, ]));

// Write a function to compare the average of two arrays
function isAverageGreaterThan(arr1, arr2) {
  return calculateAverage(arr1) > calculateAverage(arr2);
}

// Write a function called willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}
console.log("will buy drink:", willBuyDrink(true, 15.00));
