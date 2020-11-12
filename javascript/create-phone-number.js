// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// my solution
function createPhoneNumber(numbers){
  numbers.splice(3, 0, ") ")
  numbers.splice(7, 0, "-")
  numbers.unshift("(")
  return numbers.join('')
}


// best solution

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}