function addBorder(picture) {
  // create a string of asterisks the length of first element + 2 (or add asterisk to each side of element and then create string of asterisks based on that length)
  // insert string at beginning and end of array
  // add 1 asterisk to each side of element
  picture = picture.map(str => {return `*${str}*`});
  let frame = ''
  for (let i = 0; i < picture[0].length; i++) {
      frame += '*'
  }
  let framedPic = [frame];
  picture.forEach(str => {framedPic.push(str)});
  framedPic.push(frame);
  return framedPic;
}
