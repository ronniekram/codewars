// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// my solution
function validatePIN (pin) {
  return (pin.match(/^[\d]{4}$/) || pin.match(/^[\d]{6}$/) ? true : false)
}

// best solution

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}