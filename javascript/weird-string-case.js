// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').



// my solution

function toWeirdCase(string){
  string = string.split(" ");
  let output = []
  let caseWord = ""
  string.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      if (i == 0 || i % 2 == 0) {
        caseWord += word[i].toUpperCase();
      } else {
        caseWord += word[i].toLowerCase();
      }
    }
    output.push(caseWord);
    caseWord = ""
  })
  return output.join(" ")
}


// best solution

function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}