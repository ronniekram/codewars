// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// my solution

function narcissistic(value) {
  valueArray = value.toString().split('');
  numbers = [];

  valueArray.forEach(num => {
    numbers.push(Number(num) ** valueArray.length);
  });

  let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)

  return (sum === value ? true : false)
}


// best solution

function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}