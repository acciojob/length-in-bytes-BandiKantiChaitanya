const byteSize = (str) => {
  // write your code here
	let byteCount = 0;
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
	  if (charCode <= 0x7F) {
      byteCount += 1;
    } else if (charCode <= 0x7FF) {
      byteCount += 2;
    } else if (charCode <= 0xFFFF) {
      byteCount += 3;
    } else {
      byteCount += 4
    }
  }
  return byteCount;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
