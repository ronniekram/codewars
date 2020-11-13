// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// my solution
function parse( data ) {
  let value = 0;
  let returns = []
  data.split('').forEach(char => {
    if (char == 'i') {
      value++;
    } else if (char == 'd') {
      value--;
    } else if (char == 's') {
      value = value ** 2
    } else if (char == 'o') {
      returns.push(value)
    }
  });
  return returns;
}

// best solution

function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);
    
    return cur;
  }, 0);
  
  return res;
}